class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.all
        render "api/comments/index"

    end

    def create
        # debugger
        @comment = Comment.new(comment_params)
        # @comment = Comment.find(params[:id])
        # tempId = @comment.photo_id
        # debugger

        if @comment.save
            @photo = Photo.find(@comment.photo_id)
            # @comment.photo_id
            render "api/photos/show"
            # render "api/comments/show"
             #automatically checks under the views folder
            # render json: ['photo uploaded?']
            
        else
            render json: @comment.errors.full_messages, status: 401 #ajax call not resolve
        end
    end

    # def destroy
    #     @comment = Comment.find(params[:id])

    #     if @comment && @comment.delete
    #         render "api/photos/show"
    #     else
    #         render json: ["Comment not found"], status: 404
    #     end
    # end

    def update  
        @comment = Comment.find(params[:id])
        
        if @comment && @comment.update(comment_params)
            @photo = Photo.find(@comment.photo_id)
            render "api/photos/show"
        else  
            render json: @comment.errors.full_messages, status: 422
        end 
    end 


    def destroy
        @comment = Comment.find(params[:id])
        tempId = @comment.photo_id
        @comment.destroy
        @photo = Photo.find(tempId)
        render "api/photos/show"

        # render :delete
     end

    private

    def comment_params
        params.permit(:body, :user_id, :photo_id)
    end
end
