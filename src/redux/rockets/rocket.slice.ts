import { IQuery } from "./../../types/data";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RocketState, RocketResponse } from "../../types/data";

const initialState: RocketState = {
  results: [],
  hasNextPage: false,
  hasPrevPage: false,
  limit: 10,
  nextPage: null,
  offset: 0,
  page: 1,
  pagingCounter: 1,
  prevPage: null,
  totalDocs: 4,
  totalPages: 1,
  query: {},
};

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    setRockets: (state, action: PayloadAction<RocketResponse>) => {
      console.log(action.payload);
      const {
        docs,
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        offset,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      } = action.payload;

      state.results = docs;
      state.hasNextPage = hasNextPage;
      state.hasPrevPage = hasPrevPage;
      state.limit = limit;
      state.nextPage = nextPage;
      state.offset = offset;
      state.page = page;
      state.pagingCounter = pagingCounter;
      state.prevPage = prevPage;
      state.totalDocs = totalDocs;
      state.totalPages = totalPages;
    },
    setQuery: (state, action: PayloadAction<IQuery>) => {
      state.query = action.payload;
    },
  },
});

export const { setRockets, setQuery } = rocketSlice.actions;
export default rocketSlice.reducer;
