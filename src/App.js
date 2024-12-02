import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/navs/Navbars';
import Home from './Pages/Home';
import About from './About/About';
import Work from './Work/Work';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   
   <Fragment>
     <Navbars />
     <Home />
     <About />
     <Work />
     <Footer />
   </Fragment>
    
  );
}


export default App;
