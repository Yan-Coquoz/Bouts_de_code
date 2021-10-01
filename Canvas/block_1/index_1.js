// base de canvas
const canvas = document.querySelector("canvas");
// Le context peut etre 3d
const context = canvas.getContext("2d");

// remplace la couleur d'origine (noir)
context.fillStyle = "blue";
/**
 * 100 et 100 correspond à x et y àpartir du haut à gauche de l'écran
 * 400 et 400 sont la longueur et la hauteur
 */
// context.fillRect(100, 100, 400, 400);
/**
 *  un rectangle
 */
// linewidth pour l'épaisseur des lignes notre canvas
context.linewidth = 4;

// beginPath annonce un nouveau chemin
context.beginPath();
// rect pour dessiné un rectangle, carré
context.rect(100, 100, 400, 400);
// path dessine un chemin actuel ou donné, ici c'est le contour
context.stroke();

/**
 *  un cercle
 */
// un nouveau motif
context.beginPath();
// il sera de forme arrondi
// 300*300 à partir du haut à gauche
// 100 est le rayon de l'arc
// il partira de l'angle 0 (radian), et fera un tour complet avec math.pi * 2
context.arc(300, 300, 50, 0, Math.PI * 2);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();
