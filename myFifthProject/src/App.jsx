import './App.css'
import { Footer } from './Components/Footer'
import { NavbarDark } from './Components/Navbar'
import { Section_1 } from './Components/Section_1'
import { Section_2 } from './Components/Section_2'
import { Section_3 } from './Components/Section_3'
import { Section_4 } from './Components/Section_4'
import { CarouselCustomNavigation } from './Components/Slider'
import { Slider_2 } from './Components/Slider_2'
import { Slider_3 } from './Components/Slider_3'
import { Sponsered } from './Components/Sponsered'

function App() {
  return(
    <>
    <NavbarDark/>
    <CarouselCustomNavigation/>
    <Slider_2/>
    <Section_1/>
    <Section_2/>
    <Sponsered/>
    <Section_3/>
    <Section_4/>
    <Slider_3/>
    <Footer/>
    </>
  )
 
}

export default App
