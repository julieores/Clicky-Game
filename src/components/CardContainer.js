import React from 'react';

import Card from './Cards';
import './CardContainer.css';

const travelScenes = [
    {

        name: "adventure",
        img: "./assets/images/adventure"
    },
    {

        name: "alps",
        img: "./assets/images/alps"
    },
    {

        name: "apartment",
        img: "./assets/images/apartment"
    },
    {

        name: "australia",
        img: "./assets/images/australia"
    },
    {
        name: "bay",
        img: './assets/images/bay'
    },
    {
        name: "beach",
        img: './assets/images/beach'
    },
    {
        name: "boat",
        img: "./assets/images/boat"
    },
    {
        name: "camera",
        img: "./assets/images/camera"
    },
    {
        name: "paris",
        img: "./assets/images/paris"
    },
    {
        name: "phonebooth",
        img: "./assets/images/phonebooth"
    },


]

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="cardContainer">
                {
                    travelScenes.map(e => {
                        return <Card name={e.name} img={e.jpg} />
                
                        
                    //    return <Card name={img src={require("./assets/images.alps.jpg") alt="" className="img-responsive" />
                    })
                
                }
            </div>
        )
    }
}


export default CardContainer;

// Testing Image Code
// var Foo = React.createClass({
//     render: function() {
//      const images = ['a','b','c']
//      const imagesElements = images.map( e => {
//       return (
//        <img src={`${e}.jpg`} />
//       )
//      });
  
//      return(
//       <div>
//        {imagesElements}
//       </div>
//      )
//    }
//   });
  
//   ReactDOM.render(
//    <Foo name="bar" />,
//    document.getElementById('container')
//   );

// On clicks for scoring functionality