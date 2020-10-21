@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :title, :description, :uploader_id
        json.photoUrl url_for(photo.image) if photo.image.attached?
    end
end