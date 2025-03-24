import Header from './components/header'
import Home from './components/home'
import SpecificationsArea from './components/specifications'
import ExampleArea from './components/example'
import FormArea from './components/formarea'
import Footer from './components/footer'
function App() {

  return (
    <main className='@apply bg-[linear-gradient(_to_bottom,transparent_70%,black_),url("./src/assets/bg.png")] h-screen max-w-[px] bg-cover bg-center z-[-1];'>
      <Header></Header>
        <Home></Home>
        <SpecificationsArea></SpecificationsArea>
        <ExampleArea></ExampleArea >
        <FormArea></FormArea>
        <Footer></Footer>
    </main>

  )
}

export default App
