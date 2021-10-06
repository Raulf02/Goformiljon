import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

import Home from './pages/Home';
import Aktivites from './pages/Aktivites';
import Settings from './pages/Settings';
import Coins from './pages/Coins';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aktivite" component={Aktivites} />
          <Route path="/setting" component={Settings} />
          <Route path="/coin" component={Coins} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;