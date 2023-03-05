import {useState} from 'react';

function Counter(){

    let [count, setCount] = useState(5);

    const handleClick = () => {
        setCount(count+1)
    };

    return(
        <div style={{textAlign:'center', margin:'5rem'}}>
            <div>
                <h3>Mục đích</h3>
                <p>Hiểu và sử dụng được useState</p>
                <h3>Mô tả</h3>
                <p>Xây dựng component Counter. Sử dụng hooks useState để tăng giá trị của biến count sau mỗi lần nhấn button.</p>
            </div>
            <div style={{margin:'3rem'}}>
                <h4>Giá trị {count}</h4>
                <div style={{margin:'1rem'}}>
                    <button onClick={handleClick}>Tăng</button>
                </div>
            </div>
        </div>
    )
}

export default Counter