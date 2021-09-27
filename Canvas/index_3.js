const canvasSketch = require("canvas-sketch");

const settings = {
  // les dimensions sont en pixels
  dimensions: [1080, 1080], //
  /* Pour l'impression */
  //   dimensions: "A4",
  //   pixelsPerInch: 300,
  //   orientation: "landscape",
};

const sketch = () => {
  // width et heigth font références au dimensions de settings
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // L'épaisseur de la ligne sera d'1% de la largeur
    context.lineWidth = width * 0.01;
    // Pour une meilleur résolution on rend les valeurs dynamique, elles seront à 10% de la taille du canvas donc (0.1) car 1 = 100%
    /**
     * widthSquare = 60px soit 10% de 600px(des anciennes dimensions)calcul du produit en croix.
     * 600px = 100% ; 60px =  ?% ; donc pour trouver 10% : (60 * 100) / 600
     * donc widthSquare = width * 0.1
     * c'est donc 10% de la largeur du canvas
     */
    const widthSquare = width * 0.1;
    const heightSquare = height * 0.1;
    //pareil, environ (3%) du canvas
    const gap = width * 0.03;
    /**
     * on remplace la valeur en dur de x et y
     * qui deviendra ix et iy
     * 100 / 600 = 0.16 donc environ 17%
     */
    const ix = width * 0.17;
    const iy = height * 0.17;
    /**
     * On créé un variable aussi pour le décalage du petit carré
     * la valeur de base était de 15px, soit 2% de la largeur
     */
    const off = width * 0.02;
    let x, y;

    // ligne 1
    for (let i = 0; i < 5; i++) {
      // repetition de la 1ere ligne
      for (let j = 0; j < 5; j++) {
        // Math.random génère un nombre entre 0 et 1
        const random = Math.random();
        // permet de faire un carré + un espace * en plus
        x = ix + (widthSquare + gap) * i;
        y = iy + (heightSquare + gap) * j;

        context.beginPath();
        context.rect(x, y, widthSquare, heightSquare);
        context.stroke();

        if (0.5 == 0.5 % random) {
          context.beginPath();
          context.rect(
            x + off / 2,
            y + off / 2,
            widthSquare - off,
            heightSquare - off,
          );
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
