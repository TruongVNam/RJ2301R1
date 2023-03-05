import './App.css';

import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isExpand: false
    };
  }
  
  handle=()=>{
    const {isExpand} = this.state;
    this.setState({isExpand: !isExpand});
  };
  
  render() {
    const {isExpand} = this.state;
    return (
      <div style={{textAlign:'center'}}>
        <h1 style={{backgroundColor: 'blue', color: 'white'}}>Conditional Rendering</h1>
        {isExpand && <button onClick={this.handle}>Xem giới thiệu</button>}
        {!isExpand &&
          <>
          <button onClick={this.handle}>Đóng giới thiệu</button>
          <p style={{fontWeight:'bold'}}>Giới thiệu</p>
          <p style={{textAlign:'justify'}}>Trong ReactJS, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props, ...mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
          </>    
        }

      </div>
    )
  }
}

export default App;
