import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route , Routes } from 'react-router-dom'
import Faq from './components/Faq';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
		  <Route path="/" element ={ <Home />} />
      <Route path="contact" element ={ <Contact/>} />
      <Route path="faq" element = {<Faq/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
