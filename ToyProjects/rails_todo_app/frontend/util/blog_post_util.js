export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/blog_posts',
    data: post
  })
)

export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/blog_posts'
  })
)

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/blog_posts',
    data: comment
  })
)