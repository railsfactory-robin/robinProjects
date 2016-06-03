class HomeController < ApplicationController
  skip_before_filter  :verify_authenticity_token, only: [:register]
  def index
  end

  def main
  	# @user = User.new
  	# @user.authenticate_user
  	@user = User.authenticate_user params
  	render json: {user: @user}
  end
  def homepage
     
  end
  def signup

  end
  def register
    @user = User.new(user_params)
    if @user.save
      render json: { user: @user}
    else
      render json: {user: 'failed to create user'}
    end
  end

  def user_params
    params.permit(:firstname, :lastname, :email, :phone, :password)
  end
end
