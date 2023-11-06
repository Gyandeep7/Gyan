import Child from "./Child.jsx"
const Parent=()=>{
    const fun_one=(param1,param2)=>{
        param1==`admin`&&param2==`admin@123`?alert("Login Sucess"):alert("Login Fail");
    }
    return(
        <>
            <Child fun_one={fun_one}></Child>
        </>
    )
}
export default Parent;