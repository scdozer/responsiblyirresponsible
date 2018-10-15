import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './hero.css';

export default class Hero extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const { text, link, buttonText }  = this.props;
    return(
      <div className="section">
        <p> { text } </p>
        <Link to = {`/`} id="yes">Home</Link>
        <button onClick={() => link }> { buttonText }</button>
      </div>
    )
  }


}
