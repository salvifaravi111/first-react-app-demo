import React, { Component } from 'react';
import { Button, TrashIcon } from 'evergreen-ui';

class Counter extends Component {
    /*state is a speical property in react component which
    is like an object that includes any data that the component needs*/
    /*state = {
        value: this.props.counter.value
        //tags: ["tag1", "tag2", "tag3"]
    };*/

    /*constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    /*renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag!"} another method of conditional rendering without if-else
                {this.renderTags()}
            </div>
        );
    }*/

    /*styles = {
        fontSize: 10,
        fontWeight: "bold"
    };*/

    //without using constructor for binding "this" to following function we can use arrow function on the method
    /*handleIncrement = (product) => {
        //console.log("xx", product);
        //console.log("Increment clicked");
        this.setState({value: this.state.value + 1});
    };*/

    /*render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                <button disabled={this.disableValue()} onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }*/

    //using evergreen ui
    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <Button marginRight={32} appearance="primary" intent="success" onClick={ () => this.props.onIncrement(this.props.counter) }>
                    Increment
                </Button>
                <Button marginRight={32} intent="danger" disabled={this.disableValue()} onClick={ () => this.props.onDecrement(this.props.counter) }>
                    Decrement
                </Button>
                <Button marginY={8} marginRight={32} iconBefore={TrashIcon} appearance="primary" intent="danger" onClick={ () => this.props.onDelete(this.props.counter.id) }>
                    Delete
                </Button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: value } = this.props.counter; //this is called object destructuring
        return value === 0 ? 'Zero' : value;
    }

    disableValue() {
        const { value: value } = this.props.counter; //this is called object destructuring
        return value === 0 ? true : false;
    }
}
 
export default Counter;