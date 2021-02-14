import { CallToActionSharp } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
        return {
          ...state,
          basket:[...state.basket, action.payload]
        }
    },
    removeItem:(state, action) =>{
      let basketFiltered = [...state.basket].filter(item => item.id !== action.payload);  
        return{
          ...state,
          basket:basketFiltered
        }
    }
  
  },
});

export const { addToBasket, removeItem  } = basketSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBasket = state => state.basket.basket;

export default basketSlice.reducer;
