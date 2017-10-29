import React from 'react';
import Comment from './comments';

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

  newComment() {
    const { post, createComment, currentUser } = this.props;

    const newPost = {
      blog_post_id: post.id,
      user_id: currentUser.id,
      body: this.state.body,
    }

    createComment({comment: newPost})
  }

  commentForm() {
    return(
      <div className="comment-form">
        <textarea type="text" cols="30" rows="5" value={this.state.body} onChange={(e) => this.updateBody(e)}/>
        <button onClick={() => this.newComment()}>Post Comment</button>
      </div>
    )
  }

  deletePost(post) {
    const { deletePost } = this.props;
    deletePost(post);
  }

  render() {
    const { post, idx, createComment, currentUser } = this.props;
    const { show } = this.state;

    let commentForm;
    if (show) {
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
          <button onClick={() => this.showContent()}>{ show ? "Close" : "Reply"}</button>
          {commentForm}
        </li>
        <ul>
          {post.comments.map((comment, idx) => (
            <Comment 
              comment={comment} 
              key={idx} 
              createComment={createComment} 
              post={post}
              user={currentUser}
              />
          ))}
        </ul>
      </ul>
    )
  }
}

export default BlogPost;