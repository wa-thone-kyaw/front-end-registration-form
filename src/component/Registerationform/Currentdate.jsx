import React, {useState} from "react";

export const Currentdate= () => {

    const[data,setData]=useState();
  console.log("Currrentdate", data);

    var showdate = new Date();
    var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return(
        <div>
            <input type="text" value={displaytodaydate} readOnly="true" onChange={e=>setData(e.target.value)}/>

        </div>
    );
    
}
export default Currentdate;