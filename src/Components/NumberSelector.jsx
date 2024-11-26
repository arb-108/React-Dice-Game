import React from 'react'
import { Box, BoxDiv, GDiv, UpperDiv } from '../StylesComponents/gamestyle'
import { ContainerDiv } from '../StylesComponents/starterStyle'
import { useState } from 'react';

const NumberSelector = ({selectedNum,SetNum,derror}) => {
    const Numarr=[1,2,3,4,5,6];
    let isSelected=false;
    
  return (
    <>
                <GDiv>
                    <div className='contrlbtn'>
                        {Numarr.map((value,key)=>
                        <Box 
                        isSelected={value===selectedNum}
                        key={key} 
                        onClick={()=>SetNum(value)}>{value}</Box>)}
                        {/* <h6>{selectedNum}</h6> */}
                    </div>
                    {derror?<h5>Select the Number</h5>:<h6>Number not Selected</h6>}
                </GDiv>
    </>
  )
}

export default NumberSelector