import {useState, useEffect} from 'react';
import Cars from '../data/Cars';
import Colors from '../data/Colors';



function CarSelected() {
    const [selected, setSelected] = useState({isChange: false, cars: 0, colors: 0});

    const handleChange =(e) => {
        console.log('e.target.name === "cars"', e.target.name === "cars");
        let {cars, colors} = {...selected};
        if (e.target.name === "cars") {
            cars = e.target.value;
        } else {
            colors = e.target.value;
        }

        setSelected({cars: Number(cars), colors: Number(colors)});

        console.log("e.target.name: ", e.target.name);
        console.log("e.target.value: ", e.target.value);
    };
    console.log("selected: ", selected);

    const {cars, colors} = selected;
    let carID = cars
    let colorID = colors;
    console.log("carID: ", carID);
    console.log("colorID: ", colorID);
    console.log("carName: ", Cars.cars[carID].name);
    console.log("colorID: ", Colors.colors[colorID].name);

    return(
        <div style={{textAlign:'left', width: "50%", margin:"3rem auto"}}>
            <p><span style={{fontWeight:'bold'}}>Mục tiêu</span></p>
            <ul>
                <li>Tạo được dự án ReactJS</li>
                <li>Thao tác với state thông qua State Hook</li>
            </ul>
            <p><span style={{fontWeight:'bold'}}>Mô tả bài toán</span></p>
            <p style={{textAlign:'justify'}}>
            Viết chương trình cho phép người dùng chọn một chiếc xe và màu sắc tương ứng.
            Khi khởi chạy, chương trình mặc định chọn xe và màu theo phần tử đầu tiên trong danh sách.
            Người dùng ấn combobox car để chọn xe mong muốn
            Người dùng ấn combobox color để chọn màu mong muốn
            Kết quả sẽ hiển thị ở bên dưới với nội dung: You selected a color - car
            </p>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}><h3>Select Your Car</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label htmlFor="cars">Choose a car: </label></td>
                        <td>            
                            <select name="cars" id="cars" onChange={(e)=>handleChange(e)}>
                                {Cars.cars.map((car, i)=>(
                                    <option key={car.id} value={car.id}>{car.name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="colors">Choose a color: </label></td>
                        <td>
                            <select name="colors" id="colors" onChange={(e)=>handleChange(e)}>
                                {Colors.colors.map((color, i)=>(
                                    <option key={color.id} value={color.id}>{color.name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    {<tr>
                        <td colSpan={2}>You selected a {Colors.colors[colorID].name} - {Cars.cars[carID].name}</td>
                    </tr>}
                </tbody>
            </table>
            
            

        </div>
    )
}

export default CarSelected