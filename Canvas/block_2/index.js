const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    // TODO transform pour faire bouger les éléments du canvas
    // LINK https://www.w3schools.com/tags/ref_canvas.asp

    context.fillStyle = "#000";
    // on centre le dessin sur la hauteur et la largeur
    const x = width * 0.5;
    const y = height * 0.5;
    // valeur du dessin
    const w = width * 0.3;
    const h = height * 0.3;
    // on sauvegarde le context actuelle
    context.save();
    // STUB Utilisation de la fonction translate(x, y)
    context.translate(x, y);
    // STUB Utilisation de la fonction rotate
    // context.rotate(20 * (Math.PI / 180));
    context.rotate(0.3);

    // Les 2 premieres valeurs sont les points d'origine, d'ancrage
    // ici, le point d'encrage est en haut à gauche de la toile
    // context.rect(x, y, w, h);
    // ici, le point d'encrage est en haut à gauche du carré
    // context.rect(0, 0, w, h);
    // Ici, on  place le carré à moitié moins de la largeur
    context.rect(-w * 0.5, -y * 0.5, w, h);
    context.fill();
    // Après nos transformations on restaure le context pour qu'il reparte du même endroit. Le cercle partira donc du haut de la toile à gauche et pas du carré.
    context.restore();

    // Positionnement du context
    context.translate(100, 400);

    context.beginPath();
    context.fillStyle = "purple";
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.fill();
  };
};

canvasSketch(sketch, settings);
