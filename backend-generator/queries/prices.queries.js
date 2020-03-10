import gql from 'graphql-tag';

export const GET_PRICES = gql`
  {
    prices {
      id
      events {
        id
        name
        location
        transport
        appointment
        endInscription
        startInscription
        start
        end
        offert
        informations
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
        picture
      }
      status
      price
    }
  }
`;
