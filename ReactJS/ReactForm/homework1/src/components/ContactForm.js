import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ContactFormDTO } from "./ContactFormDTO";
import { useFormik } from 'formik';


const REGEX = {
    name:/^[a-zA-Z0-9_-]{3,16}$/,
    phone:/^[0]{1}[1-9]{1}[0-9]{1,8}$/m,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

// And now we can use these
function ContactForm (){

    const { errors, values, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues : {
            name:'',
            email:'',
            phone:''
        },
        validationSchema: ContactFormDTO,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-6'>
                <h2 className='text-center my-4'>Contact Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" className ="form-control error" onChange={handleChange} onBlur={handleBlur}/>
                            {errors.name && <p className='error'>{errors.name}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Email Address</label>
                            <input name="email" type="email" className ="form-control error"  onChange={handleChange} onBlur={handleBlur}/>
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" type="text" className ="form-control error"  onChange={handleChange} onBlur={handleBlur}/>
                            {errors.phone && <p className='error'>{errors.phone}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <input id="message" name="message" type="textarea" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {ContactForm}