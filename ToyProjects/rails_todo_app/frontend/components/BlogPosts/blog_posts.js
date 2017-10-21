import React from 'react';

class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  showContent() {
    let boolean = this.state.show ? false : true;

    this.setState({
      show: boolean
    })
  }

  commentForm() {
    return(
      <div>
        <input type="text" />
        <input type="text" />
        <button>Post Comment</button>
      </div>
    )
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
          <button onClick={() => this.showContent()}>reply</button>
          <p className="post-body">{post.body}</p>
          <button onClick={() => this.deletePost(post)}>Delete</button>
          { commentForm }
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