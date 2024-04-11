import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./util/Header"

function App() {

  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
