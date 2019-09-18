import React, { Component } from 'react';

export default class AppNavigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><this.props.link to={'/'} className="nav-link"> Home </this.props.link></li>
                    <li><this.props.link to={'/civilizations'} className="nav-link">Civilizations</this.props.link></li>
                    <li><this.props.link to={'/units'} className="nav-link">Units</this.props.link></li>
                    <li><this.props.link to={'/structures'} className="nav-link">Structures</this.props.link></li>
                    <li><this.props.link to={'/technologies'} className="nav-link">Technologies</this.props.link></li>
                </ul>
            </nav>
        );
    }
}
