class Photo < ApplicationRecord
    validates :title, presence: true
    validates :uploader_id, presence: true

    has_one_attached :image

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :uploader_id, 
    class_name: :User 
end
