import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    name: "Mubashir Liaqat",
  },
  {
    id: 2,
    name: "Touseef Sajjad",
  },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
