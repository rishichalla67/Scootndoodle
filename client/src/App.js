import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import Shop from './views/Shop/Shop'
import NotFound from "./views/NotFound"
import './App.css'

const App = () => {
    return (
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path='/Shop' component={Shop} />
            <Route path="/Shop/Success" component={Shop}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

export default App;
