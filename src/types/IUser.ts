export interface IUser {
  id?: string;
  username?: string;
  password?: string;
  phone_number?: string;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  friends?: IUser[];
  picturePath?: string;
  viewedProfile?: number;
}
