import React from 'react';
import './sidebar.css'

const Sidebar = (props) => {
  const { data } = props;
  return (
    <div className='sidebar'>
      <h2 className='sidebar-logo'>VIVIFY</h2>
      <div className='sidebar-user'>
        <div>portrait</div>
        <div>name</div>
      </div>
      <div className='sidebar-leadboxes'>
        <div>Inbox ({data.length})</div>
        <div>Followup</div>
        <div>Archive</div>
      </div>
      <div className='sidebar-bottom'>
        <div>Admin</div>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default Sidebar