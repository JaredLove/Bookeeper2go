
import { gql } from 'graphql-tag';

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    username
    email
  }
}
`


export const GET_ME = gql`
query Me {
  me {
    _id
    email
    username
  }
}
`

