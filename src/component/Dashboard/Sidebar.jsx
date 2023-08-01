import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar d-flex flex-column bg-dark text-white p-4 vh-100">
        
          
            <i className="bi bi-bootstrap fs-5 me-2">
              <span className="fs-4">Sidebar</span>
            </i>
          
          <hr className="text-secondary mt-2" />
          <ul className="nav nav-pills flex-column p-0 m-0">

          <li className="nav-item p-1">
              <Link to="/sidebar" className="nav-link text-white">
                <i className="bi bi-house me-2 fs-5"></i>
                <span className="fs-5">Home</span>
              </Link>
            </li>

           
            <li className="nav-item p-1">
              <Link to="/chooseyear" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Civil</span>
              </Link>
            </li>

            <li className="nav-item p-1">
            <Link to="/chooseyear" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Electronics</span>
              </Link>
            </li>

            <li className="nav-item p-1">
            <Link to="/chooseyear" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Electrical Power</span>
              </Link>
            </li>

            <li className="nav-item p-1">
            <Link to="/chooseyear" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Mechanical</span>
                </Link>
               
            </li>

            <li className="nav-item p-1">
            <Link to="/chooseyear" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">IT</span>
              </Link>
            </li>

          </ul>
          <div>
          <hr className="text-secondary" />
          <Link to="/" className="nav-link text-white">
          <i className="bi bi-person fs-5"></i>
          <span className="fs-4">Log Out</span>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
