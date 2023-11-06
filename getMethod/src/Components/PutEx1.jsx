import axios from "axios";
import { useRef, useState } from "react";

const PutMx=()=>{
    const[res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const Put_data=()=>{
        PutEx();
    }
    const PutEx=async()=>{
        const res=await axios.put("http://localhost:2323/update/1001",{"pname":ref1.current.value,"ptype":ref2.current.value});
        const{data}=res;
        setRes(data);
    }
    return(
        <>
            <input type="text" ref={ref1}></input><br></br><br></br>
            <input type="text" ref={ref2}></input><br></br><br></br>
            <button onClick={Put_data}>Post</button>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default PutMx;