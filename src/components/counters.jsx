import React, { Component } from 'react';
import Counter from './counter';
import { Button } from 'evergreen-ui'; 

class Counters extends Component {
    constructor(props) {
        super(props);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props; 
        return (
            <div>
              <Button marginRight={32} appearance="primary" onClick={onReset}>
                Reset
              </Button>  
              {counters.map(counter => <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter}>
                  <h4>Counter #{counter.id}</h4>
              </Counter>)}
            </div>
        );
    }
}
 
export default Counters;