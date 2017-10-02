import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div className='sidebar-content'>
        <h1 className='sidebar-header'>Sites</h1>
        <Link to="/reddit">
          <h2 className='sidebar-site'>Reddit</h2>
        </Link>
      </div>
    )
  }
}

export default SideBar;