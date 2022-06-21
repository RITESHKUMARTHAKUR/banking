import {React , useEffect , useState }from "react";
import { doc, collection, getDocs , increment ,  updateDoc ,setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./AlertModal.css";

function Modal({ closeModal }) {
    const [name,setName] = useState();
    const [amount,setAmount] = useState(0);
    const [ids,setIds] = useState(" ");
    const [table,setTable] = useState([]);
    const valuesRef = collection(db, "table");

    useEffect(() => {
        const getValues = async () => {
          const data = await getDocs(valuesRef);
          setTable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getValues();
    });

    const updateTask = () => {
      const taskRef = doc( db,"table" , ids );
      // updateDoc( taskRef, {
      //   title : "test task1",
      //   val: 200 ,
  
      // })
      updateDoc( taskRef , {
        balance: increment(amount),
      })
    };
    
    // const addMoney = async () => {
    //   const taskRef = doc(db, "table", { ids });
    //   //   updateDoc(taskRef, {
    //   //     balance: increment(amount),
    //   //   });
    //   await setDoc(taskRef, {
    //     balance: increment(50),
    //   });
    // };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCross ">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="titleName groupContent">
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" onChange={(e) => { setName(e.target.value)  }} />
        </div>
        <div className="titleCustomer groupContent">
          <label htmlFor="customer">Select Customer</label>
          <select id="options" name="options"  onChange={(e) => { setIds(e.target.value)} } >
            {table.map((table , key ) => {
              return(
                <option value={table.id} key={key+1} >{table.name}</option>
              )
            })}
          </select>
        
        </div>
        <div className="titleAmount groupContent">
          <label htmlFor="amount" className="flexCont">amount</label>
          <input type="text" id="amount" onChange={(e) => { setAmount(e.target.value) } } />
        </div>
        <div className="navButtons">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={updateTask} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
