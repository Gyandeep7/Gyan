import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import {Link,Route,Routes} from "react-router-dom"
 
const Parent =()=>{
    return(
        <>
            <Link to ="/Comp1" style={{marginRight:100}}>
                Link1
            </Link>
            <Link to ="/Comp2" style={{marginRight:100}}>
                Link2
            </Link>
            <Link to ="/Comp3">
                Link3
            </Link>
            <br></br><br></br>
            <Routes>
                <Route path="/comp1" element={<Comp1></Comp1>}></Route>
                <Route path="/comp2" element={<Comp2></Comp2>}></Route>
                <Route path="/comp3" element={<Comp3></Comp3>}></Route>
            </Routes>
        </>
    )
}
export default Parent;