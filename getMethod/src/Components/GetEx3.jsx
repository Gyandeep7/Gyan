import { useEffect,useState } from "react";
import axios from "axios";

const GetEx3=()=>{
    const [arr,setArr]=useState([])
    const getData=async()=>{
      
        const res= await axios.get("http://localhost:7575/getAll");
        const {data}=res;
        console.log(data);
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
           <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Ta</th>
                    <th>Da</th>
                    <th>PF</th>
                    <th>Gross Salary</th>
                    <th>Net Salary</th>
                </tr>
                {
                    arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.salary}</td>
                                <td>{element.ta}</td>
                                <td>{element.da}</td>
                                <td>{element.pf}</td>
                                <td>{element.gross_salary}</td>
                                <td>{element.net_salary}</td>
                            </tr>
                        )
                    })
                }
            </thead>
           </table>
        </>
    )
}
export default GetEx3;