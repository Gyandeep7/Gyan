import axios from "axios";
import { useState,useRef } from "react";
const DeleteEx1=()=>{
    const[msg,setMsg]=useState("")
    const dele=useRef()
    const delete_Data=async()=>{
        const res=await axios.delete(`http://localhost:7575/delete/${dele.current.value}`)
        const{data}=res;
        setMsg(data);
    }
    const delete1=()=>{
        delete_Data();
    }
    return(
        <>
            <input type="number" ref={dele} placeholder="Enter id"/><br />
            <button onClick={delete1}>Delete</button><br /><br />
           <h1>{msg}</h1>
        </>
    )
}
export default DeleteEx1;