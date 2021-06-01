import React, { Component } from 'react';

class Counter extends Component {
    /*state is a speical property in react component which
    is like an object that includes any data that the component needs*/
    state = {
        count: 0
    };

    /*styles = {
        fontSize: 10,
        fontWeight: "bold"
    };*/

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state; //this is called object destructuring
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;