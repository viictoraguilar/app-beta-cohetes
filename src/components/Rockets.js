import React from 'react';
import {gql} from 'apollo-boost'
import {Query} from "react-apollo"


const Rockets = (props) => {
  return <Query query={gql`
    {
      rockets {
        description
        country
      }
    }  
  `}>
    {props.children}
  </Query>
}
 
export default Rockets;