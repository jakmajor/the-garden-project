class ApplicationController < ActionController::API
  include ActionController::Cookies

  private
  def invalid_user_data(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
end
