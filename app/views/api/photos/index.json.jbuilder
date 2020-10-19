@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :title, :description, :uploader_id
    end
end