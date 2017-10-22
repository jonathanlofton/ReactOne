

export const blogPostSelector = allPosts => allPosts.map((post, idx) => Object.assign({}, post, {id: idx}))
