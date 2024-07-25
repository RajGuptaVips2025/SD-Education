import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SideBar from './components/SideBar/SideBar';
import InfiniteMovingCardsDemo from './components/InfiniteMovingCardsDemo/InfiniteMovingCardsDemo';
import SidebarDemo from './components/SidebarDemo/SidebarDemo';

const App = () => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Card />
              <InfiniteMovingCardsDemo />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;

{/* <div className="flex">
<SideBar />
</div> */}
{/* <div className='bg-gradient-to-b from-[#5e626c] to-[#111827] pt-48'>
  <SidebarDemo />
</div> */}