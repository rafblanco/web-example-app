import { useAuth } from "@clerk/clerk-react";
import { AxiosResponse } from "axios";

import { APIRepository } from "../api/ApiRepository";
import { IFriend } from "../types/IFriend";
import { IPost } from "../types/IPost";
import { IUser } from "../types/IUser";
import { setFriends, setPosts, setUser } from "./authSlice";
import { AppThunk } from "./rootStore";

export const fetchUser =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const apiRepository = APIRepository.getInstance();

      const user = (await apiRepository).getUser(id);
      //   const { userId, sessionId, getToken } = useAuth();

      if (user) {
        dispatch(setUser(user as IUser));
      }
    } catch (err) {
      return false;
    }
  };

export const fetchPosts = (): AppThunk => async (dispatch) => {
  try {
    const apiRepository = APIRepository.getInstance();
    const response: AxiosResponse<any, any> = await apiRepository.getPosts();
    const posts: IPost[] = response.data; // Extract the array from the response
    dispatch(setPosts(posts));
  } catch (err) {
    return false;
  }
};

export const fetchFriends =
  (userId: string): AppThunk =>
  async (dispatch) => {
    try {
      const apiRepository = APIRepository.getInstance();
      const response: AxiosResponse<any, any> = await apiRepository.getFriends(
        userId
      );
      const friends: IFriend[] = response.data;
      dispatch(setFriends(friends));
    } catch (err) {
      return false;
    }
  };

export const addFriend =
  (userId: string, friendId: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const apiRepository = APIRepository.getInstance();

      const {
        authSlice: { friends },
      } = getState();
      const response: AxiosResponse<any, any> = await apiRepository.addFriend(
        userId,
        friendId
      );

      const friend: IFriend = response.data;
      dispatch(setFriends([...friends, friend]));
    } catch (err) {
      return false;
    }
  };
