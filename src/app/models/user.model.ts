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
type Email = string

export interface IUser {
  picture: Picture;
  name: Name;
  gender: Gender;
  phone: Phone;
  fullName: FullName;
  location: Location;
  email: Email;
  id: UserID;
}

export class User implements IUser {
  email: Email;
  gender: Gender;
  id: UserID;
  location: Location;
  name: Name;
  phone: Phone;
  picture: Picture;

  constructor(props: Partial<IUser>) {
    this.email = props.email;
    this.gender = props.gender;
    this.id = props.id;
    this.location = props.location;
    this.name = props.name;
    this.phone = props.phone;
    this.picture = props.picture;
  }

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  get city() {
    return this.location.city
  }

  get street() {
    return `${this.location.street.number} ${this.location.street.name}`;
  }

}

export interface IUserResponse {
  results: IUser[];
}

export interface IUserQueryParams {
  gender: boolean;
  location: boolean;
  email: boolean;
  phone: boolean;
}

export const userQueryParamsNames: { [key in keyof IUserQueryParams]: string } = {
  gender: 'Gender',
  location: 'Location',
  email: 'Email',
  phone: 'Phone'
};
