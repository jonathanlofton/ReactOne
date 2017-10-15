export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/blog_posts',
    data: post
  })
)