import React from 'react'
import {DiceGameBtn1, DiceGameBtn2, RDiv } from '../StylesComponents/roledice'
import { useState } from 'react'

const RoleDice = ({gnum,roleDiceFun,resetbtnfun,showfun}) => {

  return (
    <>
        <RDiv>


        <div className='diceimg'>
            <img src={`./public/Images/dice_${gnum}.png`} alt="" onClick= {roleDiceFun}/>
        </div>
        <h4>Click On Dice to Roll</h4>
        <DiceGameBtn1 onClick={resetbtnfun}>Rest the Game</DiceGameBtn1>
        <DiceGameBtn2 onClick={showfun}>Read the Rules</DiceGameBtn2>
        </RDiv>
    </>
  )
}

export default RoleDice