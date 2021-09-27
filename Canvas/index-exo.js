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
    const gradient = context.createLinearGradient(1080, 1080, 100, 100);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "yellow");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
