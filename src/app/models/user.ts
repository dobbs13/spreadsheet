export interface Users {
  total: number
  data: User[]
}

export interface User {
  _id: string,
  amount: string,
  type: string,
  name: {
    first: string
    last: string
  },
  company: string,
  email: string,
  phone: string,
  address: string
}

export interface ListStates {
  [key: string]: boolean;
 }
