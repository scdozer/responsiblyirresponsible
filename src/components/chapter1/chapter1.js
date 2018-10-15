import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../main/hero/hero';
import Navigation from '../main/navigation/navigation'
import './chapter1.css';

export default class Chapter1 extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className="content chapter1">
          <ReactFullpage
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Hero
                      text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      link = {fullpageApi.moveSectionDown()}
                      buttonText = "Click Me"
                      />
                    <div className="section">
                      <p>Section 2</p>
                    </div>

                    <div className="section">
                    	<div className="slide"> Slide 1 </div>
                    	<div className="slide"> Slide 2 </div>
                    	<div className="slide"> Slide 3 </div>
                    	<div className="slide"> Slide 4 </div>
                    </div>

                  </ReactFullpage.Wrapper>
                );
              }}
            />
        </div>

    )
  }


}
