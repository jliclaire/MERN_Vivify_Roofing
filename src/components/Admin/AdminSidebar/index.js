import React from 'react';
import { capitalise } from '../../../utils/capitalise'
import { Link } from 'react-router-dom';

const deleteToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

const AdminSidebar = props => {
  // Testing only:
  const currentUser = 'luke'

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-info">
          <h1 className="sidebar-logo">VIVIFY</h1>
          <div className="sidebar-user">
            <div className="user-portrait" />
            <h4 className="user-name">{capitalise(currentUser)}</h4>
          </div>
        </div>
      </div>
      <div>
        <p>Sales by Location</p>
        <p>Sales by Salesperson</p>
        <p>Sales by Project Type</p>
        <p>Total Sales</p>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-button">
          <Link to="/" className="button-text">
            Dashboard
          </Link>
        </div>
        <div className="sidebar-bottom-button" onClick={deleteToken}>
          <p className="button-text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;