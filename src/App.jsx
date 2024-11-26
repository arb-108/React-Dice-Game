import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Starter from './Components/Starter'
import GameCom from './Components/GameCom'

function App() {
  const [flag, setflag] = useState(false)

  const playtoggle=()=>{
    setflag(!flag);
  }


  return (
    <>

       {flag?<GameCom playtoggle={playtoggle}/>:<Starter playtoggle={playtoggle}/>}
    </>
  )
}

export default App
