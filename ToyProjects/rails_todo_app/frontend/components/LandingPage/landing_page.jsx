import React from 'react';

class LandingPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.createPostOnPress = this.createPostOnPress.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  createPostOnPress() {
    const { createPost } = this.props;
    const { currentUser} = this.props.session;
    createPost(
      { blog_post: {
          user_id: currentUser.id,
          title: this.state.title,
          body: this.state.body
      }})
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  changeBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  commentForm() {
    console.log("goose")
  }
  
  render() {
    console.log(this.props)

    if (!this.props.blogPosts.allPosts) {
      return null 
    }

    const { allPosts } = this.props.blogPosts;
    console.log(allPosts)
    const blogPosts = allPosts.map((post, idx) => (
      <ul key={idx} className="blog-post">
        <li>
          <p className="post-title">{post.title}</p>
          <p className="post-body">{post.body}</p>
          <p className="post-creator">{post.creator}</p>
          <button onClick={() => this.commentForm()}>Add Comment</button>
        </li>
        <li className="comment-form">
          <input type="text" />
          <input type="text" />
          <button>Post Comment</button>
        </li>
        <li>
          {post.comments.map((comment, idx) =>(
            <p key={idx} className="post-comment">
              {comment.body}
            </p>
          ))}
        </li>
      </ul>

    ))


    return(
      <div className="landing-page-body">
        
        <form onSubmit={() => this.createPostOnPress()} className="create-post-form">
          <h1>Create Post</h1>
          <input type="text" onChange={(e) => this.changeTitle(e)}/>
          <input type="text" onChange={(e) => this.changeBody(e)}/>
          <button>Create Post</button>
        </form>
        <ul className="blog-post-list">
          <li>
            <h1>All Posts</h1>
          </li>
          {blogPosts}
        </ul>
      </div>
    )
  }
};

export default LandingPage;