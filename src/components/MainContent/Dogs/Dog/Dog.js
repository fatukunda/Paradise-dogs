import React from 'react';
import classes from './Dog.css';
const dog = (props) => {
    return(
        <div className={classes.Dog}>
            <div>
                <img src={props.url} alt ={props.id}/>
            </div>
            <div>
                <h4>{'Breed: ' + props.breed}</h4>
                <h5>{'Temperament: ' + props.temperament}</h5>
                <button>Order</button>
            </div>
        </div>
    )
};
export default dog;