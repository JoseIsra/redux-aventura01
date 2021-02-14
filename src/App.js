import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Mainpage, BasketPage } from './pages';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={ Mainpage } />
          <Route exact path="/basket" component={ BasketPage } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
