import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        // Storing Props in state variable
        this.state = {
            id: props.id,
            text: props.children
        }
    }

    render() {
        // Return Button element
        return (
            // Sending reference to app component to add event listener
            <button type="button" id={this.state.id} ref={(button) => { this.button = button }}> {this.state.text} </button>
        );
    }
}

export default Button;