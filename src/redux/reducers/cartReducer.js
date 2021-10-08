import { ADD_TO_CART } from "../constants/productConstant";

export const cartReducer = (state = { cartItem: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const item = action.payload
            const isExist = state.cartItem.find(x => x.id === item.id)
            if (isExist) {
                return { ...state, cartItem: state.cartItem.map(v => v.id === isExist.id ? item : v) }
            } else {

                return { ...state, cartItem: [...state.cartItem, item] }
            }
        default:
            return state;
    }
}