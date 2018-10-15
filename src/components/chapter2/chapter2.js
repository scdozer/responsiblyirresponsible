import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import Overdrive from 'react-overdrive';
import Navigation from '../main/navigation/navigation'
import './chapter2.css';

export default class Chapter2 extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
        <div className="content chapter2">
          <ReactFullpage
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <p>Section 1 (welcome to fullpage.js)</p>
                      <Overdrive id="yes">
                      <Link to = {`/`} >Home</Link>
                      </Overdrive>
                    </div>
                    <div className="section">
                      <p>Section 2</p>
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
        </div>

    )
  }


}
