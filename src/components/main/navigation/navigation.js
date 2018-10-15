import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive';
import { Parallax } from 'react-spring'

import './navigation.css'

export default class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="navigation">
        <ul>
           <li className="chapter1-nav">
             <Overdrive id="yes">
             <Link to = {`/chapter2`} className="no-decoration"> Chapter 1 </Link>
             </Overdrive>
           </li>
           <li className="chapter2-nav">
             <Link to = {`/chapter2`} className="no-decoration"> Chapter 2 </Link>
           </li>
           <li className="chapter3-nav">
             <Link to = {`/chapter3`} className="no-decoration"> Chapter 3 </Link>
           </li>
        </ul>
      </div>
    )
  }

}
