import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const Globalstyle=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body{
    font-family: "Poppins", sans-serif;
    font-size: 62.5%;
    @media(max-width:768px){
      font-size:70%;
    }
    @media(max-width:495px){
      font-size:50%;
    }
  }
  body{
    font-size:1.6rem;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle/>
    <App />
  </StrictMode>,
)
