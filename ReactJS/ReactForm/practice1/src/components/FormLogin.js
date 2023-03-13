import React ,{useState} from 'react';

function FormLogin(){
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const [isValid, setIsValid] = useState(true);

    const [status, setStatus] = useState('');

    const handleChange =(e)=>{
        console.log('handleChange - trước: ', form);
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            });
        console.log('handleChange - Sau: ', form);
    };

    console.log('handleChange - Sau - ngoài hàm: ', form);

    const checkValidForm=()=>{
        console.log('CheckValidForm - Trước:', form);
        console.log('CheckValidForm - Trước:', isValid);
        let formValue = Object.values(form);
        console.log(formValue);
        for (let i=0; i<formValue.length; i++) {
            if (formValue[i] === '') {
                setIsValid({isValid: !isValid});
                setStatus('Please fill out all the fields!!!');
                break;
            }else{
                setStatus('Sign up successfully!!!');
            }

        };
    
        console.log('CheckValidForm - Sau:', form);
        console.log('CheckValidForm - Sau:', isValid);

    };

    console.log('CheckValidForm - Sau - ngoài hàm:', form);
    console.log('CheckValidForm - Sau - ngoài hàm:', isValid);

    // const checkStatus = () => {
    //     console.log('CheckStatus - Trước:', status);
    //     if (isValid) {
    //         setStatus('Sign up successfully!!!');
    //     } else {
    //         setStatus('Please fill out all the fields!!!');
    //     }
    //     console.log('CheckStatus - sau:', status);
    // };

    console.log('CheckStatus - sau - ngoài hàm:', status);

    const handleSubmit = (e)=> {
        checkValidForm();
        // checkStatus();
        // checkStatus();
        console.log('handleSubmit - trước', isValid);
        console.log('handleSubmit - trước', form);
        console.log('handleSubmit - trước', status);
        e.preventDefault();
        if (isValid) {
            alert(JSON.stringify(form));
            alert(JSON.stringify(status));
        } else {
            alert(JSON.stringify(form));
            alert(JSON.stringify(status));
        }
        console.log('handleSubmit - sau - trong hàm', isValid);
        console.log('handleSubmit - sau - trong hàm', form);
        console.log('handleSubmit - sau - trong hàm', status);
    };

    console.log('handleSubmit - sau - ngoài hàm', isValid);
    console.log('handleSubmit - sau - ngoài hàm', form);
    console.log('handleSubmit - sau - ngoài hàm', status);

    return(
        console.log('rendering'),
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center my-4">Login Form</h2>
                    <form onSubmit={()=>handleSubmit()}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" onChange={(e)=>handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={(e)=>handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={(e)=>handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" onChange={(e)=>handleChange(e)}/>
                        </div>

                        {isValid ? <p className='mt-3'>{status}</p> : <p className='mt-3'>{status}</p>}

                        <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export {FormLogin}