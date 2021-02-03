import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="read-only" value={rating} precision={0.5} readOnly />
                        </Box>
                    }
                </div>
                {!hideButton && (
                    <button onClick={ removeFromBasket }>Remove from basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
