import './Clock.css';
import useClock from '../hooks/useClock';


function MyClockHook(){
    const [time, ampm] = useClock();
    return(
        <>
            <h3>Dùng React Custom Hook</h3>
            <div style={{textAlign:'center', background: 'blue', color: 'white', border: '1px solid blue', borderRadius:'5px', width:"20%", height:'auto'}}>
                <p><span >{time}</span><span> {ampm}</span></p>
            </div>
        </>
    )
}



export default MyClockHook