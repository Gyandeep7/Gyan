import { useEffect, useState } from "react";
import axios from "axios"

const GetSpring=()=>{
    const [arr,setArr]=useState([])
    const getData=async ()=>{
        const res=await axios.get("http://localhost:7575/getAll")
        const {data}=res;
        console.log(data);
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
        <table className="table table-danger table-striped table-boredered table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>TA</th>
                <th>DA</th>
                <th>PF</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
            </tr>
            </thead>
            <tbody>
                {
                    arr.map((element,index)=>{
                        return (<tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.salary}</td>
                            <td>{element.ta}</td>
                            <td>{element.da}</td>
                            <td>{element.pf}</td>
                            <td>{element.gross_salary}</td>
                            <td>{element.net_salary}</td>
                        </tr>)
                    })

                }
            </tbody>
        </table>
        </>
    )
}
export default GetSpring;