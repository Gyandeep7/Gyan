const Event1=()=>{
    const login = (param1,param2)=>{
        param1==`admin`&&param2==`admin@123`?alert("Login sucess"):alert("Login Fail");
    }
    return(
        <>
        <button onClick={()=>login(`admin`,`admin@123`)}>Login</button>
        </>
    )
}
export default Event1;