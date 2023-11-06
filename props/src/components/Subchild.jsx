const Subchild=(props)=>{
    return(
        <>
          <h1>{props.key1}</h1>
          <h1>{props.key2}</h1>
          <h1>{JSON.stringify(props.key3)}</h1>
          {
            props.key4.map((element,index)=>{
                return(<h1 key={index}>{element}</h1>)
            })
          }
          <h1>{props.key5.subone}....{props.key5.subtwo}</h1>
          <table border = {1} align="center" cellSpacing={10} cellPadding={10}>
            <tr>
                <th>Pid</th>
                <th>Pname</th>
                <th>Pcost</th>
            </tr>
            {
                props.key6.map((element,index)=>{
                    return(<tr key={index}>
                        <td>{element.pid}</td>
                        <td>{element.pname}</td>
                        <td>{element.pcost}</td>
                    </tr>)
                })
            }
          </table>
        </>
    )
}
export default Subchild;