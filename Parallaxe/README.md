# Effet Parallaxe
 
 Faire en sorte que les éléments défilent plus ou moins vite lors du scroll

## Solution

On trouve la position du centre de l'élément par rapport au centre de l'écran, et on applique un translateY
  
- Trouver la position du centre de l'élément par rapport au centre de l'écran
- appliquer un translateY = ratio * (centre de l'ecran - centre de l'élément)
  
  