import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa";

export const BoxDiv = styled.div`
    width:100%;
    height:100vh;
    background: white;
    color:black;
`
export const GDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding: 10px 20px;
    /* background: gray; */
    justify-content: center;
    align-items:center;
    gap: 2rem;
    h1{
        font-size: 10rem;
        font-weight:700 ;
        line-height: 80px;
    }
    h5{
        font-size: 2rem;
        font-weight:700 ;
    }
    h6{
        color:red;
        font-size: 1.2rem;
        font-weight:250 ;
    }
    .contrlbtn{
        display:flex;
        gap: 5px;
        button{
            color:white;
            background: black;
            padding: 20px 30px;
            font-size:5rem;
            font-weight: 600;
            border-radius: 5px;
            border: none;
            border:2px solid transparent;
            transition: all 0.3s ease-in;
            cursor: pointer;
            &:hover{
                color:black;
                background: white;
                border:2px solid black;
                transition: all 0.3s ease-in;
            }
        }
    
    }
    @media (max-width: 850px) {
        gap: 1.5rem;
    h1{
        font-size: 7rem;
        font-weight:700 ;
        line-height: 50px;
    }
    h5{
        font-size: 1.7rem;
        font-weight:700 ;
    }
    h6{
        color:red;
        font-size: 1.2rem;
        font-weight:250 ;
    }
        
    }

    
`
export const Box = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            color:${({ isSelected }) => isSelected ? 'black' : 'white'};
            background: ${({ isSelected }) => isSelected ? 'white' : 'black'};
            padding: 20px;
            height:7rem;
            width:7rem;
            font-size:3rem;
            text-align: center;
            font-weight: 600;
            border-radius: 5px;
            border: none;
            border:2px solid ${({ isSelected }) => isSelected ? 'black' : 'transparent'};
            transition: all 0.3s ease-in;
            cursor: pointer;
            &:hover{
                color:black;
                background: white;
                border:2px solid black;
                transition: all 0.3s ease-in;
            }
            @media (max-width: 850px) {
                height:5rem;
            width:5rem;
        
    }
            
            
`
export const UpperDiv = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid black;
    @media (max-width: 850px) {
        flex-direction: column;

    }

`
export const LowerDiv = styled.div`
display: flex;
justify-content: center;
    align-items:center;
    flex-direction: column;
    gap:2rem;
    @media (max-width: 850px) {
              gap:1rem;
        
    }
`
export const Backbtn = styled.div`
    margin: 15px 0px;
    font-size: 1rem;
    font-weight: 300;
    width:fit-content;
    color:black;
    background: white;
    border:1px solid black;
    text-align: center;
    padding:5px;
    border-radius: 4px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
&:hover{
color:white;
background: black;
border:2px solid black;
transition: all 0.3s ease-in;
}
`
export const MenuUp = styled(FaChevronLeft)`
    font-size: 2rem;
font-weight: 300;
  cursor: pointer;
  @media (max-width: 703px) {
    display: block;
    font-size: ${({ size }) => size || '2rem'};
  }
`;