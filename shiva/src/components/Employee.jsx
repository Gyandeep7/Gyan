import { useState,useRef } from "react";

const Employee=()=>{
    const name=useRef(null);
    const password=useRef(null);
    const salary=useRef();
    const address=useRef(null);
    const designation=useRef(null);
    const[msg1,setMsg1]=useState("");
    const[msg2,setMsg2]=useState("");
    const[msg3,setMsg3]=useState("");
    const[msg4,setMsg4]=useState("");
    const[msg5,setMsg5]=useState("");
    const[msg6,setMsg6]=useState("");
    const[msg7,setMsg7]=useState("");
    const[msg8,setMsg8]=useState("");
    const[msg9,setMsg9]=useState("");
    const[msg10,setMsg10]=useState("");
    //create function here
    const salaryslip=()=>{
        setMsg1(name.current.value);
        setMsg2(password.current.value);
        setMsg3(salary.current.value);
        setMsg4(address.current.value);
        setMsg5(designation.current.value);
        const sal=parseInt(salary.current.value);
        const ta=sal*0.1;
        const da=sal*0.2;
        const pf=sal*0.07;
        const gross=sal+ta+pf;
        const net=gross-pf;
        setMsg6(ta);
        setMsg7(da);
        setMsg8(pf);
        setMsg9(gross);
        setMsg10(net);
    }
    return(
        <>
     
        <div className="row">
            <div className="col-6">
            <table border={1} align="center" className="c2" cellPadding={5}>
        <br /><tr>
            <td>Name</td>
            <td><input type="text" ref={name} /></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" ref={password} /></td>
        </tr>
        <tr>
            <td>Salary</td>
            <td><input type="number" ref={salary} /></td>
        </tr>
        <tr>
            <td>Address</td>
            <td><input type="text" ref={address} /></td>
        </tr>
        <tr>
            <td>Designation</td>
            <td><input type="text" ref={designation} /></td>
        </tr>
        <tr><td></td><td><button onClick={salaryslip}>Print Slip</button></td></tr>
        </table>
            </div>
            <div className="col-6">
                <h2>Employee Details</h2>
                <table align="center" border={1} className="c1">
                    <tr>
                        <td>Name</td>
                        <td>{msg1}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{msg2}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>{msg3}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{msg4}</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>{msg5}</td>
                    </tr>
                    <tr>
                        <td>TA</td>
                        <td>{msg6}</td>
                    </tr>
                    <tr>
                        <td>DA</td>
                        <td>{msg7}</td>
                    </tr>
                    <tr>
                        <td>PF</td>
                        <td>{msg8}</td>
                    </tr>
                    <tr>
                        <td>Gross</td>
                        <td>{msg9}</td>
                    </tr>
                    <tr>
                        <td>Net</td>
                        <td>{msg10}</td>
                    </tr>
                </table>
                
            </div>
        </div>
       
        </>
    )
}
export default Employee;