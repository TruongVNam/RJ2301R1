import { useState } from "react"
import { useNavigate } from "react-router-dom";

const myEmployees = [
    { id: 1, name: "Hoa", age: 20 },
    { id: 2, name: "Khánh", age: 25 },
    { id: 3, name: "Tú", age: 22 },
    { id: 4, name: "Hải", age: 27 },
    { id: 5, name: "Dương", age: 24 },
    { id: 6, name: "Nam", age: 28 },
    { id: 7, name: "Lan", age: 26 },
    { id: 8, name: "Quân", age: 23 },
    { id: 9, name: "Thủy", age: 21 },
    { id: 10, name: "Dũng", age: 29 }
];

const Employee = () => {
    const [employees, setEmployees] = useState(myEmployees);

    let navigate = useNavigate();

    const handleDetail = (employee) => {
        navigate(`/detail`, { state: employee })
    }

    return (
        <>
            <h3>Danh sách nhân viên</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => handleDetail(employee)}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
};

export default Employee;