
import './App.css';
import MyClockHook from "./components/MyClockHook";
import MyClockCustomHook from "./components/MyClockCustomHook";

function App() {
  return (
    <>
      <div style={{textAlign:'left', width: "50%", margin:"3rem auto"}}>
        <p><span style={{fontWeight:'bold'}}>Mục tiêu: </span>Tự xây dựng được hooks</p>
        <p><span style={{fontWeight:'bold'}}>Mô tả bài toán: </span>Xây dựng clock hook lấy về thời gian hiện tại.</p>
        <hr></hr>
        <MyClockHook/>
        <MyClockCustomHook/>
      </div>
    </>
  );
}

export default App;
