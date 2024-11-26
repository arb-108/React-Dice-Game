import styled from 'styled-components';

export const ContainerDiv=styled.div`
    max-width:1300px;
    margin:0 auto;
    color:black;
    /* background: red; */
    height:100vh;
    display:flex;
    justify-content: center;
    align-items:center;
    .imgDiv{
            /* border:2px solid black; */
            width:80%;
            img{
                width:90%;
            }
        }
    .content{
        border:2px solid white;
        display:flex;
        flex-direction:column;
        justify-content:end;
        align-items:end;
        gap:1rem;
    }
    @media (max-width: 1100px) {
        flex-direction: column;
        /* border:1px solid red; */
        width:80%;
        .imgDiv{
             /* border:2px solid black;  */
            width:70%;
            img{
                width:90%;
            }
        }
    }
    @media (max-width: 770px) {
        flex-direction: column;
        width:80%;
        .imgDiv{
            /* border:2px solid black; */
            width:100%;
            img{
                width:90%;
            }
        }
    }
`
export const Heading1=styled.h1`
    font-size: 9rem;
    font-weight: 700;
    color:black;
    white-space:nowrap;
    @media (max-width: 770px) {
        font-size: 6rem;
        font-weight: 700;
    }
`
export const StartBtn=styled.button`
    color:white;
    background: black;
    border:2px solid transparent;
    min-width: 200px;
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