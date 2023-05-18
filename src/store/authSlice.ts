import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFriend } from "../types/IFriend";
import { IPost } from "../types/IPost";
import { ITheme } from "../types/ITheme";
import { IUser } from "../types/IUser";

export interface AuthSliceState {
  mode: ITheme;
  user: IUser;
  friends: IFriend[];
  token?: unknown;
  posts: IPost[];
}
const initialState: AuthSliceState = {
  mode: ITheme.light,
  user: {},
  friends: [],
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
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    setFriends: (state, { payload }: PayloadAction<IFriend[]>) => {
      state.friends = payload;
    },
    setPosts: (state, { payload }: PayloadAction<IPost[]>) => {
      state.posts = payload;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.post.id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const {
  setTheme,
  setLogin,
  setLogout,
  setUser,
  setFriends,
  setPosts,
  setPost,
} = authSlice.actions;
export const { reducer } = authSlice;
