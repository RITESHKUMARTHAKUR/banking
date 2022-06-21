import React, { useEffect, useState }  from "react";
import "./HomeComponent.css";
import { addDoc, collection , getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";



function HomeComponent() {

    // useEffect( () => {
    //     const getValues = async () => {
    //         const data = await getDocs(valuesRef);
    //         setValues(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    
    //     getValues();
    // }, );
    

  return (
    <div className="homeContainer">
        <div className="center-heading">
                <p className="first-heading">Welcome To The </p>
                <h3 className="second-heading" >BASIC BANKING TRANSACTION <br /> SYSTEM </h3>
                <Link to="/transaction" className="start-btn" >
                    Get Started
                </Link>
        </div>
        {/* <button onClick={Add}   style={{ cursor: "pointer" }} >
          Click me
        </button> */}
        {/* <div>
            {values.map((val) => {
                return (
                <div>
                    <h1>Name: {val.surname}</h1>
                </div>
                );
            })}
            <select name="" id="">
                {values.map((val) => {
                    return(
                        <option value="">{val.surname}</option>
                    );
                } )}
                <option value=""></option>
            </select>
        </div> */}

    </div>
  );
}

export default HomeComponent;
