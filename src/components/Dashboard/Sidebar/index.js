import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const isActive = (box, prop) => {
  return box === prop ? 'sidebar-active-box' : 'sidebar-inactive-box'
}

const deleteToken = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}

const changeActive = (newScreen) => {
  this.setState({
    activeScreen: newScreen
  })
}

const Sidebar = (props) => {
  let { data, currentUser, activeScreen } = props;
  // Testing only:
  activeScreen = 'inbox'
  return (
    <div className='sidebar'>
      <div>
        <h1 className='sidebar-logo'>VIVIFY</h1>
        <div className='sidebar-user'>
          <div className='user-portrait'></div>
          <h4 className='user-name'>Brett</h4>
        </div>
        <div className='sidebar-leadboxes'>
          <div className={isActive('inbox', activeScreen)}>
            <p>Inbox ({data.length})</p>
          </div>
          <div className={isActive('in-progress', activeScreen)}>
            <p>In Progress</p>
          </div>
          <div className={isActive('sold', activeScreen)}>
            <p>Sold</p>
          </div>
          <div className={isActive('archive', activeScreen)}>
            <p>Archived</p>
          </div>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <div className='sidebar-bottom-button'>
          <Link to='/admin'>Admin</Link>
        </div>
        <div className='sidebar-bottom-button' onClick={deleteToken}>
          <a>Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar