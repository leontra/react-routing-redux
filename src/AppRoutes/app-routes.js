import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../Home.component';
import Civilizations from './../Civilizations/Civilizations.component';
import CivilizationDetail from './../Civilizations/Civilization_detail.component';
import Units from './../Units/Units.component';
import Structures from './../Structures/Structures.component';
import Technologies from './../Technologies/Technologies.component';

const AppRoute = 
    (<Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/civilizations' component={Civilizations} />
        <Route path='/civilizations/Bizantines' component={CivilizationDetail} />
        <Route exact path='/units' component={Units} />
        <Route exact path='/structures' component={Structures} />
        <Route exact path='/technologies' component={Technologies} />
    </Router>
);

export default AppRoute;
