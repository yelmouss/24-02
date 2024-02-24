import React from 'react'
import { MyPLayers } from '../../players'
import PlayerCard from './PlayerCard'
import { Container } from 'react-bootstrap'



function Players() {
    return (
        <>
      <Container className='d-flex flex-column justify-content-center align-items-center gap-2 p-5'>
      {MyPLayers.map((element, index) => (
                <PlayerCard
                    key= {index}
                    ImageUrl={element.ImageUrl}
                    name={element.name}
                    age={element.age}
                    team={element.team}
                    number={element.number}

                />
            ))}

      </Container>
           

        </>
    )
}

export default Players