import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Logout($uid: String, $close: Boolean) {
    logout(uid: $uid, close: $close)
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      uid
      username
      firstName
      lastName
    }
  }
`;
