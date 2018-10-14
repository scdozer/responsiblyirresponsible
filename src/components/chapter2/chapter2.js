import React, { Component } from 'react';
import Navigation from '../main/navigation/navigation'
import './chapter2.css';

export default class Chapter2 extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="main-wrapper">
        <div className="content chapter2">
          <h2>Chapter 2</h2>
        </div>
        <Navigation />
      </div>
    )
  }


}
