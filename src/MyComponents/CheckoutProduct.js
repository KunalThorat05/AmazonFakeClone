import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{ basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        //go to product.js line no.17 for deep understanding
        dispatch({
             //this dispatch is basically shoot to data-layer
            type : 'REMOVE_FROM_BASKET',
          
            id: id, //cz we gonnna use that to actuall go ahead and find the ID in the basket and remove that product once.
            //now go to reducer.js and add case as REMOVE_FROM_BASKET    
        })
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
                    {Array(rating)
                    .fill()
                    .map((_, i) => (

                        <p>⭐</p>
                    ))}
                </div>
                
                {!hideButton && (
                    
                 <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
            
        </div>


    )
}

export default CheckoutProduct
