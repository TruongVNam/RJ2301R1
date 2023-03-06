
import useIncrement from "./hooks/useIncrement";

function App() {

  const [count1, increment1] = useIncrement (1);
  const [count2, increment2] = useIncrement (2);


  return (
    <div style={{width: "40rem", margin: '3rem auto'}}>
      <div>
        <p><span>Mục đích: </span>Hiểu và sử dụng được useState</p>
        <p><span>Mô tả: </span></p>
        <p>Xây dựng 2 bộ đếm:</p>
        <ul>
          <li>Counter 1 thực hiện tăng một đơn vị khi người dùng ấn “Add 1”.</li>
          <li>Counter 2 thực hiện tăng hai đơn vị khi người dùng ấn “Add 2”.</li>
        </ul>
      </div>
      <hr></hr>
      <div>
        <h3>Count: {count1}</h3>
        <button onClick={increment1}>Add 1</button>
        <h3>Count: {count2}</h3>
        <button onClick={increment2}>Add 2</button>
      </div>
    </div>
  );
}

export default App;
