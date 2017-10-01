import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SudokuSolver from './containers/SudokuSolver/SudokuSolver';
import Home from './containers/Home/Home';
import SoulSacrificeCastingCall from './containers/SoulSacrificeCastingCall/SoulSacrificeCastingCall';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/sudoku" component={SudokuSolver}/>
          <Route path="/soulsacrifice" component={SoulSacrificeCastingCall}/>
        </div>
      </Router>
    );
  }
}

export default App;
