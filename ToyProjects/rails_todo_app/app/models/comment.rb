class Comment < ApplicationRecord
  validates :user_id, :blog_post_id, :body, presence: true 

  belongs_to :user 
  belongs_to :blog_post

  has_many :comments, 
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: Comment

  belongs_to :comment, optional: true,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: Comment
end
