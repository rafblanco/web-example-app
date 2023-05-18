export interface IPost {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  postUserId: string;
  description: string;
  location: string;
  picturePath: string;
  userPicturePath: string;
  likes: any;
  comments: any[];
}
