import {createSlice} from '@reduxjs/toolkit';

interface CardItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  sum: number;
}

interface CardState {
  items: CardItem[];
}

const initialState: CardState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const ExistItem = state.items.find(item => item.id === action.payload.id);
      if (ExistItem) {
        ExistItem.quantity += 1;
        ExistItem.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          sum: action.payload.price,
        });
      }
    },

    decreaseQuantityItem: (state, action) => {
      const ExistItem = state.items.find(item => item.id === action.payload.id);
      if (ExistItem && ExistItem.quantity != 1) {
        ExistItem.quantity -= 1;
        ExistItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },

    deleteProductFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  decreaseQuantityItem,
  deleteProductFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
