import { useState, useEffect } from "react";

function Selector() {
    let [selected, setSelected] = useState('0');
    let [valueSelected, setValueSelected] = useState('');


    const choice = (e) =>{
        console.log('trước khi chọn:', selected);
        setSelected(e.target.value);
        console.log('sau khi chọn:', selected);
    }

    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("Angular");
                break;
            case "2":
                setValueSelected("Javascript");
                break;
            case "3":
                setValueSelected("Php");
                break;
            default:
        };
    },[selected]);

    return(
        <div style={{textAlign:'left', margin:'5rem'}}>
            <p><span style={{fontWeight:'bold'}}>Mục đích:</span> Hiểu và sử dụng được useEffect</p>
            <p><span style={{fontWeight:'bold'}}>Mô tả:</span> Sử dụng useEffect để để lắng nghe sự thay đổi của biến và cập nhật giao diện tương ứng. Xây dựng component EffectDemo. Sử dụng hooks useEffect</p>
            <select onChange={e=>{choice(e)}}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    )
}

export default Selector