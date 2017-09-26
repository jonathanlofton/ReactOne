import React from 'react';

class RedditItem extends React.Component {
  render() {
    console.log(this.props)
    const { author, permalink, subreddit, title, thumbnail } = this.props.post.data
    const redditLink = `https://www.reddit.com${permalink}`
    return (
      <div>
        <img src={thumbnail} />
        <a href={redditLink} target='_blank'>{title}</a>
      </div>
    )
  }
}

export default RedditItem;