import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],

//       cart: [
//     {
//      pizzaId:12,
//      name:'Mediterranean',
//      quantity: 2,
//      unitPrice:16,
//      totlaPrice:32
//     },
// ]
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
    addItem(state, action)  {
        // payload = new item
     state.cart.push(action.payload);
    },
    deleteItem(state, action)  {
        // payload = pizzaId
        state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action)  {
        // payload = pizzaId
        const item = state.cart.find((item) => item.pizzaId === action.payload);

        item.quantity++;
        item.totlaPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action)  { 
        // payload = pizzaId
        const item = state.cart.find((item) => item.pizzaId === action.payload);

        item.quantity--;
        item.totlaPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
},
    clearItems(state)  {
        state.cart = [];
    },
   },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearItems
}   = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCartQuantitiy = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity , 0);

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totlaPrice , 0);
export const getCurrentQuantityById = (id) => (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0 ;
