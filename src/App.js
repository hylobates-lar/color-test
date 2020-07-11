import React from 'react';
import './App.css';
import Flower from './components/Flower';
import ColorPalette from './components/ColorPalette';

class App extends React.Component {
  state = {
    fillColors: Array(22).fill('white'),
    currentColor: 'blue'
  }

  changeColor = (color) => {
    this.setState({
      currentColor: color
    })
  }

  onFillColor = (i) => {
    let newFillColors = this.state.fillColors.slice(0)
    newFillColors[i] = this.state.currentColor

    this.setState({
      fillColors: newFillColors
    })
  }

  render() {
    return (
      <div className="App">
        <div className= "flower">
          < Flower fillColors={this.state.fillColors} onFill={this.onFillColor} />
        </div>
        < ColorPalette currentColor={this.state.currentColor} changeColor={this.changeColor}/>
      </div>
    );
  }
}

export default App;
