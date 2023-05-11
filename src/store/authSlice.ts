import { createSlice } from "@reduxjs/toolkit";

import { IPost } from "../types/IPost";
import { ITheme } from "../types/ITheme";
import { IUser } from "../types/IUser";

export interface AuthSliceState {
  mode: ITheme;
  user: IUser;
  token?: unknown;
  posts: IPost[];
}
const initialState: AuthSliceState = {
  mode: ITheme.light,
  user: {},
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.mode = state.mode === "light" ? ITheme.dark : ITheme.light;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = {};
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setTheme, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export const { reducer } = authSlice;
