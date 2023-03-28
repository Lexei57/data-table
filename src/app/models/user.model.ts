// export interface ITableUser {
//   picture: string
//   name: {
//     first: string
//     last: string
//   }
//   gender: string
//   phone: number
// }



export interface IUser {
    picture: string
    name: string
    gender: string
    phone: number
}

export interface IUserResponse {
  results: IUser[]
}

export interface IUserValues {
  picture: {
    medium: string
  }
  name: {
    first: string
    last: string
  }
  gender: string
  phone: number
}


