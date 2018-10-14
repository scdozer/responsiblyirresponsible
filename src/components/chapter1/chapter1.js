import React, { Component } from 'react';
import Navigation from '../main/navigation/navigation'
import './chapter1.css';

export default class Chapter1 extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="main-wrapper">
        <div className="content chapter1">
          <h2>Chapter 1</h2>
        </div>
        <Navigation />
      </div>
    )
  }


}
