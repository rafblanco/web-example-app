export interface IUser {
    _id?: number;
    username?: string;
    password?: string;
    phone_number?: string;
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    friends?: IUser[];
    picturePath?: string;
}