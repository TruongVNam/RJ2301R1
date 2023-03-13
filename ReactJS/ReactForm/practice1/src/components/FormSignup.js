import React ,{useState} from 'react';

function FormSignup(){
    const MESSAGE_ERROR = {
        username: 'Username error',
        email: 'Email error',
        password: 'Password error',
        confirmPassword: 'Password must be the same'
    };

    const REGEX = {
        username:  /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };

    let error = '';

    const [form, setForm] = useState({});


    const handleChange =(e)=>{
        console.log('handleChange - trước trong hàm handleChange: ', form);
        if (e.target.name === 'password') {
            if (form.confirmPassword && form.confirmPassword.value) {
                error = e.target.value === form.confirmPassword.value ? '' : MESSAGE_ERROR[e.target.name];
            } else {
                error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name];
            }
        } else if (e.target.name === 'confirmPassword') {
            error = e.target.value === form.password.value ? '' : MESSAGE_ERROR[e.target.name];
        } else {
            error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name];
        }
        setForm(
            {
                ...form,
                [e.target.name]: {value: e.target.value, error: error}
            });
        console.log('handleChange - Sau - trong hàm handleChange: ', form);
    };

    console.log('handleChange - Sau - ngoài hàm handleChange: ', form);

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('handleSubmit - trước', form);
        const isFilled = form.username && form.username.value && form.email && form.email.value && form.password && form.password.value && form.confirmPassword && form.confirmPassword.value;
        const isError = isFilled && (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);
        if (isFilled && !isError) {
            alert(JSON.stringify(form));
            alert('Đăng ký thành công');
        } else {
            alert(JSON.stringify(form));
            alert('Đăng ký không thành công');
        }
    };

    return(
        console.log('rendering'),
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center my-4">Sign Up</h2>
                    <form onSubmit={()=>handleSubmit()}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input value={(form.username && form.username.value) || ''} type="text" className="form-control" id="username" name="username" onChange={(e)=>handleChange(e)}/>
                            {form.username && form.username.value && (<p className='error mt-3'>{form.username.error}</p>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input value={(form.email && form.email.value) || ''} type="email" className="form-control" id="email" name="email" onChange={(e)=>handleChange(e)}/>
                            {form.email && form.email.value && (<p className='error mt-3'>{form.email.error}</p>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input value={(form.password && form.password.value) || ''} type="password" className="form-control" id="password" name="password" onChange={(e)=>handleChange(e)}/>
                            {form.password && form.password.value && (<p className='error mt-3'>{form.password.error}</p>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input value={(form.confirmPassword && form.confirmPassword.value) || ''} type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={(e)=>handleChange(e)}/>
                            {form.confirmPassword && form.confirmPassword.value && (<p className='error mt-3'>{form.confirmPassword.error}</p>)}
                        </div>

                        {form.confirmPassword && form.confirmPassword.value && (<p className='error mt-3'>{form.confirmPassword.error}</p>)}

                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export {FormSignup}