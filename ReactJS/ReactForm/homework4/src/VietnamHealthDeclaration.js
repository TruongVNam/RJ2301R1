import { useFormik } from 'formik';
import * as Yup from 'yup';

console.log((/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).test('nam@gmail.com'));


const myValidateSchema = Yup.object().shape({
    name: Yup.string().required("Bắt buộc nhập tên"),
    id: Yup.string().required("Bắt buộc nhập ID"),
    birthyear: Yup.number().required("Bắt buộc nhập năm sinh").moreThan(1900, "Năm sinh phải lớn hơn 1900"),
    nationality: Yup.string().required("Bắt buộc nhập quốc tịch"),
    province: Yup.string().required("Bắt buộc nhập địa chỉ liên lạc"),
    district: Yup.string().required("Bắt buộc nhập địa chỉ liên lạc"),
    ward: Yup.string().required("Bắt buộc nhập địa chỉ liên lạc"),
    address: Yup.string().required("Bắt buộc nhập địa chỉ liên lạc"),
    phone: Yup.number().required("Bắt buộc nhập phone"),
    email: Yup.string().required("Bắt buộc nhập Email").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Email không đúng định dạng")

});

const VietnamHealthDeclaration=()=>{
    const {errors, values, validate, handleChange, handleSubmit} = useFormik({
        initialValues:{
            name: '',
            id: '',
            birthyear:'',
            gender: 'male',
            nationality: '',
            company: '',
            department: '',
            bhyt: '',
            province: '',
            district: '',
            ward:'',
            address: '',
            phone: '',
            email:'',
            symptom:'',
            exposure:''
        },
        validationSchema: myValidateSchema,
        onSubmit: values=>{
            alert(JSON.stringify(values));
            console.log(JSON.stringify(values));
        }
    })

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-12'>
                    <h2>Tờ khai y tế</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Họ tên</label>
                            <input type="text" className="form-control" name='name' id="name" placeholder="Nguyễn Văn A" onChange={handleChange}/>
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="id" className="form-label">Số hộ chiếu/CMND</label>
                            <input type="text" className="form-control" name='id' id="id" placeholder="245245245" onChange={handleChange}/>
                            {errors.id && <p className="error">{errors.id}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthyear" className="form-label">Năm sinh</label>
                            <input type="text" className="form-control" name='birthyear' id="birthyear" placeholder="Năm sinh lớn hơn 1900" onChange={handleChange}/>
                            {errors.birthyear && <p className="error">{errors.birthyear}</p>}
                        </div>

                        <div className="form-group">
                            <label className="form-check-label" htmlFor="gender">
                                Giới tính
                            </label>
                            <input className="form-check-input ms-3" type="radio" name="gender" id="male" value='male' onChange={handleChange} checked/> Nam
                            <input className="form-check-input ms-3" type="radio" name="gender" id="female" value='female' onChange={handleChange}/> Nữ
                            <input className="form-check-input ms-3" type="radio" name="gender" id="other" value='other' onChange={handleChange}/> Khác
                        </div>

                        <div className="form-group">
                            <label htmlFor="nationality" className="form-label">Quốc tịch</label>
                            <input type="text" className="form-control" name='nationality' id="nationality" placeholder="Việt Nam" onChange={handleChange}/>
                            {errors.nationality && <p className="error">{errors.nationality}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="company" className="form-label">Công ty làm việc</label>
                            <input type="text" className="form-control" name='company' id="company" onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="department" className="form-label">Bộ phận làm việc</label>
                            <input type="text" className="form-control" name='department' id="department" onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label className="form-check-label" htmlFor="gender">
                                Có thẻ bảo hiểm y tế
                            </label>
                            <input className="form-check-input ms-3" type="checkbox" name="bhyt" id="bhyt" onChange={handleChange}/>
                        </div>

                        <h4>Địa chỉ liên lạc tại Việt Nam</h4>

                        <div className="form-group">
                            <label htmlFor="province" className="form-label">Tỉnh/Thành phố</label>
                            <input type="text" className="form-control" name='province' id="province" placeholder="Hồ Chí Minh" onChange={handleChange}/>
                            {errors.province && <p className="error">{errors.province}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="district" className="form-label">Quận/Huyện</label>
                            <input type="text" className="form-control" name='district' id="district" placeholder="Quận 10" onChange={handleChange}/>
                            {errors.district && <p className="error">{errors.district}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ward" className="form-label">Phường/Xã</label>
                            <input type="text" className="form-control" name='ward' id="ward" placeholder="Phường 2" onChange={handleChange}/>
                            {errors.ward && <p className="error">{errors.ward}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Số nhà, tổ dân phố/thôn/dội</label>
                            <input type="text" className="form-control" name='address' id="address" placeholder="Số 52 Lê Hồng Phong" onChange={handleChange}/>
                            {errors.address && <p className="error">{errors.address}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='phone' id="phone" placeholder="0901123456" onChange={handleChange}/>
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' id="email" placeholder="Viết hoa toàn bộ email: EXAMPLE@GMAIL.COM" onChange={handleChange}/>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <h4>Tròng vòng 14 ngày qua Anh/Chị có đến vùng quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h4>

                        <div className="form-group">
                            <div><input className="form-check-input" type="checkbox" name="symptom" value='fever'onChange={handleChange}/> Sốt</div>
                            <div><input className="form-check-input " type="checkbox" name="symptom" value='cough'onChange={handleChange}/> Ho</div>
                            <div><input className="form-check-input " type="checkbox" name="symptom" value='breathehard'onChange={handleChange}/> Khó thở</div>
                            <div><input className="form-check-input " type="checkbox" name="symptom" value='pneumonia'onChange={handleChange}/> Viêm phổi</div>
                            <div><input className="form-check-input " type="checkbox" name="symptom" value='throatpain'onChange={handleChange}/> Đau họng</div>
                            <div><input className="form-check-input " type="checkbox" name="symptom" value='tier'onChange={handleChange}/> Mệt mỏi</div>
                        </div>

                        <h4>Tròng vòng 14 ngày qua Anh/Chị có tiếp xúc với</h4>

                        <div className="form-group">
                            <div><input className="form-check-input" type="checkbox" name="exposure" value='case1'onChange={handleChange}/> Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</div>
                            <div><input className="form-check-input" type="checkbox" name="exposure" value='case2'onChange={handleChange}/> Người từ nước có bệnh COVID-19</div>
                            <div><input className="form-check-input" type="checkbox" name="exposure" value='case3'onChange={handleChange}/> Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-2" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {VietnamHealthDeclaration}