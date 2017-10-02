import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      stopWatch: 0,
      timerOn: false
    }
    this.tickStopWatch = this.tickStopWatch.bind(this);
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

  tickStopWatch() {
    let newTime = this.state.stopWatch + 1
    this.setState({ stopWatch: newTime })
  }

  stopWatch() {
    if (!this.state.timerOn) {
      this.setState({ timerOn: true })
        this.stopWatcher = setInterval(
          () => this.tickStopWatch(),
          1000
        )
    } else {
      this.setState({ timerOn: false })
      clearInterval(this.stopWatcher)
    }
  }

  clearTimer() {
    this.setState({ stopWatch: 0 })
  }

  render() {
    return (
      <div>
        { this.state.time.toLocaleTimeString() }
        <button onClick={() => this.stopWatch()}>
          {this.state.timerOn ? 'Stop Timer' : 'Start Timer'}
        </button>
        { this.state.stopWatch }
        <button onClick={() => this.clearTimer() }>Clear Timer</button>
      </div>
    )
  }
}

export default Clock