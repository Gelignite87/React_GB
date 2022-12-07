import { Component } from "react";

export class ChildClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Biba',
            count: 0
        }
    }

    componentDidMount() {
        console.log('ChildClass did mount');
    }

    componentDidUpdate() {
        console.log('ChildClass did update');
    }

    componentWillUnmount() {
        console.log('ChildClass will unmount');
    }

    render() {
        return (
            <>
                <h2>Child Component</h2>
                <p>{this.state.count}</p>
                <button>Click</button>
            </>
        )
    }
}