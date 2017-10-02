import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div style={{marginLeft: '3%'}}>
        <h1 className='header-title'>Procrastinator</h1>
        <p>C'mon you deserve a break...</p>
      </div>
    )
  }
}

export default Header