import React from 'react';
import ReactDOM from 'react-dom';
import Units from '../../src/Units/Units.component';

it('renders Unidades without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Units />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
