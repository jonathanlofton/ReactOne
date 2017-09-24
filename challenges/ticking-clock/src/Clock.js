import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    setInterval(
      () => (this.tick()),
      1000
    );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID)
  }

  tick() {
    // if you reset state then the componentwillmount
    // again and will create a cycle
    this.setState({ time: new Date() })
  }

  render() {
    return (
      <div>
        { this.state.time.toLocaleTimeString() }
      </div>
    )
  }
}

export default Clock