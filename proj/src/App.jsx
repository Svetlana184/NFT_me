import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import {Link} from 'react-router-dom';
import './App.scss'
import Gallery from './components/Gallery/Gallery.jsx';
import CreateAndSell from './components/createAndSell/CreateAndSell.jsx';
import Trending from './components/Trending/Trending.jsx';
import Artists from './components/Artists/Artists.jsx';
import Partners from './components/Partners/Partners.jsx';

function App() {

  return (
    <main>
      <Header/>
      <About/>
      <Statistics/>
      <Gallery/>
      <CreateAndSell/>
      <Trending/>
      <Artists/>
      <Partners/>
      <Footer/>
    </main>
  )
}

export default App
