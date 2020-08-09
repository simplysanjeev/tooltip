import React from 'react';
import './App.css';
import Button from './Button';
import ToolTip from './ToolTip';
class App extends React.Component {
  constructor() {
    super();
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
    btn.addEventListener('mouseover', function (event) {
      console.log('mouseover');
      tooltip.classList.remove('off');
      tooltip.classList.add('on');
    });
    btn.addEventListener('mouseout', function (event) {
      console.log('mouseout');
      tooltip.classList.remove('on');
      tooltip.classList.add('off');
    });
  }
  render() {
    return (
      <div className="App">

        <Button id="btn1" showToolTip={this.showToolTipHandler} ref={(button) => { this.button = button }}>
          <ToolTip position={this.state.position.BOTTOM} text="Enter Text Here for Tool Tip" ref={(tooltip) => { this.tooltip = tooltip }} />
          ToolTip
        </Button>
      </div>
    );
  }
}

export default App;
