**Architecture**

Je suis l'architecture hexagonale : chaque composant/écran possède son hook. Par exemple l'écran App, possède un hook useApp. Ce hook contient toute la logique liée au composant, cela permets de découpler la logique de l'affichage, afin que chaque fichier ai un rôle défini.
