import React from 'react';

class RedditItem extends React.Component {
  render() {
    console.log(this.props)
    const { author, permalink, subreddit, title, thumbnail, score,  } = this.props.post.data
    const redditLink = `https://www.reddit.com${permalink}`
    const redditSnoo = 'https://s3-us-west-2.amazonaws.com/jonathan-portfolio-dev/snoo.jpg'
    const image = thumbnail === 'default' ? redditSnoo : thumbnail

    return (
      <div className='reddit-item'>
        <p className='score'>{score}</p>
        
        <img alt={''} src={image} className='reddit-item-photo'/>

        <div className='reddit-item-info'>
          <a className='reddit-item-title' 
             href={redditLink} 
             target='_blank'>
             {`${title.slice(0, 50)}...`}
          </a>

          <p>{`created by ${author} to `}
            <a className='reddit-item-subreddit'
               href={`https://www.reddit.com/r/${subreddit}`} 
               target='_blank'>
              {`r/${subreddit}`}
            </a>
          </p>
        </div>

      </div>
    )
  }
}

export default RedditItem;