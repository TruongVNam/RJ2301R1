import React from 'react';

class ButtonCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number:0
    };
  }
  
  increase = () => {
    const myState = {...this.state};
    this.setState({
        number: myState.number + 1
      })
  }; 

  decrease = () => {
    const myState = {...this.state};
    this.setState({
      number: myState.number-1
    })
  }; 
  
  render(){
    const {number} = this.state;
    return (
      <div style={{textAlign: 'center', padding: 30}}>
        <button onClick={this.decrease}>Decrease</button>
        <span style={{padding: 10}}>{number}</span>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default ButtonCounter;
