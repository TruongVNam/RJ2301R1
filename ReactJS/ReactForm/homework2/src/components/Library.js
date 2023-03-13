// import {useFormik} from 'formik';
// import { LibraryDTO } from './LibraryDTO';
import {myBooks} from './Mybooks';
import { useState } from 'react';
// import * as Yup from 'yup';

function Library() {

    const [books, setBooks] = useState({myBooks});
    
    const [indexSelect, setIndexSelect] = useState(-1);

    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        title:'',
        number: ''
    });

    const handleChange = (e) => {
        const newBook = {...form};
        newBook[e.target.name] = e.target.value;
        setForm(
            newBook
        );
        handleValidate();
    };

    const handleValidate = () => {
        let errors = {};
        const {myBooks} = {...books};
        if (!form.title) {
            form.title = 'Book title is required';
        } else if ((myBooks.findIndex(book => book.title === form.title))>=0 && indexSelect < 0) {
            errors.title = 'That Books is excisted';
        } else {
            errors.title = '';
        };

        if (!form.number) {
            errors.number = 'Book number is required';
        } else if (Number(form.number)<=0) {
            errors.number = 'The number of Book must be greater than 0';
        } else {
            errors.number = '';
        };

        setErrors(
            errors
        );
    }

    const handleSelect = (index) => {
        console.log(index);
        const selectedBook = {...books.myBooks[index]};
        console.log(selectedBook);
        setForm(
            selectedBook
        );
        setIndexSelect(
            index
        )
    };

    const handleDelete = (index) => {
        const {myBooks} = {...books};
        setForm({
            title:'',
            number: ''
        })
        myBooks.splice(index, 1);
        setBooks({
            ...books,
            myBooks
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const {myBooks} = {...books};
        if (indexSelect>=0) {
            myBooks[indexSelect] = form;
        } else {
            myBooks.push(form);
        };
        setBooks({
            ...books,
            myBooks
        });
        setForm({
            title:'',
            number: ''
        });
        setIndexSelect(-1)
    };


    return (
        <div className='container'>
            {/* {console.log('render: ',JSON.stringify(books.myBooks))} */}
            <div className="row justify-content-center">
                <div className='col-md-12'>
                <h2 className='text-center my-4'>Library</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="title">Tiêu đề</label>
                            <input name="title" type="text" className ="form-control" value={form.title} onChange={(e)=>handleChange(e)} onBlur={(e)=>handleChange(e)}/>
                            {errors.title && <p className='error'>{errors.title}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="number">Số lượng</label>
                            <input name="number" type="text" className ="form-control" value={form.number} onChange={(e)=>handleChange(e)} onBlur={(e)=>handleChange(e)}/>
                            {errors.number && <p className='error'>{errors.number}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-3" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
            <hr></hr>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Number</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myBooks.map((book, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{book.title}</td>
                            <td>{book.number}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>handleSelect(index)}>Edit</button>
                                <button className='btn btn-danger m-2' onClick={()=>handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export {Library}