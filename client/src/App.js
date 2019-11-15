import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import  Shop  from './views/Shop/Shop'
import Media   from "./components/Media/Media"
import NotFound from "./views/NotFound"
import Success from './views/Shop/Congrats'
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'

import './App.css'


const App = () => {
  return (
      <Router>
        <div className={'App'}>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path='/Shop' component={Shop} />
            <Route exact path='/Shop/Success' component={Success}/>
            <Route exact path="/Media" component={Media} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
