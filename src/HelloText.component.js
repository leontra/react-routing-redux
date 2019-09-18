import React, { Component } from 'react';

export default class HelloText extends React.Component {
  render() {
    return <h3 className="hello-name">{this.props.txt}</h3>;
  } 
}
