const students = [
    { Id: 1, Name: 'Nguyễn Văn Ba', Age: 30, Address: 'Hà Nội' },
    { Id: 2, Name: 'Trần Thị Anh', Age: 25, Address: 'Hà Tĩnh' },
    { Id: 3, Name: 'Lê Văn Cường', Age: 28, Address: 'Thanh Hóa' },
    { Id: 4, Name: 'Phạm Thị Dung', Age: 31, Address: 'Hải Dương' },
    { Id: 5, Name: 'Nguyễn Thành Đạt', Age: 22, Address: 'Quảng Ninh' },
    { Id: 6, Name: 'Trần Văn E', Age: 36, Address: 'Bắc Ninh' },
    { Id: 7, Name: 'Nguyễn Thị F', Age: 42, Address: 'Nam Định' },
    { Id: 8, Name: 'Vũ Văn Gia', Age: 27, Address: 'Thái Bình' },
    { Id: 9, Name: 'Đinh Thị Hà', Age: 29, Address: 'Hải Phòng' },
    { Id: 10, Name: 'Lê Văn I', Age: 26, Address: 'Ninh Bình' },
    { Id: 11, Name: 'Phạm Thị K', Age: 35, Address: 'Thừa Thiên Huế' },
    { Id: 12, Name: 'Trần Văn L', Age: 23, Address: 'Quảng Nam' },
    { Id: 13, Name: 'Nguyễn Thị M', Age: 38, Address: 'Đà Nẵng' },
    { Id: 14, Name: 'Võ Văn N', Age: 33, Address: 'Quảng Ngãi' },
    { Id: 15, Name: 'Nguyễn Thị O', Age: 20, Address: 'Bình Định' },
    { Id: 16, Name: 'Trần Văn P', Age: 37, Address: 'Khánh Hòa' },
    { Id: 17, Name: 'Nguyễn Thị Q', Age: 24, Address: 'Nha Trang' },
    { Id: 18, Name: 'Lê Văn R', Age: 39, Address: 'Gia Lai' },
    { Id: 19, Name: 'Phạm Thị S', Age: 32, Address: 'Đắk Lắk' },
    { Id: 20, Name: 'Trần Văn T', Age: 21, Address: 'TP. Hồ Chí Minh' }
  ];


function StudentInfo() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student=>(
                    <tr key={student.Id}>
                        <td>{student.Id}</td>
                        <td>{student.Name}</td>
                        <td>{student.Age}</td>
                        <td>{student.Address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentInfo