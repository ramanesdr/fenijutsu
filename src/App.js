import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';


// Importez vos composants de pages
import Acceil from './pages/Acceil';
import Apropos from './pages/Apropos';
import Actions from './pages/Actions';
import Contact from './pages/Contact';

// Créez votre composant racine
const App = () => {
  return (
    <div>
    <Header />
    <Routes>
        <Route path="/" element={ <Acceil /> }/>
        <Route path="/apropos" element={ <Apropos /> }/>
        <Route path="/actions" element={ <Actions /> }/>
        <Route path="/contact" element={ <Contact /> }/>
    </Routes>
    <Footer />
</div>
  );
}

export default App;
