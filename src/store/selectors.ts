import { RootState } from "./rootReducer";

export const selectIsAuth = ({ authSlice }: RootState) => authSlice.token;
export const selectMode = ({ authSlice }: RootState) => authSlice.mode;
export const selectUser = ({ authSlice }: RootState) => authSlice.user;
export const selectFriends = ({ authSlice }: RootState) => authSlice.friends;
export const selectPosts = ({ authSlice }: RootState) => authSlice.posts;
