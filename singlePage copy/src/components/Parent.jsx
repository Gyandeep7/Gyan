import Electronics from "./Electronics";
import Mobile from "./Mobile";
import Dell from "./Dell";
import Hp from "./Hp";
import Lenovo from "./lenovo";
import Iphone from "./Iphone";
import Vivo from "./Vivo";
import Samsung from "./Samsung";
import {Link,Route,Routes} from "react-router-dom";

const Parent=()=>{
    <>
    <Link to="/electronics" style={{marginRight:100}}>Electronics</Link>
    <Link to="/mobile">Mobile</Link>
    <br /><br />
    <Routes>
        <Route path="/electronics" element={<Electronics></Electronics>}>
            <Route path="electronic/dell" element={<Dell></Dell>}></Route>
            <Route path="electronics/hp" element={<Hp></Hp>}></Route>
            <Route path="electronics/lenovo" element={<Lenovo></Lenovo>}></Route>
        </Route>
        <Route path="/mobile" element={<Mobile></Mobile>}>
            <Route path="mobile/iphone" element={<Iphone></Iphone>}></Route>
            <Route path="mobile/vivo" element={<Vivo></Vivo>}></Route>
            <Route path="mobile/samsung" element={<Samsung></Samsung>}></Route> 
        </Route>

    </Routes>   
    </>
}
export default Parent;