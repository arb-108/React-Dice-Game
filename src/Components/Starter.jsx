import React from 'react'
import { ContainerDiv, Heading1, StartBtn} from '../StylesComponents/starterStyle'

const Starter = ({playtoggle}) => {
  return (
    <>
    
        <ContainerDiv>
            <div className='imgDiv'>
            <img src="./public/Images/dices.png" alt="" />
            </div>
            <div className="content">
                <Heading1>Dice Game</Heading1>
                <StartBtn onClick={playtoggle}>Play Now</StartBtn>
            </div>
        </ContainerDiv>
    </>
  )
}

export default Starter