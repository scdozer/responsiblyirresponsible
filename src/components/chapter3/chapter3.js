import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from '../main/navigation/navigation'
import './chapter3.css';

export default class Chapter3 extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
        <div className="content chapter3">
          <ReactFullpage
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <p>Section 1 (welcome to fullpage.js)</p>
                      <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                    </div>
                    <div className="section">
                      <p>Section 2</p>
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          <Navigation />
        </div>

    )
  }


}
