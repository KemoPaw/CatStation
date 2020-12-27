class Photo < ApplicationRecord
    validates :title, presence: true
    validates :uploader_id, presence: true
    validates :image, presence: true


    has_one_attached :image

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :uploader_id, 
    class_name: :User 

    has_many :comments
    # primary_key: :id, 
    # foreign_key: :photo_id, 
    # class_name: :Comment

    def self.search(keyword)
        self.where("title ILIKE ?", "%#{keyword}%")
    end

end
