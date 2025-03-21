import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import SpecificationsArea from './components/specifications'
import ExampleArea from './components/example'
import FormArea from './components/form'

function App() {

  return (
    <main className='@apply bg-[linear-gradient(_to_bottom,transparent_70%,black_),url("./src/assets/bg.png")] h-screen bg-cover bg-center z-[-1];'>
      <Header></Header>
        <Home></Home>
        <SpecificationsArea></SpecificationsArea>
        <ExampleArea></ExampleArea >
        <FormArea></FormArea>
    </main>
  )
}

export default App
