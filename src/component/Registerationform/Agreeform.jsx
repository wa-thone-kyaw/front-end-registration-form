import { Listrules } from "./Listrules";
import { Examrules } from "./Examrules";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Agreeform.css";
export const Agreeform = () => {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler1 = (e) => {
    alert("Check your Email! We have already sent your ID Number");
  };
  return (
    <>
      <form>
        <h1>ကတိ၀န်ခံချက်</h1>
        <h6>
          ကျွန်တော်/ကျွန်မတို့သည် အောက်ဖော်ပြပါစည်းကမ်းများကို
          သိရှိသဘောပေါက်ကြောင်း သဘောတူပါသည်။
        </h6>
        <br />
        <div className="rules">
          <Listrules />
          <Examrules />
        </div>
        <div className="check">
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <strong>
            {" "}
            <label htmlfor="agree">
              အထက်ဖော်ပြပါစည်းကမ်းများကို သိရှိသဘောပေါက်နားလည်လက်ခံပါသဖြင့်
              ကျွန်တော်/မ သည် တသွေမသိမ်း လိုက်နာပါမည်။
            </label>
          </strong>
        </div>
        <Link to="/fillId">
          <button className="btn" disabled={!agree} onClick={btnHandler1}>
            Submit
          </button>{" "}
        </Link>
      </form>
    </>
  );
};
