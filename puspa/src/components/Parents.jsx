import Electronics from "./Electronic";
import Mobile from "./Mobile";
import Dell from "./Dell";
import Hp from "./Hp";
import Lenovo from "./Lenovo";

import Vivo from "./Vivo";
import Samsung from "./Samsung";
import { Link,Routes,Route } from "react-router-dom";
import Iphone from "./Iphone";
const Parents=()=>{ 
    return(
        <>
             <Link to="" style={{marginRight:100}}>Electronics</Link>
            <Link to="/mobile">Mobile</Link>
            <br></br>
            <Routes>
                <Route path="/" element={<Electronics></Electronics>}>
                    <Route index element={<Dell></Dell>}></Route>
                    <Route path="electronic/hp" element={<Hp></Hp>}></Route>
                    <Route path="e
                    vo" element={<Lenovo></Lenovo>}></Route>
                </Route>x
                <Route path="/mobile" element={<Mobile></Mobile>}>
                    <Route index element={<Iphone></Iphone>}></Route>
                    <Route path="mobile/vivo" element={<Vivo></Vivo>}></Route>
                    <Route path="mobile/samsung" element={<Samsung></Samsung>}></Route>
                </Route>
            </Routes>
        </>
    )
}
export default Parents;