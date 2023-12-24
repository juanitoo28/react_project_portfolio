// Importation des modules React et ReactDOM/client
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation du composant principal de l'application depuis le fichier App.js
import App from './App';

// Obtention d'une référence à l'élément DOM avec l'identifiant 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App dans l'élément DOM avec l'identifiant 'root'
root.render(<App />);
