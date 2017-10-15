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
    return(
      <div>
        <form onSubmit={() => this.createPostOnPress()}>
          <input type="text" onChange={(e) => this.changeTitle(e)}/>
          <input type="text" onChange={(e) => this.changeBody(e)}/>
          <button>Create Post</button>
        </form>
      </div>
    )
  }
};

export default LandingPage;