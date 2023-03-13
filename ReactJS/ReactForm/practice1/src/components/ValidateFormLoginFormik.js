import React ,{useState} from 'react';
import { Formik } from 'formik';

function ValidateFormLoginFormik(){
    
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    
    const [form, setForm] = useState({});
    
    
    function handleChange(e){
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            });
    };

    
    function handleValidate(){
        const errors = {};
        console.log('Vào đầu hàm handleValidate');
        if (!form.email){
            errors.email = "Requeried";
        } else if (REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        };
        if (!form.password){
            errors.password = "Requeried"
        };
        return errors;
    }


    function handleSubmit(e){
        console.log('handleSubmit - trước', form);
        alert(JSON.stringify(form));
        alert("Login in successfully!!!");
    };

    return(
        console.log('rendering'),
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center my-4">Sign up</h2>
                    <Formik
                        initialValues={form}
                        validate={handleValidate}
                        onSubmit={handleSubmit}
                    >
                        {({errors, handleSubmit}) => (

                        <form onSubmit={handleSubmit}>

                            <div className={`form-group custom-input ${errors.email ? "custom-input-error" : ""}`}>
                                <label htmlFor="email">Email:</label>
                                <input value={form.email || ''} type="email" className="form-control" id="email" name="email" onChange={handleChange}/>
                                <p className='error mt-3'>{errors.email}</p>
                            </div>

                            <div className={`form-group custom-input ${errors.password ? "custom-input-error" : ""}`}>
                                <label htmlFor="password">Password:</label>
                                <input value={form.password || ''} type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
                                <p className='error mt-3'>{errors.password}</p>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mt-3" >Login</button>
                        </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}
export {ValidateFormLoginFormik}