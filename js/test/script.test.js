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

// réalisation des tests
test("exo() retourne un élément du tableau", () => {
  const result = exo();
  expect(table).toContain(result);
});

test("temps() retourne une chaîne avec 'secondes' et un nombre entre 15 et 30", () => {
  const result = temps();
  const num = parseInt(result);
  expect(result).toMatch(/secondes/);
  expect(num).toBeGreaterThanOrEqual(15);
  expect(num).toBeLessThanOrEqual(30);
});
