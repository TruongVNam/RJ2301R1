import React from 'react';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number1: '',
            number2: '',
        };
    }

    inputNumber1=(){
        const {number1} = this.state.number1;
        this.setState({number1});
    }

    add =()=>{

    };
    sub=()=>{

    };
    multi=()=>{};
    divi=()=>{};

    render(){
        return (
            <div>
                <input style={{type: 'text'}} onChange={}/>
                <input style={{type: 'text'}} onChange={}/>
                <p>Result:</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.multi}>x</button>
                <button onClick={this.divi}>/</button>
            </div>
        )
    }
}

export default Calculator;