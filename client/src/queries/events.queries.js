import gql from 'graphql-tag';

export const GET_EVENTS = gql`
  {
    events{
      id
      name
      location
      transport
      appointment
      prices{
        status
        price
      }
      endInscription
      startInscription
      start
      end
      organizers{
        firstName
        lastName
      }
      picture
    }
  }
`;