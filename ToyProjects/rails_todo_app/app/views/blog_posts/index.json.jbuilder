json.array! @blog_posts do |blog_post|
    json.partial! 'blog_posts/blog_post', blog_post: blog_post
    json.creator blog_post.user.name
    json.comments blog_post.comments do |comment|
        json.partial! 'comments/comment', comment: comment
        json.creator comment.user.name
    end
end 