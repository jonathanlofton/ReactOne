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
  
  render() {
    console.log(this.props)

    if (!this.props.blogPosts.allPosts) {
      return null 
    }

    const { allPosts } = this.props.blogPosts;
    console.log(allPosts)
    const blogPosts = allPosts.map((post, idx) => (
      <li key={idx} className="blog-post">
        <p className="post-title">{post.title}</p>
        <p className="post-body">{post.body}</p>
        <p className="post-creator">{post.creator}</p>
      </li>
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