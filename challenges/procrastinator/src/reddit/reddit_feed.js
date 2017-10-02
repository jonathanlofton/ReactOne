import React from 'react';
import RedditItem from './reddit_item';

class RedditFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reddit: []
    }
    this.fetchRedditData = this.fetchRedditData.bind(this);
  }

  componentDidMount() {
    this.fetchRedditData()
  }

  fetchRedditData() {
    fetch('https://www.reddit.com/.json')
    .then((res) => { return res.json() })
    .then((res) => { this.setState({ reddit: res.data.children })})
  }

  render() {
    console.log(this.state)
    const { reddit } = this.state;

    const redditItems = reddit.map((post, idx) => (
      <RedditItem post={post} key={idx}/>
    ))

    return(
      <div>
        <h1>Reddit Feed</h1>
        { redditItems }
      </div>
    )
  }
}

export default RedditFeed