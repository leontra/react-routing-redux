import React, { Component } from 'react';
import HelloText from './HelloText.component';

class Hello extends Component {
  render() {
    return (
        <div>
          <HelloText txt="Hola" />
          <HelloText txt="Halo" />
          <HelloText txt="Hulo" />
        </div>
    );
  }
}

export default Hello;