import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Logic=()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();
    const login=()=>{
        ref1.current.value=="admin" && ref2.current.value=="admin@123"? navigate("/dashboard"):navigate("/error"); 
    }
}
export default Logic;