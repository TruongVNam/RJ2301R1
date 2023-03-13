import React ,{useState} from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup';

function FormByFormik(){

    const REGEX = {
        name:/^[a-zA-Z0-9_-]{3,16}$/,
        phone:/^[0]{1}[1-9]{1}[0-9]{1,8}$/m,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    
    const [form, setForm] = useState({});
    
    const handleChange =(e)=>{
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            });
    };

    // const DisplayingErrorMessagesSchema = Yup.object().shape({
    //     name: Yup.string()
    //       .min(2, 'Too Short!')
    //       .max(50, 'Too Long!')
    //       .required('Required'),
    //     email: Yup.string()
    //     .email('Invalid email')
    //     .required('Required'),
    //   });

    const handleValidate=()=>{
        const errors = {};
        console.log('Vào đầu hàm handleValidate');
        if (!form.name){
            errors.name = "Requeried";
        } else if (REGEX.name.test(form.name)) {
            errors.name = "Invalid name address";
            console.log("code");
        };
        if (!form.email){
            errors.email = "Requeried";
        } else if (REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        };
        if (!form.phone){
            errors.phone = "Requeried"
        } else if (REGEX.phone.test(form.phone)) {
            errors.phone = "Invalid phone";
            console.log("code");
        };
        return errors;
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert("Login in successfully!!!");
    };

    return(
        console.log('rendering'),
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center my-4">Contact form</h2>
                    <Formik 
                    initialValues={{
                        name: '',
                        phone: '',
                        email: ''
                    }}
                    validate={handleValidate} 
                    onSubmit={()=>handleSubmit()}
                    >
                        {({errors, handleSubmit})=>(
                            <Form onSubmit={()=>handleSubmit()}>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" className="form-control" id="name" name="name" onChange={(e)=>handleChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" className="form-control" id="email" name="email" onChange={(e)=>handleChange(e)}/>
                                    {/* <p className='error mt-3'>{errors.email}</p> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <Field type="phone" className="form-control" id="phone" name="phone" onChange={(e)=>handleChange(e)}/>
                                    {/* <p className='error mt-3'>{errors.phone}</p> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Massage</label>
                                    <Field type="textarea" className="form-control" id="massage" name="massage" onChange={(e)=>handleChange(e)}/>
                                    {/* <p className='error mt-3'>{errors.massage}</p> */}
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mt-3" onClick={(e)=>handleSubmit(e)}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export {FormByFormik}