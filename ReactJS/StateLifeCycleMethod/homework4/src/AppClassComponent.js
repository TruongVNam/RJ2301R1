import './App.css';
import './icon.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { studentListShort } from "./studentList.js";

const nameValidator = /^[a-zA-Z0-9_-]{3,16}$/;
const phoneValidator = /^[0]{1}[1-9]{1}[0-9]{1,8}$/m;

const emailValidator = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



class AppClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: studentListShort,
      form: { name: '', phone: '', email: '' },
      isValid: false,
      indexSelected: -1,
      validErr: {nameErr: false, phoneErr: false, emailErr: false}
    };
  }
  
  // handleChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState((state) => {
  //     const form = state.form
  //     form[event.target.name] = event.target.value;
  //     return { form }
  //   },
  //     () => this.checkInvalidForm());
  // }
  handleChange = (event) => {
    console.log(event.target.value)
    const form = {...this.state.form}
    form[event.target.name] = event.target.value
    this.setState({
      form
    },
    () => this.checkInvalidForm());
    console.log(form)
  }

  handleSelect = (index) => {
    console.log(`Đang chọn học sinh có vị trí thứ ${index} trong danh sách`)
    let {studentList} = {...this.state}
    this.setState({
      form: studentList[index],
      indexSelected: index
    })
  }

  checkInvalidForm = () => {
    console.log('Check form failed')
    const { name, phone, email } = {...this.state.form};
    // let {nameErr,phoneErr, emailErr} = {...this.state.validErr};
    let value = true;
    console.log('Is input name right? ', nameValidator.test(name));
    console.log('Is input phone right? ', phoneValidator.test(phone));
    console.log('Is input email right? ', emailValidator.test(email));
    // nameErr= !nameValidator.test(name);
    // phoneErr= !phoneValidator.test(phone);
    // emailErr= !emailValidator.test(email);
    if (!nameValidator.test(name) || !phoneValidator.test(phone) || !emailValidator.test(email)) {
      value = false;
    }
    this.setState({
      isValid: value
      // validErr: {nameErr: nameErr, phoneErr: phoneErr, emailErr: emailErr}
    })
    console.log(value);
  }

  handleSubmit = () => {
    let { studentList, form, isValid, indexSelected} = {...this.state}
    const { name, phone, email } = form;
    // let { nameErr, phoneErr, emailErr } = validErr;
    // nameErr= !nameValidator.test(name);
    // phoneErr= !phoneValidator.test(phone);
    // emailErr= !emailValidator.test(email);
    console.log('trước khi thực hiện thay đổi state');
    console.log(this.state);
    if (isValid) {
      if (indexSelected > -1) {
        studentList.splice(indexSelected,1,form);
        this.setState({
          studentList,
        })
      } else {
        let newStudentList = studentList.concat(form);
        console.log(newStudentList);
        this.setState({
          studentList: newStudentList,
        })
      }
      form = { name: '', phone: '', email: '' };
      isValid = false;
      indexSelected = -1;
      this.setState({
        form,
        isValid,
        indexSelected
      });
    } else {
      this.setState({
        validErr: {
          nameErr: !nameValidator.test(name), 
          phoneErr: !phoneValidator.test(phone), 
          emailErr: !emailValidator.test(email)
        }
      });
    }
    console.log('sau khi thực hiện thay đổi state')
    console.log(this.state)
  }

  handleDelete = (index) => {
    let {studentList} = {...this.state};
    studentList.splice(index,1);
    console.log(index);
    console.log(studentList);
    console.log(studentList[index]);
    alert(`Bạn chắc chắn muốn xóa dữ liệu này ?`);
    this.setState({
      studentList
    })
  };

  render() {
    console.log('rendering student')
    console.log(this.state)
    let { studentList, form} = this.state;
    let {nameErr,phoneErr,emailErr} = this.state.validErr;
    return (
      <div className='container'>

        <h1>Student List</h1>

        <div className='form-group mb-3'>
          <label htmlFor='name' className='form-label'>Name: </label>
          <input type='text' className='form-control' name='name' id='name' value={form.name} onChange={(event) => this.handleChange(event)} />
          {nameErr && <p style={{color:'red'}}>Nhập tên lỗi</p>}
        </div>

        <div className="form-group mb-3">
          <label htmlFor='phone' className='form-label'>Phone: </label>
          <input type='text' className='form-control' name='phone' id='phone' value={form.phone} onChange={(event) => this.handleChange(event)}/>
          {phoneErr && <p style={{color:'red'}}>Nhập phone lỗi</p>}
        </div>

        <div className="form-group mb-3">
          <label htmlFor='email' className='form-email'>Email: </label>
          <input type='text' className='form-control' name='email' id='email' value={form.email} onChange={(event) => this.handleChange(event)}/>
          {emailErr && <p style={{color:'red'}}>Nhập email lỗi</p>}
        </div>
        <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>

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
                  <button className='btn btn-info m-2' onClick={()=>this.handleSelect(index)}>Edit</button>
                  <button className='btn btn-danger m-2' onClick={()=>this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AppClassComponent;
