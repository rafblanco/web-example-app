export interface IPost {
  _id: number;
  userId: number;
  firstName: string;
  lastName: string;
  postUserId: number;
  description: string;
  location: string;
  picturePath: string;
  userPicturePath: string;
  likes: any;
  comments: any[];
}
