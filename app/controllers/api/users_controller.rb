class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show 
          else
            # Tell the user that something went wrong. Let them try again.
            render json: @user.errors.full_messages, status: 401
        end
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
