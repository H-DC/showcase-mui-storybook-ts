
### Notiplus

Repo de base pour structuration/testing de composants à partir d'une exemple d'intégration non optimisé.

#### Packages :

**Integration** 
- react / react-dom
- formik (+yup)
- materialui (4) pour la lib ui

**Testing**
- vitest
- storybook

#### Points d'évaluation :

À partir de l'exemple présenté dans `src/original.ts`; l'objectif est de créer 3 composants réutilisables indépendamment, en se rapprochant de l'exemple donné dans `src/target.tsx`

- **Card** (`src/components/card/card.tsx`)  
  Normalisation des props de title et footer.

- **FormRow** (`src/components/form/form.tsx`)  
  Utilisataire pour aligner des éléments

- **Input** (`src/components/form/input.tsx`)  
  Simplification des composants nécessaires aux formulaires.
  Chaque champs doit à minimum recevoir les props `label`, `name`, `handleChange`; et # optionnellement `helpertext`.  Idéalement la props `variant` servira à sélectionner le composant à utiliser sous une interface unique `<Input .../>`. Le champs de type `checkbox`, `radio` et `select` doivent recevoir la props `options`.

---

**A. Découplage de l'intégration en composants réutilisables**
  
  Cette étape permet de découper l'integration initiale présentée dans `src/original.tsx` vers les composants cités.  Elle inclue le typage typescript des props de chacun de ces composants

---

**B. Testing des composants**
  - Vérification des déclinaisons d'affichages de chacun des composants cités
  - Implémenter un ou plusieurs examples sur storybook pour chacun des composants cités

---

**C. Intégration et testing de la composition (`src/target.tsx`)**
   
  À la différence du point précédent, cette étape servira plutôt à tester les comportements du formulaire.
  - Intégrer et tester une validation conditionnelle yup (si le champ X à la valeur C, alors le champ Y est requis)
  - Intégrer et Tester l'affichage conditionnel d'un champ (si le champ X à la valeur C, alors le champ Y s'affiche)
  - Tester le remplissage et l'envoi du formulaire

---

**D. Amélioration visuelle (css) de l'integration finale.**

   Cette partie est libre et facultative, mais peut servir à démontrer :
   - les compétences css
   - la capacité à ajuster un thème prédéfini
   - l'importance donnée à l'aspect visuel d'un composant
