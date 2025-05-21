import Header from './components/header'
import Home from './components/home'
import SpecificationsArea from './components/specifications'
import ExampleArea from './components/example'
import FormArea from './components/formarea'
import Footer from './components/footer'
import background from './assets/bg.png'
function App() {

  return (
    <main className='h-screen max-w-[px] bg-cover bg-center z-[-1];' style={{ backgroundImage: `linear-gradient(to bottom, transparent 25%, black 95%), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',}}>
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
