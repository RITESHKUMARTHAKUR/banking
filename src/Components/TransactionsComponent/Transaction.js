import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import AlertModal from "../AlertModal/Modal";
import "./Transaction.css";

function Transaction() {
  const [table, setTable] = useState([]);
  const [Modal,setModal] = useState(false);
  // const [balance,setBalance] = useState(0);
  // const [name, setName ] = useState();
  // const [email,setEmail] = useState();

  const valuesRef = collection(db, "table");
  //   const Add = () => {
  //     addDoc(collection(db, "table"), {
  //         name : name,
  //         email: email,
  //         balance: balance,
  //     })
  //     .then(
  //       setName(" ")
  //     )
  // };

  useEffect(() => {
    const getValues = async () => {
      const data = await getDocs(valuesRef);
      setTable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getValues();
  });

  return (
    <React.Fragment>
      <div className="transactionsCont">
        <div className="transactionHeader">
          <table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Input data to database  */}
              {/* <tr>
              <td><input placeholder="Name" onChange={ (e) => { setName(e.target.value) } }  type="text" / ></td>
              <td><input placeholder="email" onChange={ (e) => { setEmail(e.target.value) } } type="email" /></td>
              <td><input placeholder="Amount" onChange={ (e) => { setBalance(e.target.value) } } type="number" name="" id="" /></td>
              <td><button onClick={Add} >submit</button></td>
            </tr> */}
              {table.map((table, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{table.name}</td>
                    <td>{table.balance}</td>
                    <td>{table.email}</td>
                    <td>
                      <a href={"/customers/" + table.id } >
                        View Details
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="transferBtn">
            <button onClick={() => setModal(true) }>
              Transfer Money
            </button>
            {Modal && <AlertModal closeModal={setModal} /> }
            
          </div>
        </div>
        {/* <div className="transactionSection">
          <h3>Select</h3>
          <select id="options" name="options"  onChange={(e) => { setIds(e.target.value)} } >
            {table.map((table) => {
              return(
                <option value={table.id} >{table.name}</option>
              )
            })}
          </select>
          <h3>{ids}</h3>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Transaction;
