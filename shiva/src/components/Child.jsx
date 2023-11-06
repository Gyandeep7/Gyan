const Child=(props)=>{
    return(
        <>
         <button onClick={()=>props.fun_one(`admin`,`admin@123`)}>Click Me</button>
        </>
    )
}
export default Child;