class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all
        render "api/photos/index"
    end

    def show
        @photo = Photo.with_attached_image.find(params[:id])
        # @photo = Photo.find(params[:id])
        render "api/photos/show"
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render "api/photos/show" #automatically checks under the views folder
            
        else
            render json: @photo.errors.full_messages, status: 401 #ajax call not resolve
        end
    end

    def destroy
        @photo = Photo.with_attached_image.find(params[:id])

        if @photo && @photo.delete
            render json: {}
        else
            render json: ["Photo not found"], status: 404
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :uploader_id, :image)
    end
end
