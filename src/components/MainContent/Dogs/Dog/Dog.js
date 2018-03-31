import React from 'react';
import classes from './Dog.css';
import {Link, Route} from 'react-router-dom';
import DogDetails from './DogDetails/DogDetails';
const dog = (props) => {
    return(
        <div className={classes.Dog}>
            <div>
                <img src={props.url} alt ={props.id}/>
            </div>
            <div>
                <h4>{'Breed: ' + props.breed}</h4>
                <h5>{'Temperament: ' + props.temperament}</h5>
                <p>
                    <Link to = '#'>... Read more ...</Link>
                </p>
                <Link to={'/shop/'+ props.id}>
                <button onClick={props.clicked}>Order</button>
                </Link>
            </div>
        </div>
    )
};
export default dog;