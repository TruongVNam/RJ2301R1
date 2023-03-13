import React from 'react';
import { useFormik } from 'formik';

const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const validate = values => {
    const errors = {};
    console.log(REGEX.email.test(values.email));
    if (!values.email) {
        errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
        errors.email = 'Invalid email';
    };

    if (!values.title) {
        errors.title = 'Required';
    };

    if (!values.message) {
        errors.message = 'Required';
    }

    console.log('Tổng errors:', !errors.title && !errors.message && !errors.message);
    return errors;
};

const MailForm =()=>{
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            title: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-12'>
                    <h2 className='text-center my-4'>Mail form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">To</label>
                            <input name="email" type="text" className="form-control" value={values.email} onChange={handleChange} />
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>

                        <div className='form-group mt-2'>
                            <label htmlFor="email">Title</label>
                            <input name="title" type="title" className="form-control" value={values.title} onChange={handleChange} />
                            {errors.title && <p className='error'>{errors.title}</p>}
                        </div>

                        <div className='form-group mt-2'>
                            <label htmlFor="message">Message</label>
                            <input id="message" name="message" type="textarea" className="form-control" value={values.message} onChange={handleChange} />
                            {errors.message && <p className='error'>{errors.message}</p>}
                        </div>

                        <div className='form-group mt-4'>
                            <input id="file" name="file" type="file" className="form-control"/>
                        </div>

                        {(!errors.email && !errors.title && !errors.message) ? (<div className='form-group mt-3 success'>
                            Gửi Mail thành công
                        </div>) : ''}

                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { MailForm }