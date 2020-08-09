import React from 'react';

class ToolTip extends React.Component {
    render() {
        const { position, text } = this.props;
        return (
            <div id="tooltip" className={"off " + position} ref={(tooltip) => { this.tooltip = tooltip }} >
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">{text}</div>
            </div >
        );
    }
}

export default ToolTip;