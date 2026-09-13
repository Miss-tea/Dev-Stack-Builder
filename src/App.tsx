
import './App.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Tech from './components/TechnologySection' 
function App() {

  return (
    <>
     <p className='text-3xl font-bold'>Dev Stack Builder</p> 
     <button className="btn btn-accent">Click Me</button>
      <NavBar />
      <Hero />
      <Tech />
      <Footer />  
    </>
  )
}

export default App
