import { useNavigate } from "react-router-dom";

const Category3=()=>{
    // let navigate = useNavigate();
    // const sendDataToProduct = e =>{
    //     navigate('/product3', {state:{categoryId: e.target.value}});
    // };
    return(
        <>
            <h2>Select a Category:</h2>
            {/* <select defaultValue='default' onChange={e=>sendDataToProduct(e)}> */}
            <select defaultValue='default' >
                <option value='default' disabled hidden>Choose your car</option>
                <option value='1'>Honda</option>
                <option value='2'>Suzuki</option>
                <option value='3'>Yamaha</option>
            </select>
        </>
    )
};
export default Category3;