import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
    // state ==> state of the global store
    // dispatch ==> how we manipulate the data


    const [{ basket } , dispatch] = useStateValue();

    // console.log('this is the basket >>>>', basket); to check on console

    // function addToBasket
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            //this dispatch is basically shoot to data-layer
            type: 'ADD_TO_BASKET',

            item: {
                //take everthing from up props
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },

        });
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        
                        <p>⭐</p>
                    ))}
                </div>
            </div> 

            <img 
            src={image} 
            alt="" />

            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
