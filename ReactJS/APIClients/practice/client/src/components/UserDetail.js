import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

function UserDetail() {

    const { userId } = useParams();
    const isCreate = !userId;
    const [user, setUser] = useState({});

    // const { errors, values, handleChange, handleSubmit, handleBlur} = useFormik({
    //     initialValues : {
    //         id:'',
    //         name:'',
    //         birthday:''
    //     },
    //     validationSchema: Yup.object().shape({
    //         id: Yup.string().required().matches((async()=>{
    //             const resId = await axios.get(`http://localhost:3000/users/${id}`);
    //             const id = resId.data;
    //             return new RegExp (id)
    //         }), "User ID is exist"),
    //         name: Yup.string().required()
    //     }),
    //     onSubmit: async (values) => {
    //         console.log(values);
    //         try {
    //             const resPutUser = await axios.post(`http://localhost:3000/users` , values);
    //             if (resPutUser.status < 300) {
    //                 console.log(resPutUser)
    //                 alert(`${JSON.stringify(values)} have been update successfully`);
    //             } else {
    //                 console.log(resPutUser)
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         };

    //     }
    // });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{

            console.log(userId);
            async function checkUserExists () {
                try {
                    if (userId) {
                        setIsLoading(true);
                        const userToCheck = await axios.get(`http://localhost:3000/users/${userId}`)
                        const userChecked = userToCheck.data;
                        setUser(userChecked);
                        setIsLoading(false);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            checkUserExists();

    },[userId])

    return (
        <div className='container'>

            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <h2 className='text-center my-4'>User Detail</h2>
                    <form >

                        <div className="form-group">
                            <label htmlFor="id">Id:</label>
                            <input type="text" className="form-control" id="id" name="id" value={user.id || ""} />
                            {/* {errors.id && <p className='error'>{errors.id}</p>} */}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" className ="form-control error" value={user.name || ""} />
                            {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="birthday">Birthday</label>
                            <input name="birthday" type="date" className ="form-control error" value={user.birthday || ""} />
                            {/* {errors.birthday && <p className='error'>{errors.birthday}</p>} */}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-3" >Update</button>
                    </form>
                </div>  
            </div>

            <div className="row justify-content-center">
                <div className='col-md-6'>
                <h2 className='text-center my-4'>New Articles</h2>
                    <form >
                        <div class="form-group">
                            <label htmlFor="id">Article</label>
                            <input type="textarea" class="form-control" id="articles" name="articles" placeholder="Write your article"/>
                            {/* {errors.id && <p className='error'>{errors.id}</p>} */}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-3" >Add New Article</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default UserDetail;