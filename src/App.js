import React from 'react';
import './App.css';
import Button from './Button';
import ToolTip from './ToolTip';
class App extends React.Component {
  constructor() {
    super();
    // creating State to set positons as ENUM
    this.state = {
      position: {
        TOP: "top",
        BOTTOM: "bottom",
        LEFT: "left",
        RIGHT: "right"
      }
    }
  }
  componentDidMount() {
    const btn = this.button.button;
    const tooltip = this.tooltip.tooltip;
    // Event Listener to Button When mouse is over the button
    btn.addEventListener('mouseover', function (event) {
      console.log('mouseover');
      tooltip.classList.remove('off');
      tooltip.classList.add('on');
    });
    // Event Listener to Button when mouse is out of the button
    btn.addEventListener('mouseout', function (event) {
      console.log('mouseout');
      tooltip.classList.remove('on');
      tooltip.classList.add('off');
    });
  }
  render() {
    // Rendering the App
    return (
      <div className="App">
        {/* Adding Button */}
        <Button id="btn1" ref={(button) => { this.button = button }}>
          {/* Adding tooltip position and text is passed as props */}
          <ToolTip position={this.state.position.RIGHT} text="Enter Text Here for Tool Tip" ref={(tooltip) => { this.tooltip = tooltip }} />
          ToolTip
        </Button>
      </div>
    );
  }
}

export default App;
