import React, { Component } from 'react';

import Card from './Cards';
import CardContainer from './CardContainer';


// const a
// const b

const shuffleArray = arr => (
    arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);


const travelScenes = [
    {

        name: 'adventure',
        img: 'img/250x180/adventure.jpg',
        clicked: false
    },
    {

        name: 'alps',
        img: 'img/250x180/alps.jpg',
        clicked: false
    },
    {

        name: 'apartment',
        img: 'img/250x180/apartment.jpg',
        clicked: false
    },
    {

        name: 'australia',
        img: 'img/250x180/australia.jpg',
        clicked: false
    },
    {
        name: 'bay',
        img: 'img/250x180/bay.jpg',
        clicked: false
    },
    {
        name: 'beach',
        img: 'img/250x180/beach.jpg',
        clicked: false
    },
    {
        name: 'boat',
        img: 'img/250x180/boat.jpg',
        clicked: false
    },
    {
        name: 'camera',
        img: 'img/250x180/camera.jpg',
        clicked: false
    },
    {
        name: 'paris',
        img: 'img/250x180/paris.jpg',
        clicked: false
    },
    {
        name: 'phonebooth',
        img: 'img/250x180/phonebooth.jpg',
        clicked: false
    },

]
export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                score: 0
            },
            characters: shuffleArray(travelScenes)
        };
    }

    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffleArray(this.state.characters.map((character, current) => {
                    return (current === index) ? { ...character, clicked: true } : character

                })),

                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1

                }
            });



        }

        else {
            this.setState({
                characters: shuffleArray(this.state.characters.map(character => { return { ...character, clicked: false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }

            });
        }
    }
}

