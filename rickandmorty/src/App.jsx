import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Characters from './components/Characters/Characters'

const App = () => {


  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='cards'>
        <Characters />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
