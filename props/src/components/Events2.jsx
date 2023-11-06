const Events2 =()=>{
    const login=(param1,param2)=>{
        param1==`admin`&&param2==`admin@123`?alert("Aliright Login"):alert("Waste No login");
    }
    return(
        <>
         <button onClick={()=>login(`admin`,`admin@123`)}>login</button>
        </>
    )
}
export default Events2;