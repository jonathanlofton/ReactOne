
import React from 'react';

class Content extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showComponent() {
    let status = this.state.show ? false : true
    this.setState({
      show: status
    })
  }

  render() {
    let showOrHide = this.state.show ? 'Close' : 'Open'
    const { id, title, body, extra} = this.props.data;

    let hiddenContent;
    if (this.state.show) {
      hiddenContent = <p>{extra.body}</p>
    } else {
      hiddenContent = null;
    }

    return(
      <li style={{display: 'flex'}} id={id}>
        <p>{title}</p>
        <p>{body}</p>
        <button onClick={() => this.showComponent()}>{showOrHide}</button>
        <p>{hiddenContent}</p>
      </li>
    )
  }
}

export default Content;