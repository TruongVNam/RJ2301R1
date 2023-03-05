import AddComponent from "./AddComponent";
import Mcompo from "./Mycomponent";
import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Welcome name="Admin"></Welcome>
                <AddComponent firstNumber={1} secondNumber={2}></AddComponent>
            </div>
        )
    }
}

export default App;