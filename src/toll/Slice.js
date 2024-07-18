import { createSlice } from "@reduxjs/toolkit" 
const Slice = createSlice ({
 name : 'cart',
 initialState :{
    cart : [], 
    total: 0,
    orderTotal: 0,
  
 },
 reducers : {
   addto : (state,action)=>{
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
       itemInCart.quantity += 1;
     } else {
       state.cart.push({ ...action.payload, quantity: 1 });
     }

     state.total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
     state.orderTotal = state.total; // Adjust if you have additional fees, etc.

             
          },
       //addto : (state,action) =>{
           //     state.cart.push(action.payload)
            //  },
         removeto : (state,action) =>{
             state.cart=state.cart.filter(x=>x.id !== action.payload.id)



                   // Recalculate totals
      state.total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      state.orderTotal = state.total; // Adjust if you have additional fees, etc.

        }
    
 }
 
 })  
export default Slice.reducer;
export const {addto,removeto} = Slice.actions;
 