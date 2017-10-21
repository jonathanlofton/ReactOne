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

  deletePost(post) {
    console.log(post)
    const { deletePost } = this.props;
    deletePost(post)
  }
  
  render() {
    console.log(this.props)

    if (!this.props.blogPosts.allPosts) {
      return null 
    }

    const { allPosts } = this.props.blogPosts;
    const blogPosts = allPosts.map((post, idx) => (
      <BlogPost post={post} idx={idx} />
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
            {blogPosts}
          </ul>
        </div>
      </div>
    )
  }
};

export default LandingPage;