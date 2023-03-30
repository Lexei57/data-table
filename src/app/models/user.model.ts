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

export class User implements IUser {
  city: string;
  email: string;
  gender: Gender;
  id: UserID;
  location: Location;
  name: Name;
  phone: Phone;
  picture: Picture;
  street: string;

  constructor(props: Partial<IUser>) {
    this.city = props.city
    this.email = props.email
    this.gender = props.gender
    this.id = props.id
    this.location = props.location
    this.name = props.name
    this.phone = props.phone
    this.picture = props.picture
    this.street = props.street
  }
get fullName() {
    return `${this.name.first} ${this.name.last}`
}

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

export interface IUserQueryParams {
  gender: boolean
  location: boolean
  email: boolean
  phone: boolean
}

export const userQueryParamsNames: {[key in keyof IUserQueryParams]: string} = {
  gender: 'Gender',
  location: 'Location',
  email: 'Email',
  phone: 'Phone'
}

// export interface IUserDetailsResponse {
//   results: IUserDetails[];
// }



