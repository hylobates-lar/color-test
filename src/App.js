import React from 'react';
import './App.css';
import Flower from './components/Flower';

class App extends React.Component {
  state = {
    fillColors: Array(22).fill('white'),
    currentColor: 'blue'
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
        <Flower fillColors={this.state.fillColors} onFill={this.onFillColor} />
      </div>
    );
  }
}

export default App;
