class PlantsController < ApplicationController
    def index
        render json: Plant.all, status: :ok
    end
end
