import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };  

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    {title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                    </Box>
                    {/*
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>★</p>
                        ))
                        */}
                </div>
            </div>

            <img src={image} alt="" /> 
            <button onClick={addToBasket}>Add To Basket</button>
                             
        </div>
    );
}

export default Product
