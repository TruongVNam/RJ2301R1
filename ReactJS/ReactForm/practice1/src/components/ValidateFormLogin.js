import React ,{useState} from 'react';

function ValidateFormLogin(){
    const MESSAGE_ERROR = {
        email: 'Email error',
        password: 'Password error',
    };

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };

    
    const [form, setForm] = useState({});
    
    
    const handleChange =(e)=>{
        console.log('handleChange - trước trong hàm handleChange: ', form);
        let error = '';
        error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name];

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
        const isFilled = form.email && form.email.value && form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error );

        alert(JSON.stringify(form));
        if (isFilled && !isError) {
            alert("Login in successfully!!!");
        } else {
            alert("Please fill out all the fields!!!");
        }
    };

    return(
        console.log('rendering'),
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center my-4">Login</h2>
                    <form onSubmit={()=>handleSubmit()}>

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

                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={(e)=>handleSubmit(e)}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export {ValidateFormLogin}