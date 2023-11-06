import Subchild from "./Subchild.jsx"
const Child=(props)=>{
    return(
        <>
        <Subchild{...props}></Subchild>
        </>
    )
}
export default Child;