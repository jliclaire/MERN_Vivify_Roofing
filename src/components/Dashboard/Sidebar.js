import React from 'react';
import './sidebar.css'

const Sidebar = (props) => {
  const { data, currentUser, activeScreen } = props;
  return (
    <div className='sidebar'>
      <div>
        <h1 className='sidebar-logo'>VIVIFY</h1>
        <div className='sidebar-user'>
          <div className='user-portrait'></div>
          <h4 className='user-name'>Brett</h4>
        </div>
        <div className='sidebar-leadboxes'>
          <div className='active-box'>
            <p>Inbox ({data.length})</p>
          </div>
          <div className='inactive-box'>
            <p>Followup</p>
          </div>
          <div className='inactive-box'>
            <p>Sold</p>
          </div>
          <div className='inactive-box'>
            <p>Archived</p>
          </div>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <h5>Admin</h5>
        <h5>Logout</h5>
      </div>
    </div>
  )
}

export default Sidebar