export const initialState = {
//[] we gonna start with the empty basket
    basket: [],
    user: null //when the app loads by-default its gonna be null
};


//Selector

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

console.log();

const reducer = (state, action) => { //action take whether you want to add or remove
    console.log(action); // to check debug if you get it go to product.js and destructure const state into {basket} 
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {                //reducer listens up 
            ...state,  // returning whatever the state it originall was
            basket: [...state.basket, action.item] // but we gonna change  the basket : basket should now be [whatever the basket currently was , whatever we actuall decided to add]
        };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket:[]
            }

        case "REMOVE_FROM_BASKET":
            /*
            return { // it will work but it will delete all the same id item you have added in the cart. means 3 same books delete one it will delete them all and  we dont want that so here is way
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
        
            }
            */ 

            /*here we get the state get basket and we use find index function */
            /* index function - it going thru all of the basket item and sas does an of the basket item ===  action.id  */
            /*this only finds first and returns it to you */
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in
                    basket!`
                )
            }

            return{
                /*return the current state and also the basket is the new basket which we is modified */
                ...state,
                basket:newBasket
            }

        case "SET_USER":
        return{
            ...state,
           user: action.user
        }

        default:
            return state;
        }
    }
     
    export default reducer;