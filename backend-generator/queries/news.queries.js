import gql from 'graphql-tag';

export const GET_NEWS = gql`
  {
    news {
      id
      title
      date
      content
      events {
        id
        name
        location
        transport
        appointment
        prices {
          id
          status
          price
        }
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
    }
  }
`;
