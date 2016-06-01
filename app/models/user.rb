class User < ActiveRecord::Base
	def self.authenticate_user params
		users = User.where(email: params[:username], password: params[:password])
		if users.count > 0
			return users.last
		else
			return 'Invalid email or password'
		end
	end
end