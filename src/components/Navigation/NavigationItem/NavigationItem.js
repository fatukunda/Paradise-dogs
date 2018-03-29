import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './NavigationItem.css';
const navigationItem = (props) => {
    return (
            <li className={classes.NavigationItem}>
                <a href={props.link}>{props.children}</a>
            </li>

    )
};
export default navigationItem;