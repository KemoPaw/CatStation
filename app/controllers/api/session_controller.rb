class Api::SessionController < ApplicationController

    before_action :require_logged_in!, only: [:destroy]


    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/session/show" #check pokedex for how to tell rails to render that jbuild file!

        else
            render json: ['Invalid username or password'], status: 400

        end

    end

    def destroy
        if @user
            logout!
            render json: {'You have logged out!'} #render soneomething here
        else
            render json: ['There is no one signed in'], status: 404
        end
    end


end
