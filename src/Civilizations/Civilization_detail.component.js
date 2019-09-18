import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presenter from './Civilizations.presenter';
import ScreenLog from './../ScreenLog/screen-log.component';
// import { spreadCivilizations } from './Civilization.actions';

// function mapDispatchToProps(dispatch) {
//   return {
//     addArticle: article => dispatch(addArticle(article))
//   };
// }

class CivilizationDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      civilization: {},
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
    })
  }

  OnGetList(list) {
    const element = list.find( (obj) => {
      if (!this.props.match) return false;
      const { params } = this.props.match;
      return params.name === obj.name;
    });
    if (element) {
      this.getDetail(element.id);
    }
  }

  OnError(err) {
    this.setState({
      error: true,
      logMsg: String(err.msg)
    });
  }

  getDetail(id) {
    this.presenter = new Presenter();
    this.presenter.getCivilizationDetail(id, this.OnError.bind(this))
    .then(this.OnGetDetail.bind(this))
    .catch(_error => {
      console.log("Get Cilization Detail Error");
    })
  }

  OnGetDetail(obj) {
    this.setState({
      civilization: obj,
      logMsg: "Success"
    });
  }

  render() {
    return (
      <div>
        <h1>Civilization Detail</h1>
        <div>
          <p className="civilization-name">{this.state.civilization.name}</p>
          <p className="civilization-expansion">{this.state.civilization.expansion}</p>
          <p className="civilization-army-type">{this.state.civilization.army_type}</p>
          <p className="civilization-team-bonus">{this.state.civilization.team_bonus}</p>
        </div>
      </div>
    );
  }
}

export default CivilizationDetail;