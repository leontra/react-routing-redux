import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import AppNavigation from './AppNavigation/app-navigation';

import Home from './Home.component';
import Civilizations from './Civilizations/Civilizations.component';
import CivilizationDetail from './Civilizations/Civilization_detail.component';
import Units from './Units/Units.component';
import Structures from './Structures/Structures.component';
import Technologies from './Technologies/Technologies.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavigation link={Link} />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/civilizations' component={Civilizations} />
              <Route path='/civilizations/:name' component={CivilizationDetail} />
              <Route exact path='/units' component={Units} />
              <Route exact path='/structures' component={Structures} />
              <Route exact path='/technologies' component={Technologies} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
