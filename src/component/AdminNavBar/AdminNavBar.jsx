import { Link } from "react-router-dom";
import React from "react";
//import It from '.public/It.png'
export const AdminNavBar = () => {
  return (
    <div class="admNavbar">
      <Link to="/signup">
        <li>SIGN UP</li>
      </Link>
    </div>
  );
};
