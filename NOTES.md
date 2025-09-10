# Test technique

## **Architecture**

Je suis l'architecture hexagonale : chaque composant/écran possède son hook. Par exemple l'écran App, possède un hook useApp. Ce hook contient toute la logique liée au composant, cela permets de découpler la logique de l'affichage, afin que chaque fichier ai un rôle défini.

## **Usage de l'application**

### Connexion

- Entrez une chaine de caractère quelconque dans le champ utilisateur et le champ mot de passe. Le mot de passe doit contenir entre 8 et 30 caractères.
- Appuyer sur 'Se connecter'
