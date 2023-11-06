const Doubleclick =()=>{
    const login=(param1,param2)=>{
        param1==`deepu`&& param2==`deepu123`?alert("Succces"):alert("Fail");
    }
    return(
        <>
        <button onDoubleClick={()=>login(`deepu`,`deepu123`)}>Double click</button>
        </>
    )
}
export default Doubleclick;