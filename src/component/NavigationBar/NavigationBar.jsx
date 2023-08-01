import { Link } from "react-router-dom";
//import It from '.public/It.png'
export const Navigationbar = () => {
  return (
    <div class="Navbar">
      <Link to="/admin">
        {" "}
        <li> Admin</li>
      </Link>
      <Link to="/contact">
        {" "}
        <li> CONTACT US</li>{" "}
      </Link>
      <Link to="/about">
        <li>ABOUT</li>
      </Link>
      <Link to="/">
        <li>HOME</li>
      </Link>
    </div>
  );
};
