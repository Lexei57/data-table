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
type FullName = string;
type Gender = string;
type Phone = string;

export interface IUser {
    picture: Picture;
    name: Name;
    gender: Gender;
    phone: Phone;
    email: string
    street: string
    city: string
    fullName: FullName;
    location: Location
}


export interface IUserResponse {
  results: IUser[]
}



