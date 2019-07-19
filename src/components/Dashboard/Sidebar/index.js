import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { capitalise } from "../../../utils/capitalise";
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa';

const SideMenu = (props) => {
  let { changeScreen } = props;

  return <>
    <div className='sidemenu-mob'>
      <div 
        className='sidemenu-option'
        onClick={() => changeScreen("inbox")}
      >
        <p>New</p>  
      </div>
      <div
        className='sidemenu-option'
        onClick={() => changeScreen("in progress")}
      >
        <p>Assigned</p>
      </div>
      <div
        className='sidemenu-option'
        onClick={() => changeScreen("sold")}
      >
        <p>Sold</p>
      </div>
      <div
        className='sidemenu-option'
        onClick={() => changeScreen("archive")}
      >
        <p>Archived</p>
      </div>
      <div className="sidemenu-option" onClick={deleteToken}>
        <p className="">Logout</p>
      </div>
    </div>
  </>
}

const isActive = (box, prop) => {
  return box === prop ? "sidebar-active-box" : "sidebar-inactive-box";
};

const deleteToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

const Sidebar = props => {
  let { 
    data, 
    currentUser, 
    activeScreen, 
    changeScreen, 
    back, 
    mobileShowList } = props;
  const [hamburgerActive, setHamburgerActive] = useState(false);

  // Testing only:
  currentUser = "luke";

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-info">
          <h1 className="sidebar-logo">VIVIFY</h1>
          <div className="sidebar-user">
            <div className="user-portrait">
            </div>
            <h4 className="user-name">{capitalise(currentUser)}</h4>
          </div>
          <div className='hamburger'>
            {
              mobileShowList ?
              <div onClick={() => setHamburgerActive(!hamburgerActive)}>
                <FaAngleDown size='33px' />
              </div> :
              <FaAngleLeft size='33px' onClick={() => back()} />
            }
          </div>
        </div>
        {
          hamburgerActive ?
          <SideMenu {...props} />
          : null
        }
        <div className="sidebar-leadboxes">
          <div
            className={isActive("inbox", activeScreen)}
            onClick={() => changeScreen("inbox")}
          >
            <p>Inbox ({data.length})</p>
          </div>
          <div
            className={isActive("in-progress", activeScreen)}
            onClick={() => changeScreen("in progress")}
          >
            <p>Assigned</p>
          </div>
          <div
            className={isActive("sold", activeScreen)}
            onClick={() => changeScreen("sold")}
          >
            <p>Sold</p>
          </div>
          <div
            className={isActive("archive", activeScreen)}
            onClick={() => changeScreen("archive")}
          >
            <p>Archived</p>
          </div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-button">
          <Link to="/admin" className="button-text">
            Admin
          </Link>
        </div>
        <div className="sidebar-bottom-button" onClick={deleteToken}>
          <p className="button-text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
