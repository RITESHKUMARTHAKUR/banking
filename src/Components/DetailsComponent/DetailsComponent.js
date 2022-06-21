import { getDoc , doc } from "firebase/firestore";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";


function DetailsComponent(props) {

    const { details } = useParams();
    const valuesRef = doc(db, "table", "RvkDflLKYLO4lCS8ZoDa");
    const [profileDetails,setProfileDetails] = useState();

    getDoc(valuesRef).then((doc) => {
        setProfileDetails(doc.data(), doc.id);
    });
    
  

  return(
    <React.Fragment>
        <div className="detailsCont">
            <div className="mainContainer">
                <div className="profileImage">

                </div>
                <div className="profileDetails">
                    <table>
                        <tr>
                            <td>Balance</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default DetailsComponent;
