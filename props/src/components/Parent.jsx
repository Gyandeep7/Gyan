import Child from "./Child.jsx";
const Parent=()=>{
    return(
        <>
        <Child key1={"ReactJS"}
            key2={100}
            key3={true}
            key4={[10,20,30,40,50]}
            key5={{"sub_one":"ReactJS","sub_two":"NodeJS"}}
            key6={[{"pid":"111","pname":"pone","pcost":10000},{"pid":"222","pname":"ptwo","pcost":20000}]}
            >
        </Child>

        </>
    )
}
export default Parent;