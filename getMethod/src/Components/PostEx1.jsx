import axios from "axios";
import { useRef,useState } from "react";

const PostSnake=()=>{
    const name=useRef(null);
    const salary=useRef();
    const [msg,setMsg]=useState("")
    const postData=async ()=>{
     const res= await  axios.post("http://localhost:7575/save",{"name":name.current.value,"Salary":salary.current.value})
     const {data}=res;   
     setMsg(data);
    }
    const save=()=>{
        postData();
    }
return(
    <>
    <input type="text" ref={name} placeholder="Username" />
    <br /><br />
    <input type="number" ref={salary} placeholder="Salary" />
    <br /><br />
    <button onClick={save}>Save</button>
    <h1>{msg}</h1>
    </>
)
}
export default PostSnake;
