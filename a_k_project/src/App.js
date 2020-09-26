import React from 'react';
import './App.css';
import Header from './Header';
import Game from './X_O/Game';
import Notfound from "./About/Notfound";
import Home from './About/Home'
import DateTime from './calendar/DateTime'
import {Switch , Route ,Redirect} from 'react-router-dom'
function App() {
  return (<>
      <Header />
      <div className="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/X_Ogame" component={Game} />
          <Route path="/DateOTime" component={DateTime} />
          <Route path="/not-found" component={Notfound} />
          <Redirect to="/not-found" />
          
        </Switch>

      </div>
      
    
    </>
  );
}

export default App;
