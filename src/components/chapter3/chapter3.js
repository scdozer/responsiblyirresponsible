import React, { Component } from 'react';
import Navigation from '../main/navigation/navigation';
import './chapter3.css';

export default class Chapter3 extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="main-wrapper">
        <div className="content chapter3">
          <h2>Chapter 3</h2>
        </div>
        <Navigation />
      </div>
    )
  }


}
