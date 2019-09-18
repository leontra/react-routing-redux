import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import "core-js/stable";
import "regenerator-runtime/runtime";

import CivilizationDetail from '../../src/Civilizations/Civilization_detail.component';
import Presenter from '../../src/Civilizations/Civilizations.presenter';


jest.mock('../../src/Civilizations/Civilizations.presenter', () => {

  return jest.fn().mockImplementation(() => {
    return {
      getCivilizations: () => {
        return new Promise(resolve => {
          resolve([{name: 'test', id: 1}]);
        }); 
        },
        getCivilizationDetail: (id, onError) => {
          return new Promise((resolve, reject) => {
            if (id) {
              resolve({
                name: 'test',
                id: id
              });
            } else {
              onError();
              return [];
            }
          });
        }
      };
  });
});

beforeEach( () => {
  Presenter.mockClear();
});

it('renders Civilizations without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CivilizationDetail />, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});

it('gets the civilization detail', (done) => {
    const civilizationDetail = shallow(<CivilizationDetail match={{ params: {
      name: 'test'
    }  }} />);
    civilizationDetail.instance().getListCivilizations();
    setTimeout(() => {
      expect(civilizationDetail.state()['civilization'].name).toBe("test");
      expect(civilizationDetail.state()['civilization'].id).toBe(1);
      expect(civilizationDetail.state()['error']).toBe(false);
      done();
    }, 500);
});

// it('gets the civilization detail with error', (done) => {
//     const civilizationDetail = shallow(<CivilizationDetail match={{ params: {name: 'testi'}  }} />);
//     civilizationDetail.instance().getListCivilizations();
//     setTimeout(() => {
//       expect(civilizationDetail.state()['error']).toBe(true);
//       done();
//     }, 500);
// });

it('display the civilization detail name', () => {
    const civilizationDetail = mount(<CivilizationDetail />);
    civilizationDetail.setState({
      civilization: {
        name: 'test',
        expansion: 'expansion', 
        army_type: 'army type', 
        team_bonus: 'team bonus', 
    } });
    const elementName = civilizationDetail.find('.civilization-name');
    expect(elementName.text()).toBe("test");

    const elementExpansion = civilizationDetail.find('.civilization-expansion');
    expect(elementExpansion.text()).toBe("expansion");

    const elementArmy = civilizationDetail.find('.civilization-army-type');
    expect(elementArmy.text()).toBe("army type");

    const elementTeamBonus = civilizationDetail.find('.civilization-team-bonus');
    expect(elementTeamBonus.text()).toBe("team bonus");
});
