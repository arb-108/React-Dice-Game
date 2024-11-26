import styled from 'styled-components';
export const RDiv=styled.div`
    display:flex;
    flex-direction:column;
    padding: 10px 20px;
    /* background: gray; */
    justify-content: center;
    align-items:center;
    gap: 1.5rem;
    h4{
        font-size: 1.5rem;
        font-weight: 600;
    }
    .diceimg{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:70%;
            cursor: pointer;
        }
    }
    
`
export const DiceGameBtn1=styled.button`
    font-size: 1.3rem;
    font-weight: 300;
    color:black;
    background: white;
    border:2px solid black;
    min-width: 100%;
    padding:10px;
    border-radius: 4px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover{
        color:white;
        background: black;
        border:2px solid black;
        transition: all 0.3s ease-in;
    }
    @media (max-width: 770px) {
        width:100%
    }
`
export const DiceGameBtn2=styled.button`
    font-size: 1.3rem;
    font-weight: 300;
    color:white;
    background: black;
    border:2px solid transparent;
    min-width: 100%;
    padding:10px;
    border-radius: 4px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover{
        color:black;
        background: white;
        border:2px solid black;
        transition: all 0.3s ease-in;
    }
    @media (max-width: 770px) {
        width:100%
    }
`