import React from 'react'
import { ReadDiv } from '../StylesComponents/readStyle'

const Readme = () => {
  return (
    <ReadDiv>

        <h1>How to play dice game</h1>
        <ul>

            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>If you get wrong guess then  2 point will be dedcuted</li>
        </ul>
    </ReadDiv>
  )
}

export default Readme