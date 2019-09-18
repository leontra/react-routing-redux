import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Presenter from './Civilizations.presenter';
import ScreenLog from './../ScreenLog/screen-log.component';
import ListItem from './../UIElements/list-item.element';
// import { withRouter } from 'react-router-dom';

class Civilizations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: false,
      logMsg: "Loading..."
    };

    this.getListCivilizations();
  }

  getListCivilizations() {
    this.presenter = new Presenter();
    this.presenter.getCivilizations(this.OnError.bind(this))
    .then(this.OnGetList.bind(this))
    .catch(_error => {
      console.log("Get Civilizations Error");
    });
  }

  OnError(err) {
    this.setState({
      error: true,
      logMsg: String(err.msg)
    });
  }

  OnGetList(list) {
      this.setState({
        list: list,
        logMsg: "Success"
      });
  }

  OnDetail(index) {
    this.props.history.push('/civilizations/' + this.state.list[index].name);
    // this.props.history.push('/units');
  }

  render() {
    const Elements = this.state.list.map(
      (value, index) => (<ListItem key={"civ_" + index + "_" + value.name} name={value.name} OnClick={this.OnDetail.bind(this, [index])} />)
    );

    return (
      <div>
        <h1>Civilizations</h1>
        <ScreenLog msg={this.state.logMsg} />
        <div className="list-container">
          {Elements}
        </div>
      </div>
    );
  }
}

Civilizations.propTypes = {
  list: PropTypes.array
}

export default Civilizations;