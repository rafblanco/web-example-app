import { useAuth } from "@clerk/clerk-react";

import { IPost } from "../types/IPost";
import { IUser } from "../types/IUser";
import { HttpClient } from "./HttpClient";

export class APIRepository extends HttpClient {
  //   private BASE_URL = import.meta.env.VITE_SUPABASE_URL;
  //   private accessToken = "";
  protected idToken = "";

  constructor() {
    super(import.meta.env.VITE_SUPABASE_URL as string);
  }

  private static classInstance?: APIRepository;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new APIRepository();
    }
    return this.classInstance;
  }

  // User

  public getUser = async (userId: string) => {
    return this.instance.get(`/users/${userId}`);
  };

  public getUsers = async () => {
    return this.instance.get(`/users`, {
      headers: {
        Authorization: "Bearer " + this.idToken,
      },
    });
  };

  public getUserByEmail = async (email: string) => {
    return this.instance.get(`/users/byEmail/${email}`);
  };

  public createUser = async (user: IUser) => {
    return this.instance.post("/users", JSON.stringify(user));
  };

  public deleteUser = async (userId: string) => {
    return this.instance.delete("/users/deleteUser/" + userId);
  };

  public updateUser = async (userId: string, user: IUser) => {
    return this.instance.put("/users/" + userId, { user });
  };

  public uploadPicture = async (userId: string, form: any) => {
    return this.instance.post("/users/photo/" + userId, form, {
      headers: {
        Authorization: "Bearer " + this.idToken,
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    });
  };

  // Posts

  public getPosts = async () => {
    return this.instance.get("/post?select=*");
  };

  public createPost = async (post: IPost) => {
    return this.instance.post("/post", JSON.stringify(post));
  };

  public deletePost = async (postId: string, userId: string) => {
    return this.instance.delete(`/post/${postId}`, {
      data: {
        userId,
      },
      headers: {
        Authorization: `Bearer ${this.idToken}`,
      },
    });
  };

  public updatePost = async (
    postId: string,
    userId: string,
    updatedPost: IPost
  ) => {
    return this.instance.delete(`/post/${postId}`, {
      data: {
        userId,
        updatedPost,
      },
      headers: {
        Authorization: `Bearer ${this.idToken}`,
      },
    });
  };

  //   Friends
  public getFriends = async (userId: string) => {
    return this.instance.get(`/follows/${userId}`);
  };

  public addFriend = async (userId: string, friendId: string) => {
    return this.instance.post("/follow", JSON.stringify({ userId, friendId }));
  };
}
