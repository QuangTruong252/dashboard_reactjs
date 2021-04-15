import React from 'react';
import logo from '../img/uit.png';
import user from '../img/user.jpg';
import sw from '../img/switch.png';
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        {/* User basic info */}
        <div className="sidebar-brand">
          <div className="brand-flex">
            <img src={logo} width="30px" alt="user" />
            <div className="brand-icons">
              <span className="las la-bell" />
              <span className="las la-user-circle" />
            </div>
          </div>
        </div>
        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src={user} alt />
            <div>
              <h3>Quang Truong</h3>
              <p>18521572@gm.uit.edu.vn</p>
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="menu-head">
              <span>Dashboard</span>
            </div>
            <ul>
              <li>
                <a href="http://127.0.0.1:5500/Dashboard/generality.html">
                  <span className="las la-tachometer-alt" />
                  <span>Generality</span>
                </a>
              </li>
              <li>
                <a href="http://127.0.0.1:5500/Dashboard/analytics.html">
                  <span className="las la-chart-pie" />
                  <span>Analytics</span>
                </a>
              </li>
            </ul>
            <div className="menu-head">
              <span>Options</span>
            </div>
            <ul>
              <li>
                <a href="http://127.0.0.1:5500/Dashboard/user.html">
                  <span className="las la-user-alt" />
                  <span>User</span>
                </a>
              </li>
              <li>
                <a href="http://127.0.0.1:5500/Dashboard/settings.html">
                  <span className="las la-wrench" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
