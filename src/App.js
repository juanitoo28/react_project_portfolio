// Importation des modules nécessaires depuis la bibliothèque React et react-router-dom
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importation des composants spécifiques à l'application
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";  // Importation des styles CSS de l'application
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

// Définition du composant principal de l'application
const App = () => {
  return (
    // Utilisation du composant Router pour définir la navigation basée sur les routes
    <Router>
      {/* Affichage du composant de navigation */}
      <Nav />
      
      {/* Affichage du composant de fond de page */}
      <Background/>

      {/* Définition des routes de l'application */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<About/>}/>
        
        {/* Route pour la page des compétences */}
        <Route path="/competences" element={<Skills/>}/>
        
        {/* Route pour la page des projets */}
        <Route path="/projets" element={<Projects/>}/>
        
        {/* Route pour la page de contact */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      {/* Affichage du composant des statistiques du joueur */}
      <PlayerStats/>
    </Router>
  );
}

// Exportation du composant principal de l'application
export default App;
