class HomeController < ApplicationController
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
end
