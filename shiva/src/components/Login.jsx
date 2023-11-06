import {useRef,useState} from "react";
const Login=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const [msg,setMsg]=useState("");
    const login =()=>{
        ref1.current.value=="admin"&&ref2.current.value=="admin@123"?setMsg("Login Sucess"):setMsg("Login Fail");
    }
    return(
        <fieldset>
            <legend>Login Form</legend>
            <input type="text" placeholder="uername" ref={ref1}></input><br></br>
            <input type="password" placeholder="password" ref={ref2}></input><br></br>
            <button onClick={login}>Login</button><br></br>
            <h1>{msg}</h1>
        </fieldset>
    )
}
export default Login;