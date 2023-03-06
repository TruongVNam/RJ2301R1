import './App.css';
import './icon.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';
import { studentList, studentListShort } from "./studentList.js";

const nameValidator = /^[a-zA-Z0-9_-]{3,16}$/;
const phoneValidator = /^[0]{1}[1-9]{1}[0-9]{1,8}$/m;
const emailValidator = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



function AppFunctionComponent() {

    const [studentList, setStudentList] = useState(studentListShort);

    const [isValid, setIsValid] = useState(false);
    const [indexSelected, setIndexSelected] = useState(-1);
    const [validErr, setValidErr] = useState({nameErr: false, phoneErr: false, emailErr: false});


    const [form, setForm] = useState({ name: '', phone: '', email: '' })

    const handleChange = (event) => {
        console.log(event.target.value);
        const newForm = {...form};
        console.log(newForm);
        newForm[event.target.name] = event.target.value;
        setForm({newForm},
        () => checkInvalidForm());
        console.log(form)
    }

    const handleSelect = (index) => {
        console.log(`Đang chọn học sinh có vị trí thứ ${index} trong danh sách`);
        let studentList = {...studentList};
        console.log(studentList);
        let form = studentList[index]
        setForm({form})
        setIndexSelected(index)
    }

    const checkInvalidForm = () => {
        console.log('Check form failed')
        const { name, phone, email } = {...form};
        let value = true;
        console.log('Is input name right? ', nameValidator.test(name));
        console.log('Is input phone right? ', phoneValidator.test(phone));
        console.log('Is input email right? ', emailValidator.test(email));

        if (!nameValidator.test(name) || !phoneValidator.test(phone) || !emailValidator.test(email)) {
            value = false;
        }
        setIsValid({value})
        console.log(value);
    }

    const handleSubmit = () =>{

        const { name, phone, email } = form;
        console.log('trước khi thực hiện thay đổi state');
        if (isValid) {
        if (indexSelected > -1) {
            studentList.splice(indexSelected,1,form);
            setStudentList({studentList});
        } else {
            let newStudentList = studentList.concat(form);
            console.log(newStudentList);
            setStudentList({newStudentList})
        }
        setForm({ name: '', phone: '', email: '' });
        setIsValid(false);
        setIndexSelected(-1);
        } else {
            setValidErr({
                nameErr: !nameValidator.test(name), 
                phoneErr: !phoneValidator.test(phone), 
                emailErr: !emailValidator.test(email)
            });
        }
        console.log('sau khi thực hiện thay đổi state')
    }

    const handleDelete = (index) => {
        studentList.splice(index,1);
        console.log(index);
        console.log(studentList);
        console.log(studentList[index]);
        alert(`Bạn chắc chắn muốn xóa dữ liệu này ?`);
        setStudentList({studentList})
    };

    console.log('validErr', validErr);
    return (
        <div className='container'>

            <h1>Student List</h1>

            <div className='form-group mb-3'>
                <label htmlFor='name' className='form-label'>Name: </label>
                <input type='text' className='form-control' name='name' id='name' value={form.name} onChange={(event) => handleChange(event)} />
                {validErr.nameErr && <p style={{color:'red'}}>Nhập tên lỗi</p>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor='phone' className='form-label'>Phone: </label>
                <input type='text' className='form-control' name='phone' id='phone' value={form.phone} onChange={(event) => handleChange(event)}/>
                {validErr.phoneErr && <p style={{color:'red'}}>Nhập phone lỗi</p>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor='email' className='form-email'>Email: </label>
                <input type='text' className='form-control' name='email' id='email' value={form.email} onChange={(event) => handleChange(event)}/>
                {validErr.emailErr && <p style={{color:'red'}}>Nhập email lỗi</p>}
            </div>
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
            <hr></hr>
            <table className="table table-striped table-hover mt-2">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>
                    <button className='btn btn-info m-2' onClick={()=>handleSelect(index)}>Edit</button>
                    <button className='btn btn-danger m-2' onClick={()=>handleDelete(index)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )

}

export default AppFunctionComponent;
