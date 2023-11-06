import Login from "./Login";
import Dashboard from "./Dasboard";
import Error from "./Error";
import {Routes,Route} from "react-router-dom";

const Parent=()=>{
    <>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/error" element={<Error></Error>}></Route>
        </Routes>
    </>
}
export default Parent;