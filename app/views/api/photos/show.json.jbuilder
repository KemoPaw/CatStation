

json.extract! @photo, :id, :title, :description, :uploader_id
json.photoUrl url_for(@photo.image) if @photo.image.attached?
json.comments @photo.comments
    

