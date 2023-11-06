const Double =()=>{
    const fun=()=>{
        alert("double click event Example");
    }
    return(
        <>
        <button onDoubleClick={fun}>Two Clicks</button>
        </>
    )
}
export default Double;