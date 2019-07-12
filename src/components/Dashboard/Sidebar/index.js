import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { capitalise } from "../../../utils/capitalise";

const isActive = (box, prop) => {
  return box === prop ? "sidebar-active-box" : "sidebar-inactive-box";
};

const deleteToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

const Sidebar = props => {
  let { data, currentUser, activeScreen, changeScreen } = props;

  // Testing only:
  currentUser = "luke";

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
            <p>In Progress</p>
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
