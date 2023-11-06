import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const name=useRef(null)
    const password=useRef(null)
    const nav=useNavigate();
    const login=()=>{
        name.current.value=="Riyaz"&&password.current.value=="Riyaz143@"?nav("/dashboard"):nav("/error");
    }
    return(
        <>
        <h1>Welcome to sathya tecnologies</h1>
        <input type="text"  ref={name} placeholder="enter name"/>
        <br />
        <input type="password" ref={password} placeholder="enter password" />
        <br />
        <button onClick={login}>Login</button>
        </>
    )
}
export default Login;