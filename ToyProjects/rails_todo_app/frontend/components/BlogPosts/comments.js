import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentForm: false,
    }
  }

  toggle() {
    let show = this.state.commentForm ? false : true;
    this.setState({
      commentForm: show,
      body: '',
    })
  }

  updateBody(e) {
    this.setState({
      body: e.target.value,
    })
  }

  commentForm() {
    return (
      <div className="comment-form">
        <textarea type="text" cols="30" rows="5" value={this.state.body} onChange={(e) => this.updateBody(e)} />
        <button onClick={() => this.commentOnComment()}>Post Comment</button>
      </div> 
    )
  }

  commentOnComment() {
    const { comment, post, createCommentOnComment, user } = this.props;

    const newPost = {
      blog_post_id: post.id,
      user_id: user.id,
      body: this.state.body,
      comment_id: comment.id,
    }

    createCommentOnComment({ comment: newPost })
  }

  render() {
    const { comment, idx } = this.props;
    const { commentForm } = this.state;
    console.log(this.props)
    let form;
    if (commentForm) {
      form = this.commentForm();
    } else {
      form = null;
    }

    return (
      <li className="post-comment">
        <p className="comment-creator">{comment.creator}</p>
        <p className="comment-body">{comment.body}</p>
        <button onClick={() => this.toggle()}>{commentForm ? "Close" : "Reply" }</button>
        {form}
      </li>
    )
  }
}

export default Comment;