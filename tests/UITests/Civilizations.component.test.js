import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Civilizations from '../../src/Civilizations/Civilizations.component';

import Presenter from '../../src/Civilizations/Civilizations.presenter';
jest.mock('../../src/Civilizations/Civilizations.presenter', () => {
    return jest.fn().mockImplementation(() => {
        return {getCivilizations: () => {
            return new Promise((resolve, reject) => {
                reject();
            });
        }};
    });
});

beforeEach( () => {
    Presenter.mockClear();
});

it('renders Civilizations without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Civilizations list={[]} />, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('matches the snapshot', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//         <Civilizations list={[]} />, 
//         div
//     );
    
//     const tree = renderer
//     .create(<Civilizations list={[]} />)
//     .toJSON();
//     expect(tree).toMatchSnapshot();

//     ReactDOM.unmountComponentAtNode(div);
// });

it('does the update for civilization detail', () => {    
    let history = [];
    const civilizationComponent = mount(<Civilizations list={[]} history={history} />);
    civilizationComponent.setState( { list: [{name: 'test'}] } );
    civilizationComponent.find('.list-item-test').simulate('click');
    expect(history.length).toBe(1);
    expect(history[0]).toBe("/civilizations/test");
});
