import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCockTails = createAsyncThunk(
  "cocktails/fetchCockTails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);

// for single user details
export const fetchSingleCockTails = createAsyncThunk(
  "cocktails/fetchSingleCockTails",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

// for seaarching

export const fetchSearchCockTails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ searchText }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);

const cockTailsSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  },
  extraReducers: {
    [fetchCockTails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCockTails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCockTails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCockTails.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleCockTails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCockTails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCockTails.pending]: (state) => {
      state.loading = true;
    },
    [fetchSearchCockTails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCockTails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cockTailsSlice.reducer;
