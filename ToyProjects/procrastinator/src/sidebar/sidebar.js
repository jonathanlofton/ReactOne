import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  handleClick(site) {
    // if there is an active link change the color
    let activeLink = document.querySelector('.active-sidebar-site')
    if (activeLink) { activeLink.className = 'sidebar-site'; }

    // this link is now active and should be colored
    let link = document.getElementById(site)
    link.className = 'active-sidebar-site';
  }
  
  render() {
    return (
      <div className='sidebar-content'>
        <h1 className='sidebar-header'>Sites</h1>
        <Link to="/reddit" onClick={() => this.handleClick('reddit')}>
          <h2 id='reddit' className='active-sidebar-site'>Reddit</h2>
        </Link>
        <Link to="/podcast" onClick={() => this.handleClick('podcast')}>
          <h2 id='podcast' className='sidebar-site'>Podcasts</h2>
        </Link>
      </div>
    )
  }
}

export default SideBar;