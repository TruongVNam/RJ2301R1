import { useState, useEffect } from "react";

export default function Timer(){
    const [time, setTime] = useState(10);

    useEffect(() =>{
        const counttime = setInterval(() => {
            const newTime = time - 1;
            setTime(newTime);
        }, 1000);
        if (time === 0 ){
            alert("Time's up");
            clearInterval(counttime)
        };
        return () => {clearInterval(counttime)}
    },[time]);

    return(
        <div style={{textAlign:'left', width: "50%", margin:"3rem auto"}}>
            <p><span style={{fontWeight:'bold'}}>Mục tiêu: </span>Hiểu và sử dụng được useEffect</p>
            <p><span style={{fontWeight:'bold'}}>Mô tả bài toán</span></p>
            <p style={{textAlign:'justify'}}>Xây dựng component Timer có tính năng tự động đếm ngược từ 10 về 0 (theo đơn vị giây).
            </p>
            <hr></hr>
            <h3 style={{textAlign: 'center'}}>Count down from <span style={{color: 'blue'}}>{time}</span></h3>
        </div>
    )
}