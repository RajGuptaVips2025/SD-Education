import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';
// import {tech} from './components/Hero/Hero'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Card/>
      <Footer/>
    </>
  );
};

export default App;
