import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: {
    cardArray: [],
  },
  reducers: {
    addCard(state, action) {
      state.cardArray.push(action.payload);
    },
  },
});

export const { addCard } = CardSlice.actions;
export default CardSlice.reducer;
