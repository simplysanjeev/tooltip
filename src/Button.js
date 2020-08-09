import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.children
        }
    }

    render() {
        return (
            <button type="button" id={this.state.id} ref={(button) => { this.button = button }}> {this.state.text} </button>
        );
    }
}

export default Button;