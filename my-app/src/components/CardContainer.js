import React from 'react';

import Card from './Cards';
import './CardContainer.css';

const travelScenes = [
    {
        name: "beach",
        img: './assets/images/adventure'
    },
    {
        name: "jungle",
        img : './assets/images/jungle'
    }
]

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="cardContainer">
              {
                  travelScenes.map(e =>{
                      return <Card name={e.name} img={e.img}/>
                  })
              }
            </div>
        )
    }
}


export default CardContainer;