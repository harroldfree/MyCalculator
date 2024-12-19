// script.js

// Fonction pour ajouter des chiffres ou des opérateurs à l'affichage
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Fonction pour effacer l'affichage
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Fonction pour calculer le résultat
  function calculate() {
    try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Erreur';
    }
  }
  