import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Blogue from './pages/Blogue';
import Services from './pages/Services';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <div style={{
        position: 'sticky',
        top: '0px'
      }}>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<Apropos />} />
        <Route path='/contactez-nous' element={<Contact />} />
        <Route path='/blogue' element={<Blogue />} />
        <Route path='/services' element={<Services />} />
        <Route path='/*' element={<Error404 />} />


      </Routes>

      <Footer />


    </>
  );
}

export default App;
