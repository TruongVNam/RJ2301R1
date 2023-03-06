import './Clock.css';
import {useState} from 'react';


function MyClockHook(){
    const [time, setTime] = useState('');
    const [ampm, setAmpm] = useState('');

    const updateTime=()=>{
        let dateInfo = new Date();
        let hour=0;
        // let hour = dateInfo.getHours()
        if (dateInfo.getHours()===0) {
            hour=12;
        } else if (dateInfo.getHours()>12) {
            hour=dateInfo.getHours()-12;
        } else {
            hour=dateInfo.getHours();
        }

        let minutes = dateInfo.getMinutes()<10
            ? parseInt('0' + dateInfo.getMinutes())
            : dateInfo.getMinutes();

        let seconds = dateInfo.getSeconds()<10
            ? ('0' + dateInfo.getSeconds())
            : dateInfo.getSeconds();

        let ampm = dateInfo.getHours()>=12? "PM" : "AM";

        console.log(dateInfo);
        console.log(dateInfo.getHours());
        console.log(`${hour}:${minutes}:${seconds}`)
        console.log(ampm)
        setAmpm(ampm)
        setTime(`${hour}:${minutes}:${seconds}`);
    }

    setInterval(() => {updateTime()}, 1000);

    return(
        <>
            <h3 style={{textAlign:'left'}}>Dùng React Hook</h3>
            <div style={{textAlign:'center', background: 'blue', color: 'white', border: '1px solid blue', borderRadius:'5px', width:"20%", height:'auto'}}>
                <p><span >{time}</span><span> {ampm}</span></p>
            </div>
        </>
    )
}


export default MyClockHook