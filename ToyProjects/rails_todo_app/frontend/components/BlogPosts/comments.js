import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentForm: false,
    }
  }

  render() {
    const { comment, idx } = this.props;
    return (
      <li className="post-comment">
        <p className="comment-creator">{comment.creator}</p>
        <p className="comment-body">{comment.body}</p>
      </li>
    )
  }
}

export default Comment;