import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-spring'
import Navigation from './navigation/navigation'

import './main.css'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="content">
          <h2>HOME PAGE</h2>
        </div>
        <Navigation />
      </div>
    )
  }

}
