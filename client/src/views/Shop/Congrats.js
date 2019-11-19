import React from 'react';
import './Congrats.css';
import Shop from "./Shop";
import Navigation from "../../components/Navigation/Navigation";
//import bg from '../../assets/bgPic.JPG'

const Congrats = () => {
    return (

        <div className={'success'}>
            <Navigation />
            <h3 className={'Greeting'}>Thank You for your order! <br/>
                Your Therapeutic Scribble, Write, Doodle Tool Will Arrive Promptly!
            </h3>

        </div>
    );
};

export default Congrats;
