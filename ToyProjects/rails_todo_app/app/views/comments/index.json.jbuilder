json.array! @comments do |comment|
  json.partial! 'comments/comment', comment: comment 
  json.comments comment.comments
end 