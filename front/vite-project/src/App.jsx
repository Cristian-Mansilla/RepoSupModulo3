import { Navbar } from './components/Navbar'
import { Home } from './views/Home'
import { MisTurnos } from './views/MisTurnos'
import { Footer } from './components/Footer'
import style from './styles/General.module.css'
// import './App.css'

function App() {

  return (
    <div className={style.view}>
      <Navbar />
      {/* <Home /> */}
      <MisTurnos />
      <Footer />
    </div>
  )
}

export default App
