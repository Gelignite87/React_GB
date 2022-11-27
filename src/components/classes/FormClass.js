import React, { Component } from "react";

export class FormClass extends Component {
    state = {
        name: 'Biba',
        count: 0
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleClick = (event) => {
        // this.setState({ count: this.state.count + 1 })
        this.setState((prevState)=>({count: prevState.count + 1}))
    }

    render() {
        return (
            <>
                <h1>Classes Component</h1>
                <h2>Name: {this.state.name}</h2>
                <input type="text" onChange={this.handleChange} />
                <p>COUNT: {this.state.count}</p>
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}