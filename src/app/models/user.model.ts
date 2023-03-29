type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
}
type Name = {
  first: string;
  last: string;
}
type Street = {
  number: number
  name: string
}
type Location = {
  city: string
  street: Street
}
type UserID = {
  name: string
  value: string
}
type FullName = string;
type Gender = string;
type Phone = string;

export interface IUser {
  picture: Picture;
  name: Name;
  gender: Gender;
  phone: Phone;
  fullName: FullName;
  location: Location;
  email: string;
  street: string;
  city: string;
  id: UserID
}

// export interface IUserDetails {
//   location: Location;
//   id: {
//     name: string
//     value: number
//   }
//   street: string;
//   city: string;
//   email: string;
// }


export interface IUserResponse {
  results: IUser[];
}

// export interface IUserDetailsResponse {
//   results: IUserDetails[];
// }



