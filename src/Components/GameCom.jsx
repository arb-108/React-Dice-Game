import React from 'react'
import { Backbtn, BoxDiv, GDiv, LowerDiv, MenuUp, UpperDiv } from '../StylesComponents/gamestyle'
import { ContainerDiv } from '../StylesComponents/starterStyle'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import Readme from './Readme'

const GameCom = ({playtoggle}) => {
    const [show,setshow]=useState(false);
    const [derror,seterror]=useState(true);
    const [score,setScore]=useState(0)
    const [selectedNum,SetNum]=useState(0)
    const [gnum,setgnum]=useState(1);
    const showfun=()=>{
        setshow(pre=>!pre);
    }
    const roleDiceFun = () => {
        
        if(selectedNum===0){
            seterror(false);
            // console.log(selectedNum,derror);
        }else{
            const randomNum = Math.floor(Math.random() * 6) + 1; // Generate number between 1
            setgnum(randomNum);
            // console.log(selectedNum,gnum);
            if(selectedNum===randomNum){
                setScore((pre)=>pre+randomNum);
            }else{
                setScore((pre)=>pre-randomNum);
            }
            SetNum(0);
            seterror(true);
        }
    };
    const resetbtnfun=()=>{
        setScore(0);
        SetNum(0);
        setgnum(1);
        seterror(true);
        showfun();
    }
  return (
    <>
        <ContainerDiv>

        <BoxDiv>
            <UpperDiv>
                <GDiv>
                    <h1>{score}</h1>
                    <h5>Total Score</h5>
                </GDiv>
                <NumberSelector selectedNum={selectedNum} SetNum={SetNum} derror={derror}/>
            </UpperDiv>
            <LowerDiv>
                <RoleDice gnum={gnum} roleDiceFun={roleDiceFun} resetbtnfun={resetbtnfun} showfun={showfun}/>
                {show?<Readme/>:null}
            </LowerDiv>
            <Backbtn onClick={playtoggle}><MenuUp/><p>Back to Home</p></Backbtn>
            
        </BoxDiv>
        </ContainerDiv>
    </>
  )
}

export default GameCom