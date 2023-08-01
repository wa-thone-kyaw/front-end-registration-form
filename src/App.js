import { Routes, Route } from "react-router-dom";
import { Contact } from "./component/NavigationBar/Contact";
import { SignIn } from "./component/SignInSignUp/SignIn";
import { SignUp } from "./component/SignInSignUp/SignUp";
import { Dashboard } from "./component/Dashboard/Dashboard";
import { admChooseyear } from "./component/Dashboard/admChooseyear";
import { SecondyearStudent } from "./component/Dashboard/SecondyearStudent";
import { About } from "./component/NavigationBar/About";
import { Home } from "./component/NavigationBar/Home";
import { Navigationbar } from "./component/NavigationBar/NavigationBar";
import { AdminHome } from "./component/AdminNavBar/AdminHome";
import { Chooseyear } from "./component/Chooseyear/Chooseyear";
import { Firstyear } from "./component/Registerationform/Firstyear";
import { Secondyear } from "./component/Registerationform/Secondyear";
import { Thirdyear } from "./component/Registerationform/Thirdyear";
import { Fourthyear } from "./component/Registerationform/Fourthyear";
import { Fifthyear } from "./component/Registerationform/Fifthyear";
import { Sixthyear } from "./component/Registerationform/Sixthyear";
import { Agreeform } from "./component/Registerationform/Agreeform";
import { Choosemajor } from "./component/Registerationform/Choosemajor";
import { FillID } from "./component/Registerationform/FillID";

import "./component/NavigationBar/NavigationBar.css";
import "./component/NavigationBar/About.css";
import "./component/NavigationBar/Home.css";
import "./component/AdminNavBar/AdminNavBar.css";
import "./component/AdminNavBar/AdminHome.css";
import "./component/Chooseyear/Chooseyear.css";
import "./component/Registerationform/Firstyear.css";
import "./component/Registerationform/Overfirstyear.css";
import "./component/Registerationform/Agreeform.css";
import "./component/Dashboard/Dashboard.css";
import "./component/Dashboard/SecondyearStudent.css";
import "./component/Dashboard/admChooseyear.css";
import { AdminNavBar } from "./component/AdminNavBar/AdminNavBar";

export default function MyApp() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminHome />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/chooseyear" element={<Chooseyear />} />
          <Route path="/firstyear" element={<Firstyear />} />
          <Route path="/secondyear" element={<Secondyear />} />
          <Route path="/thirdyear" element={<Thirdyear />} />
          <Route path="/fourthyear" element={<Fourthyear />} />
          <Route path="/fifthyear" element={<Fifthyear />} />
          <Route path="/sixthyear" element={<Sixthyear />} />
          <Route path="/agreeform" element={<Agreeform />} />
          <Route path="/choosemajor" element={<Choosemajor />} />
          <Route path="/fillId" element={<FillID />} />
        </Routes>
      </div>
    </>
  );
}
