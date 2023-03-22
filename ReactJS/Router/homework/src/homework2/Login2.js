import '../App.css';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Login2 (){

    let navigate = useNavigate()

    const {errors, values, handleChange, handleSubmit} = useFormik({
        initialValues:{
            email:'',
            password:'',
            remember: false
        },
        validationSchema: Yup.object().shape({
            email:Yup.string().required(),
            password: Yup.string().required()
            // email:Yup.string().required().matches(/(admin@gmail.com)/, 'Không đúng Email'),
            // password: Yup.string().required().matches(/(letmein)/, "Không đúng Password")
        }),
        onSubmit: values=>{
            console.log(JSON.stringify(values));
            // if (values.email === "admin@gmail.com" && values.password === 'letmein') {
            //     navigate("/employee");
            // };
            navigate("/employee");
        }
    });
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form onSubmit={handleSubmit}>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" onChange={handleChange} />
              <label>Email address</label>
            {errors.email && <p className='error mt-2'>{errors.email}</p>}
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" onChange={handleChange} />
              <label>Password</label>
              {errors.password && <p className='error mt-2'>{errors.password}</p>}
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" name='remember' onChange={handleChange} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    );

//   }
}

export default Login2;
