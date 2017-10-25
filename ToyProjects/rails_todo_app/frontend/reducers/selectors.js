import {values} from 'lodash';
export const blogPostSelector = allPosts => Object.values(allPosts)
// export const blogPostSelector = allPosts => allPosts.map((post, idx) => allPosts[post.id] = post)
