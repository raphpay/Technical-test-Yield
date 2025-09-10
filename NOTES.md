# Test technique

## **Architecture**

### Architecture hexagonale

L'application utilise l'architecture hexagonale : chaque composant/écran possède son hook. Par exemple l'écran App, possède un hook useApp. Ce hook contient toute la logique liée au composant, cela permet de découpler la logique de l'affichage, afin que chaque fichier ai un rôle défini.

### Services

L'application utilise une architecture basé sur un service. Le service PhotoService s'occupe de communiquer avec l'API ( récupérer les photos, les envoyer ).
Les composants ( ou plutôt les hooks ) appellent ensuite ce service.

Nous avons donc plusieurs couches pour accéder aux données, cela permets de séparer la logique pour simplifier les tests par la suite. Nous avons donc cette structure:

- API
- Service
- Hook
- Composant

## **Usage de l'application**

### Connexion

- Entrez une chaine de caractère quelconque dans le champ utilisateur et le champ mot de passe. Le mot de passe doit contenir entre 8 et 30 caractères.
- Appuyer sur 'Se connecter'
- Ajouter une photo avec le bouton 'Ajouter une photo'
- Sélecttionner une photo depuis la galerie de votre appareil
