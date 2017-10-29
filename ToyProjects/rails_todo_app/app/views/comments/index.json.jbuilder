json.array! @comments do |comment|
  json.partial! 'comments/comment', comment: comment 
  json.comments comment.comments
  json.creator comment.user.name
end 