class ActivitiesController < ApplicationController
    def create
        return render json: { success: false }, status: :not_found unless params[:user_id].present?

        user = User.find(params[:user_id])

        existing_activity_today = Activity.find_by(user: user, plant_id: params[:plant_id], gist: params[:gist], created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day)

        if existing_activity_today.nil?
            Activity.create!(user: user, plant_id: params[:plant_id], gist: params[:gist]) 
        end
        
        render json: Activity.where(user_id: params[:user_id]).group_by(&:group_by_criteria).map {|k,v| [k, v.map{|a| ActivitySerializer.new(a)}]}.sort.reverse, status: :ok
    end

    def index
        return render json: { success: false }, status: :not_found unless params[:user_id].present?

        render json: Activity.where(user_id: params[:user_id]).group_by(&:group_by_criteria).map {|k,v| [k, v.map{|a| ActivitySerializer.new(a)}]}.sort.reverse, status: :ok
    end

    def destroy
        return render json: { success: false }, status: :not_found unless params[:activity_id].present?

        success = Activity.find(params[:activity_id]).destroy!

        render json: { success: success }, status: :ok
    end
end