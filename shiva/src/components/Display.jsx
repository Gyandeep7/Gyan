import { useRef,useState } from "react";
const Display=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const [msg1,setMsg1]=useState("");
    const [msg2,setMsg2]=useState("");
    const display=()=>{
        setMsg1(ref1.current.value);
        setMsg2(ref2.current.value);
    }
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" ref={ref1}></input>
                    <br></br><br></br>
                   
                    <input type="text" ref={ref2}></input>
                    <br></br><br></br>
                    <button onClick={display}>Display</button>
                </div>
                <div className="col-6">
                    <h5>{msg1}</h5>
                    <h5>{msg2}</h5>
                </div>
            </div>
        </>
    )
}
export default Display; 