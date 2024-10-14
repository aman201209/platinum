import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading : false,
    addtocard :[],
    isError: false,
}

export const productSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{
        addData:(state , action)=>{
            const find = state.addtocard.find(value=>value.id===action.payload.id)
             
            if(find){
                find.quantity_step_size++;
            }else{
                state.addtocard.push(action.payload)
            }
            
        },
        addQuantity: (state, action) => {
            const updatedCart = state.addtocard.map(item => {
                if (item.id === action.payload) {
                    const currentQuantity = parseInt(item.quantity_step_size, 10) || 0;
                    return { ...item, quantity_step_size: (currentQuantity + 1).toString() }; 
                }
                return item;
            });
        
            return { ...state, addtocard: updatedCart };
        },
        
        removeQuantity:(state , action)=>{
            const product = state.addtocard.find(value=>value.id===action.payload)
            if (product && product.quantity_step_size > 1) {
                product.quantity_step_size -= 1;
            } else if (product && product.quantity_step_size === 1) {
                state.productData = state.productData.filter(value => value.id !== action.payload);
            }
        },
        removeData: (state, action) => {
            state.addtocard = state.addtocard.filter(value => value.id !== action.payload);
        },
    }
})

export const { addData ,removeData,addQuantity , removeQuantity} = productSlice.actions;
export default productSlice.reducer;