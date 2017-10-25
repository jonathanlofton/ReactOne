import React from 'react';
import BlogPost from '../BlogPosts/blog_posts';

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
          body: this.state.body,
          comments: []
      }})
    this.setState({title: '', body: ''})
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
    if (!this.props.blogPosts) {
      return null 
    }
    const { blogPosts } = this.props;
    const { createComment, deletePost } = this.props;

    const allPosts = blogPosts.map((post, idx) => (
      <BlogPost 
        post={post} 
        key={idx} 
        createComment={createComment}
        currentUser={this.props.session.currentUser}
        deletePost={deletePost}
        />
    ))


    return(
      <div className="landing-page-body">
        <div className="create-post-container">
          <form onSubmit={() => this.createPostOnPress()} className="create-post-form">
            <h1>Create Post</h1>
            <input type="text" className="title-input" onChange={(e) => this.changeTitle(e)}/>
            <textarea name="paragraph_text" cols="300" rows="10" onChange={(e) => this.changeBody(e)}></textarea>
            <button>Create Post</button>
          </form>
        </div>
        <div className="blog-post-list-container">
          <ul className="blog-post-list">
            <li>
              <h1>All Posts</h1>
            </li>
            {allPosts}
          </ul>
        </div>
      </div>
    )
  }
};

export default LandingPage;