import React from 'react';

class RedditItem extends React.Component {
  render() {
    console.log(this.props)
    const { author, permalink, subreddit, title, thumbnail, score,  } = this.props.post.data
    const redditLink = `https://www.reddit.com${permalink}`
    return (
      <div className='reddit-item'>
        <p>{score}</p>
        <img alt={''} src={thumbnail} className='reddit-item-photo'/>
        <div className='reddit-item-content'>
          <a href={redditLink} target='_blank'>{`${title.slice(0, 50)}...`}</a>
          <p>{`created by ${author}  `}
            <a href={`https://www.reddit.com/r/${subreddit}`} target='_blank'>
              {`to r/${subreddit}`}
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default RedditItem;