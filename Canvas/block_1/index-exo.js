const canvasSketch = require("canvas-sketch");
/**
 * - Écrire une fonction
Créez un éventail de cordes avec vos groupes ou artistes préférés ; écrivez une fonction appelée listArtists() qui itère sur les éléments du tableau et les déconnecte de la console.

- Inverser TÂCHE 2.1
Inversez les couleurs de l'esquisse. Utilisez du noir pour le fond et du blanc pour les contours.
 */
// dimensions
const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // createLinearGradient(x,y,x1,y1) selon les dimensions de settings
    const gradient = context.createLinearGradient(1080, 1080, 400, 400);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "#4287f5");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.01;

    const longCarre = width * 0.1; // = 10% de la width
    const hautCarre = height * 0.1;
    const gap = width * 0.03; // = 3% de la width
    const ix = width * 0.13; // => 13% de la width (6 carrés)
    const iy = height * 0.13;
    const radius = longCarre / 2;
    let x, y, xr, yr;
    function randomize() {
      const num = Math.floor(Math.random() * 10);
      console.log(num);
      return num;
    }
    context.strokeStyle = "white";
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        x = ix + (longCarre + gap) * i;
        y = iy + (hautCarre + gap) * j;

        xr = width * 0.18 + (longCarre + gap) * i; // xy point de départ du rayon
        yr = height * 0.18 + (hautCarre + gap) * j;

        if (randomize() < 5) {
          context.beginPath();
          context.arc(xr, yr, radius, 0, Math.PI * 2);
          context.stroke();
        } else {
          context.beginPath();
          context.rect(x, y, longCarre, hautCarre);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

const artistes = ["Aerosmith", "AC/DC", "Scorpion", "Iron Maden", "Metalica"];
/**
 * @param {Array} array - tableau
 * @returns All elements of an array
 */
function listArtists(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

listArtists(artistes);
