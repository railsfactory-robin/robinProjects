class User < ActiveRecord::Base
	def self.authenticate_user params
		users = User.where(email: params[:email], password: params[:password])
		if users.count > 0
			return users.last
		else
			return 'Invalid email or password'
		end
	end
end