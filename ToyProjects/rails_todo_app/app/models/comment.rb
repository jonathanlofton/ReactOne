class Comment < ApplicationRecord
  validates :user_id, :blog_post_id, :body, presence: true 

  belongs_to :user 
  belongs_to :blog_post
end
