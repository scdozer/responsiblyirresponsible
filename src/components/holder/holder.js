import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import Navigation from '../main/navigation/navigation'
import './main.css'


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>


export default class Chapter1 extends Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
        <div className="main-wrapper">

      <Parallax ref={ref => (this.parallax = ref)} pages={3}>


                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

                <Parallax.Layer offset={1.5} speed={-2} style={{opacity: .5}}>
                <p style={{display: 'block', width: '80%', marginLeft: '20%', color: '#fff', fontSize: '150px'}}>this is the band toe. mathematical music</p>
                </Parallax.Layer>

                <Parallax.Layer offset={1.3} speed={-1} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                    <p style={{display: 'block', width: '20%', marginLeft: '15%', color: '#fff', fontSize: '50px'}}>Hello Hello Hello Hello</p>
                </Parallax.Layer>


                <Parallax.Layer offset={1} speed={-0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '30%' }} />
                </Parallax.Layer>



                <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')}
                    style={{
                        display: 'block',
                        width: '20%',
                        marginLeft: '55%'
                    }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                    <p style={{display: 'block', width: '20%', marginLeft: '15%', color: '#fff', fontSize: '50px'}}>Hello Hello Hello Hello</p>
                </Parallax.Layer>

                <Parallax.Layer offset={3} speed={0.2} style={{ opacity: .5 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </Parallax.Layer>



                <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                    <p style={{display: 'block', width: '20%', marginLeft: '15%', color: '#fff', fontSize: '50px'}}>Hello Hello Hello Hello</p>
                </Parallax.Layer>

                <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <p style={{display: 'block', width: '20%', marginLeft: '15%', color: '#fff', fontSize: '50px'}}>Hello Hello Hello Hello</p>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </Parallax.Layer>


    </Parallax>

    <Navigation />

    </div>
    )
  }
}
