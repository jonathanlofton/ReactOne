import React from 'react';

class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      body: ''
    }
  }

  showContent() {
    let boolean = this.state.show ? false : true;

    this.setState({
      show: boolean
    })
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  createComment() {
    const { post, createComment, currentUser, idx } = this.props;
    const newPost = {
      blog_post_id: idx,
      user_id: currentUser.id,
      body: this.state.body,
    }

    createComment({ comment: newPost })
  }

  commentForm() {
    return(
      <div>
        <textarea type="text" value={this.state.body} onChange={(e) => this.updateBody(e)}/>
        <button onClick={() => this.createComment()}>Post Comment</button>
      </div>
    )
  }

  deletePost(post) {
    const { deletePost } = this.props;
    deletePost(post);
  }

  render() {
    const { post, idx } = this.props;

    let commentForm;
    if (this.state.show) {
      commentForm = this.commentForm();
    } else {
      commentForm = null;
    }

    return(
      <ul key={idx} className="blog-post">
        <li className="blog-post-content">
          <div className="post-name-title">
            <p className="post-creator">{post.creator}</p>
            <p className="post-title">{post.title}</p>
          </div>
          
          <p className="post-body">{post.body}</p>
          <button onClick={() => this.deletePost(post)}>Delete</button>
          <button onClick={() => this.showContent()}>reply</button>
          {commentForm}
        </li>
        <li>
          {post.comments.map((comment, idx) => (
            <p key={idx} className="post-comment">
              {comment.body}
            </p>
          ))}
        </li>
      </ul>
    )
  }
}

export default BlogPost;