class UsersController < ApplicationController

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
        render json: @user
    else
        render json: {error: "INCORRECT EMAIL OR PASSWORD"}, status: 422
    end
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
        render json: @user
    else
        render json: {error: "INVALID USER"}, status: 422
    end
  end

  private

  def user_params
      params.permit(:first_name, :last_name, :email, :password)
  end


end
