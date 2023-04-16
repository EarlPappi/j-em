import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Blogue from './pages/Blogue';
import Realisation from './pages/Realisation';
import Error404 from './pages/Error404';
import BlogDetails from './pages/BlogDetails';
import AdminBlog from './components/Blogue/AdminBlog';

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
        <Route path='/realisation' element={<Realisation/>} />
        <Route path='/blogue/:blogId' element={<BlogDetails/>} />
        <Route path='/adminBlog' element={<AdminBlog/>} />
        <Route path='/*' element={<Error404 />} />


      </Routes>

      <Footer />


    </>
  );
}

export default App;
