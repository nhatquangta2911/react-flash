import React, { Component } from 'react';
import { Modal, Button, Parallax as ParallaxUI } from 'react-materialize';

export default class Parallax extends Component {

   render() {
      return (
         <div>
            <ParallaxUI image={ <img src="https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"/>} />
            {/* <div className="parallax-container">
                <p className="parallax-title">Parallax</p>
                <p className="parallax-cotnent">Are you fed up with all traditional method?</p>
            </div> */}
            <ParallaxUI image={ <img src="https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif"/>} />
         </div>
      )
   }
}
