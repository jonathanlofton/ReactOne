import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0,
    }
  }

  determineTax(value) {
    return value * 0.07
  }

  updateValue(e) {
    let taxedAmount = this.determineTax(e.target.value);
    this.setState({
      money: taxedAmount,
    })
  }

  render() {
    const { money } = this.state;

    return (
      <div>
        <p>Calculator</p>
        <input onChange={e => this.updateValue(e)}/>
        <div>Tax Amount: {money}</div>
        <div>Tax Amount: {money}</div>
      </div>
    )
  }
}

export default Calculator;