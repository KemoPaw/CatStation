class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render "api/users/index"
    end

    def show
        @user = User.find_by(username: params[:id])
        render "api/users/show" 
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show" #automatically checks under the views folder
            
        else
            render json: @user.errors.full_messages, status: 401 #ajax call not resolve
        end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
