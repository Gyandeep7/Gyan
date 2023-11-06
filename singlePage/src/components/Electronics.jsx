import {Link} from "react-router-dom";
const Electronics=()=>{
    <>
    <h1>Electronics Information</h1>
    <Link to="electronic/dell" style={{marginRight:100}}>Dell</Link>
    <Link to="electronic/hp" style={{marginRight:100}}>Hp</Link>
    <Link to="electronic/lenovo" style={{marginRight:100}}>Lenovo</Link>
    <br /><br />
    <outlet></outlet>

    </>
}
export default Electronics; 