import React, { useState } from "react";
import NewLead from "./NewLead";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { capitaliseMultiple } from "../../../utils/capitalise";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

const SideMenu = props => {
  let { changeScreen, currentUser, data, activeScreen, newLead } = props;
  // function to toggle classname
  console.log(currentUser);

  return (
    <>
      <div className="sidemenu-mob">
        <NewLead {...props} />
        {currentUser.role === "Admin" && (
          <div
            className={isActive("inbox", activeScreen)}
            onClick={() => changeScreen("inbox")}
          >
            <p>
              Unassigned (
              {
                data.filter(datum => {
                  return !datum.assignedTrade && !datum.sold && !datum.archived;
                }).length
              }
              )
            </p>
          </div>
        )}
        <div
          className={isActive("in progress", activeScreen)}
          onClick={() => changeScreen("in progress")}
        >
          <p>
            {currentUser.admin ? "Assigned" : "New Leads"} (
            {
              data.filter(datum => {
                return datum.assignedTrade && !datum.sold && !datum.archived;
              }).length
            }
            )
          </p>
        </div>
        <div
          className={isActive("sold", activeScreen)}
          onClick={() => changeScreen("sold")}
        >
          <p>
            Sold (
            {
              data.filter(datum => {
                return datum.sold;
              }).length
            }
            )
          </p>
        </div>
        <div
          className={isActive("archive", activeScreen)}
          onClick={() => changeScreen("archive")}
        >
          <p>
            Archived (
            {
              data.filter(datum => {
                return datum.archived;
              }).length
            }
            )
          </p>
        </div>
        {currentUser.role === "Admin" && (
          <div className="sidebar-bottom-button">
            <Link to="/register" className="button-text">
              Register User
            </Link>
          </div>
        )}
        <div className="button" onClick={deleteToken}>
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

const isActive = (box, prop) => {
  return box === prop ? "sidebar-active-box" : "sidebar-inactive-box";
};

// needing token to login > user
const deleteToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  document.location.reload();
};

const Sidebar = props => {
  let {
    data,
    currentUser,
    activeScreen,
    changeScreen,
    back,
    mobileShowList,
    newLead
  } = props;
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-info">
          <h1 className="sidebar-logo">VIVIFY</h1>
          <div className="sidebar-user">
            <h4 className="user-name">
              Hi, {capitaliseMultiple(currentUser.name)}
            </h4>
          </div>
          <div className="hamburger">
            {mobileShowList ? (
              <div onClick={() => setHamburgerActive(!hamburgerActive)}>
                <FaAngleDown size="33px" />
              </div>
            ) : (
              <FaAngleLeft size="33px" onClick={() => back()} />
            )}
          </div>
        </div>
        {hamburgerActive ? (
          <SideMenu {...props} currentUser={currentUser} />
        ) : null}
        <div className="sidebar-leadboxes">
          <NewLead {...props} newLead={newLead} />
          {currentUser.role === "Admin" && (
            <div
              className={isActive("inbox", activeScreen)}
              onClick={() => changeScreen("inbox")}
            >
              <p>
                Unassigned (
                {
                  data.filter(datum => {
                    return (
                      !datum.assignedTrade && !datum.sold && !datum.archived
                    );
                  }).length
                }
                )
              </p>
            </div>
          )}
          <div
            className={isActive("in progress", activeScreen)}
            onClick={() => changeScreen("in progress")}
          >
            <p>
              {currentUser.role === "Admin" ? "Assigned" : "New Leads"} (
              {
                data.filter(datum => {
                  return datum.assignedTrade && !datum.sold && !datum.archived;
                }).length
              }
              )
            </p>
          </div>
          <div
            className={isActive("sold", activeScreen)}
            onClick={() => changeScreen("sold")}
          >
            <p>
              Sold (
              {
                data.filter(datum => {
                  return datum.sold;
                }).length
              }
              )
            </p>
          </div>
          <div
            className={isActive("archive", activeScreen)}
            onClick={() => changeScreen("archive")}
          >
            <p>
              Archived (
              {
                data.filter(datum => {
                  return datum.archived;
                }).length
              }
              )
            </p>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        {currentUser.role === "Admin" && (
          <div className="sidebar-bottom-button">
            <Link to="/register" className="button-text">
              Register User
            </Link>
          </div>
        )}
        <div className="sidebar-bottom-button" onClick={deleteToken}>
          <p className="button-text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
