// Tableau des exercices disponibles
const table = [
  "Abdos", "Pompes", "Burpees", "Squats", "Fentes",
  "Jumping Jacks", "Hip Trust", "Tirage buste penché", "Chaise",
  "Donne à l'autre un exercice de ton choix pour le temps indiqué"
];

// Fonction qui retourne un exercice aléatoire du tableau
function exo() {
  const alea = Math.floor(Math.random() * table.length);
  return table[alea];
}

// Fonction qui retourne un temps aléatoire entre 15 et 30 secondes inclus
function temps() {
  const time = Math.floor(Math.random() * (31 - 15) + 15);
  return `${time} secondes`;
}

// Fonction appelée au clic sur le bouton pour réinitialiser l'exercice et le temps
function exercice() {
  document.getElementById("exo").innerHTML = exo();
  document.getElementById("temps").innerHTML = temps();
}

// Affichage au chargement et expose la fonction "exercice globalement pour qu'elle soit accessible dans index.html
window.onload = exercice;
window.exercice = exercice;
