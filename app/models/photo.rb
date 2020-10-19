class Photo < ApplicationRecord
    validates :title, presence: true
    validates :uploader_id, presence: true

    has_one_attached :image
end
