class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    #CRLLL

    skip_before_action  :verify_authenticity_token

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in!
       unless logged_in?
            render json: ['There is no one signed in, please sign!'], status: 401
       end
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

end
