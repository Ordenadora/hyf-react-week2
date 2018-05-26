import React from 'react';
import './Content.css';
import logo from './logo.svg';
import photo1 from './Photos/jewelrymake.jpg';
import photo2 from './Photos/Crystals.jpg';

function Content() {
    return (
        <p className="Content-intro">
            <img src={photo1} />
            <img src={photo2} />
        I am trying to turn my hobby into business as a jewelry maker.
        I work with silver, sterling silver, stones and crystals.
        </p>
    );
}

export default Content;