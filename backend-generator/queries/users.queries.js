import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users {
      id
      lastName
      firstName
      email
      street
      city
      NPA
      birthday
      sexe
      status
    }
  }
`;
