import React, { Component } from 'react';

class Counter extends Component {
    /*state is a speical property in react component which
    is like an object that includes any data that the component needs*/
    state = {
        value: this.props.value
        //tags: ["tag1", "tag2", "tag3"]
    };

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
    handleIncrement = (product) => {
        console.log(product);
        //console.log("Increment clicked");
        this.setState({value: this.state.value + 1});
    };

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ (product) => this.handleIncrement(product) } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: value } = this.state; //this is called object destructuring
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;