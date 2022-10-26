import {createSlice} from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, totalAmount: 0, changed: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.totalAmount = action.payload.totalAmount;
            state.items = action.payload.items;
            state.changed = false;
        },
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.changed = true;
            if(!existingItem){
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title});
                state.totalQuantity++;
            }
            else
            {
              existingItem.quantity++;
              existingItem.totalPrice += newItem.price;
              state.totalQuantity++;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items = state.items.filter( item => item.id !== id);
                state.totalQuantity--;
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity--;
            }
        }
    }
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;