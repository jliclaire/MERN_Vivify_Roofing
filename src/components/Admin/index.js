import React from 'react';
import Sidebar from '../Dashboard/Sidebar'
import './admin.css'

class Admin extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div className='admin'>
        <Sidebar data={data} />
        <h1>This is a stub for the admin view.</h1>
      </div>
    )
  }
}

export default Admin;
