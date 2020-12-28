import React from 'react'
import Rockets from './Rockets'
import styled from '@emotion/styled'

const HomeContainer = styled.div`
  border: 1px solid red;
`

const Home = () => {
  return (
    <HomeContainer>
      <Rockets>
      {({loading, error, data}) => {
        if(loading) return <p>Loading ...</p>
        if(error) return <p>Erorr!</p>

        return data.rockets.map(rocket => {
          return <p key={rocket.id} >{rocket.description}</p>
        })
      }}
      </Rockets>
    </HomeContainer>
  );
}
 
export default Home;