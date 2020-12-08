class AddChangesToCommentTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, :photo_id
    add_index :comments, :photo_id
    
  end
end
