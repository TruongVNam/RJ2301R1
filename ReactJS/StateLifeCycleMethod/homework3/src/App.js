import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ item: event.target.value });
  }

  handleAddItem = () => {

    const { list, item } = { ...this.state };
    if (list.indexOf(item) === -1) {
      list.push(item);
      this.setState({
        list,
        item: ""
      });
    }
  }

  render() {
    const {list} = this.state;
    return (
      <div style={{textAlign: 'center', padding: 10}}>
        <input type="textarea" value={this.state.item} onChange={(e) => this.handleChange(e)} />
        <button onClick={this.handleAddItem}>Add</button>
        {list.map(item =>(
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
