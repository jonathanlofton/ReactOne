import React from 'react';
import Tiles from './Data';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: []
    }
  }

  componentDidMount() {
    this.setState({ tiles: Tiles })
  }

  handleClick() {
    console.log(this.state)
  }

  moveUp(idx) {
    const prevState = this.state.tiles;
    let newState;
    if (idx === 0) {
      newState = prevState.slice(1).concat([prevState[0]])
    } else {
      newState = prevState.slice(0, idx - 1)
        .concat([prevState[idx]])
        .concat([prevState[idx - 1]])
        .concat(prevState.slice(idx + 1))
    }
    this.setState({ tiles: newState })
  }

  moveDown(idx) {
    const prevState = this.state.tiles;
    let newState;
    if (idx === prevState.length - 1) {
      let length = prevState.length - 1
      newState = [prevState[length]].concat(prevState.slice(0, length))
    } else {
      newState = prevState.slice(0, idx)
        .concat([prevState[idx + 1]])
        .concat([prevState[idx]])
        .concat(prevState.slice(idx + 2))
    }
    this.setState({ tiles: newState })
  }
  
  render() {
    const { tiles } = this.state;

    const allTiles = tiles.map((tile, idx) => (
      <div style={{ display: 'flex', justifyContent: 'center' }} key={idx}>
          <p>
            { tile.content }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <button onClick={() => this.moveUp(idx)}>UP</button>
            <button onClick={() => this.moveDown(idx)}>DOWN</button>
          </div>
      </div>
    ))

    return(
      <div>
        <p>Board Class</p>
        <button onClick={() => this.handleClick()}>Whats the state?</button>
        { allTiles }
      </div>
    )
  }
}

export default Board;