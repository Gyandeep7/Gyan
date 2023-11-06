import { Link,Outlet } from "react-router-dom";
const Mobile=()=>{
    return(
        <>
            <h1>Mobile Information Soon...!</h1>
            <Link to="mobile/iphone" style={{marginRight:100}}>Iphone</Link>
            <Link to="mobile/vivo" style={{marginRight:100}}>Vivo</Link>
            <Link to="mobile/samsung" style={{marginRight:100}}>Samsung</Link>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Mobile;