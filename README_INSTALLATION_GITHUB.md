# IPP A4P — Pack complet GitHub Pages

Ce dossier contient tous les fichiers nécessaires pour publier l’IPP sur un dépôt GitHub vierge.

## Fichiers inclus
- `index.html` : page principale du test
- `styles.css` : présentation visuelle
- `app.js` : moteur du questionnaire, calcul des scores et génération du rapport
- `questions_ipp_v3.json` : 60 vignettes
- `profiles_36_ipp_v3.json` : 36 profils détaillés
- `phase_items_v3.json` : module énergie de phase
- `stress_items_v3.json` : module stress
- `404.html` : page de secours pour GitHub Pages
- `.nojekyll` : compatibilité GitHub Pages

## Publication sur un dépôt GitHub vierge
1. Crée un dépôt public avec un nom simple, par exemple `ipp-a4p`.
2. Décompresse ce ZIP.
3. Dépose **tout le contenu du dossier** à la racine du dépôt.
4. Vérifie que `index.html` est bien visible à la racine.
5. Va dans `Settings` > `Pages`.
6. Choisis `Deploy from a branch`.
7. Sélectionne la branche `main` et le dossier `/root`.
8. Enregistre et attends l’URL de publication.

## URL attendue
Si le dépôt s’appelle `ipp-a4p`, l’adresse sera de type :
`https://TON-COMPTE.github.io/ipp-a4p/`

## Vérification rapide
À la racine du dépôt, tu dois voir au minimum :
- `index.html`
- `styles.css`
- `app.js`
- `questions_ipp_v3.json`
- `profiles_36_ipp_v3.json`
- `phase_items_v3.json`
- `stress_items_v3.json`
- `404.html`
- `.nojekyll`

## Bonnes pratiques
- Ne renomme pas les fichiers.
- Ne mets pas les JSON dans un sous-dossier.
- Évite un nom de dépôt qui se termine par `.html`.
