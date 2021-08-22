import './App.css';

import React, {Component} from 'react';

class App extends Component {

    state = {
        items: []
    }
    currInputItem = "";
    inputRef;


    handleSubmit = (event) => {
        this.state.items.push(this.currInputItem);
        this.setState({items: this.state.items})
        this.currInputItem = "";
        this.inputRef.value = "";
        event.preventDefault();
    }

    handleItemChange = (event) => {
        this.currInputItem = event.target.value;
    }

    render() {
        return (
            <div className="App">

                    {
                        this.state.items.map((item, index) => <p key={index}>{item}</p>)
                    }

                <form className={"flexRow"} onSubmit={this.handleSubmit}>
                    <p style={{padding: 20}}>Input an Item</p>
                    <input ref={(ref) => this.inputRef = ref}
                           placeholder={"Type something"}
                           onChange={this.handleItemChange} />
                </form>
            </div>
        );
    }
}

export default App;
