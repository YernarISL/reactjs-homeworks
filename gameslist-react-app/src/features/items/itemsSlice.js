import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (query, thunkAPI) => {
    try {
      const res = await fetch(
        `/freetogame/api/games${query ? `?q=${query}` : ""}`
      );
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchItemById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`/freetogame/api/game?id=${id}`);
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  list: [],
  filteredList: [],
  selectedItem: null,
  loadingList: false,
  loadingItem: false,
  errorList: null,
  errorItem: null,
  query: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload.toLowerCase();
      state.filteredList = state.list.filter((game) =>
        game.title.toLowerCase().includes(state.query)
      );
    },
    clearSelected(state) {
      state.selectedItem = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload;
        const q = state.query.toLowerCase();
        state.filteredList = state.list.filter((game) =>
          game.title.toLowerCase().includes(q)
        );
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      .addCase(fetchItemById.pending, (state) => {
        state.loadingItem = true;
        state.errorItem = null;
        state.selectedItem = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItem = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItem = false;
        state.errorItem = action.payload;
      });
  },
});

export const { setQuery, clearSelected } = itemsSlice.actions;
export default itemsSlice.reducer;
