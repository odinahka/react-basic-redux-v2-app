import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending...',
            message: 'sending cart data'
        }));
        const sendReqest = async () =>{
              const response = await  fetch(
            "https://react-http-post-35139-default-rtdb.firebaseio.com/cart.json",
            { 
              method: "PUT",
              body: JSON.stringify({items: cartData.items, totalQuantity: cartData.totalQuantity, totalAmount: cartData.totalAmount})  
            }
          );
      
          if(!response.ok){
            throw new Error('Sending cart data failed');
          }  
     //     const responseData = await response.json();
        };
        try{
        await sendReqest();
              dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success',
            message: 'done sending cart data'
        }))
        }
        catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'sending cart data failed'
            }))
        }   
    }
    };
    

export const fetchCartData = () => {
    return async (dispatch) => {
     const fetchData = async () => {
         const response = await fetch("https://react-http-post-35139-default-rtdb.firebaseio.com/cart.json");
        if(!response.ok){
            throw new Error('Could not fetch cart data');
        }
         const data = await response.json();
         return data;
     }
     try{
        const data = await fetchData();
        dispatch(cartActions.replaceCart({
            items: data.items || [],
            totalAmount: data.totalAmount,
            totalQuantity: data.totalQuantity
        }));
     }
     catch{
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message: 'sending cart data failed'
        }))
     }
    }
}