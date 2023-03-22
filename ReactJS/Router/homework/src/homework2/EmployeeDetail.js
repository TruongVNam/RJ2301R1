import { useLocation, useParams } from "react-router-dom";

const EmployeeDetail = () => {
    const { state } = useLocation();
    return (
        <div style={{width: '40%', margin:'10px auto'}}>
            <h3>Nhân viên</h3>
            <p>ID: {state.id}</p>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
        </div>
    )
}

export default EmployeeDetail;