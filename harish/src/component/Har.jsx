import{useState}from "react";
const StateEx1=()=>{
const[str,setStr]=useState(`ReactJS`);
const[num,SetNum]=useState(100);
const[flag,setFlag]=useState(true);
const[arr,setArr]=useState([10,20,30,40,50]);
const[obj,setObj]=useState({"key1":"value1","key2":"value2","key3":"value3"});
const[products,setProducts]=useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
{"p_id":222,"p_name":"p_two","p_cost":20000},
{"p_id":333,"p_name":"p_three","p_cost":30000}]);
return(
<>
<table border={1}
align="center"
cellpadding={10}
cellspacing={10}>
<thead>
<tr>
<th>p_id</th>
<th>p_name</th>
<th>p_cost</th>   
</tr>   
</thead>
<tbody>
{
products.map((element,index)=>{
return(<tr key={index}>
<td>{element.p_id}</td>
<td>{element.p_name}</td>
<td>{element.p_cost}</td>
</tr>);
})
}
</tbody>
<tfoot></tfoot>
</table>
<h5>{obj.key1}...{obj.key2}...{obj.key3}</h5>
<hr></hr>
{
arr.map((element,index)=>{
return <h5>{element}</h5>
})
}
<hr></hr>
<h5>{JSON.stringify(flag)}</h5>
<hr></hr>
<h5>{num}</h5>
<hr></hr>
<h6>{str}</h6>

</>
)
}
export default StateEx1;
