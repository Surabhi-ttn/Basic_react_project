import React from 'react';

import propTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredient = props => {
    
        let ingredient = null;

        switch(props.type) {
            case ('bread-bottom') :
                ingredient = <div className={classes.BreadBottom}></div>
                break;

            case ('bread-top') :
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            
            case ('tikki') :
                ingredient = <div className={classes.Tikki}></div>
                break;
                
            case ('salad') :
                ingredient = <div className={classes.Salad}></div>
                break;

            case ('cheese') :
                ingredient = <div className={classes.Cheese}></div>
                break;

            case ('mayo') :
                ingredient = <div className={classes.Mayo}></div>
                break;

            default :
                ingredient = null;
        }
        return ingredient;
    };
    


burgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default burgerIngredient;