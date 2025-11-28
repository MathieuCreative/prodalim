# PRODALIM - Maquette de Plateforme B2B

Site web de commande pour une entreprise B2B de coffrets cadeaux de fin d'année premium, destiné à être utilisé comme **MAQUETTE (mock)** pour des captures d'écran et un rapport de conseil.

## 🎯 Objectif

Cette maquette permet de visualiser et capturer des écrans d'une plateforme de gestion de commandes B2B pour coffrets cadeaux premium. Toutes les données sont **simulées** côté front - aucune intégration réelle n'est nécessaire.

## 📦 Structure du projet

```
pujol/
├── index.html          # Page principale avec toutes les vues
├── styles.css          # Styles CSS premium complets
├── data.js            # Catalogue produits et données simulées (40+ références)
├── app.js             # Logique JavaScript et navigation
├── pages.html         # Templates HTML supplémentaires (référence)
└── README.md          # Ce fichier
```

## 🚀 Utilisation

### Lancement rapide

1. Ouvrez simplement `index.html` dans votre navigateur web
2. Aucun serveur web n'est nécessaire (peut fonctionner en local)
3. Pour de meilleures performances, utilisez Chrome, Firefox ou Safari

### Connexion

La page de connexion permet de sélectionner différents profils utilisateur :

- **Assistante commerciale** → Dashboard commercial avec gestion des demandes clients
- **Client B2B** → Vue client avec suivi de commandes
- **Chef magasinier** → Dashboard logistique et préparation de commandes
- **Assistante administrative** → Vue facturation

*Note : Email et mot de passe ne sont pas vérifiés - remplissez simplement les champs et sélectionnez le profil.*

## 📱 Pages et fonctionnalités

### 1. Page de connexion
- Design premium avec statistiques clés
- Sélection du profil utilisateur
- Branding et positionnement haut de gamme

### 2. Dashboard Commercial
- Vue d'ensemble des demandes clients récentes
- Statistiques en temps réel (demandes, commandes, alertes)
- Alertes logistiques (ruptures, pics d'activité)
- Commandes en cours par statut

### 3. Catalogue Produits
- **40+ références** organisées par catégorie :
  - Coffrets Prestige (CP-001 à CP-006)
  - Mini Coffrets (MC-001 à MC-007)
  - Paniers Cadeaux (PC-001, PC-002)
  - Champagnes & Bulles (CB-001 à CB-004)
  - Coffrets Vins (CV-001 à CV-003)
  - Thés Premium (TP-001 à TP-003)
  - Épicerie Fine (EB-001 à EB-007)
  - Foie Gras (FG-001, FG-003, FG-004)

- **Filtres disponibles** :
  - Par catégorie
  - Par disponibilité
  - Recherche par référence ou nom

- **Fiche produit détaillée** :
  - Informations logistiques complètes
  - Stock physique, réservé, disponible
  - Commandes fournisseur en attente
  - Date limite de consommation (DLC) si applicable
  - Badges de disponibilité

### 4. Création de Commande
- Formulaire client complet (société, contact, canal)
- Panier avec sélection de produits
- **Synthèse de faisabilité** automatique :
  - Vérification des stocks disponibles
  - Proposition d'alternatives en cas de rupture
  - Délai de préparation estimé
- Calcul automatique HT / TTC

### 5. Suivi de Commande
- **Timeline visuelle** des 5 phases :
  1. Demande client & vérification
  2. Confirmation & réservation stocks
  3. Préparation & contrôle qualité
  4. Facturation & notification
  5. Livraison & clôture
- Statut actuel avec badge coloré
- Communication interne entre équipes
- Détail des articles commandés

### 6. Dashboard Magasinier
- Liste des commandes à préparer (priorités)
- Statuts : À préparer, En cours, Contrôle qualité, Prête
- Accès rapide au bon de préparation

### 7. Gestion des Stocks
- **Système d'alertes à 3 niveaux** :
  - 🚨 Niveau 3 (critique) : Rupture ou stock < stock de sécurité
  - ⚠ Niveau 2 (attention) : Stock faible
  - ℹ Niveau 1 (info) : À commander

- Tableau complet par référence :
  - Stock actuel, réservé, disponible
  - Stock de sécurité et point de commande
  - Catégorie ABC
  - Période (haute / creuse)

### 8. Traçabilité
- Journal complet de tous les mouvements :
  - Réceptions fournisseur
  - Prélèvements stock
  - Réservations
  - Corrections inventaire
  - Facturations
- Horodatage et utilisateur pour chaque action
- Vision audit complète

### 9. Dashboard Facturation (Admin)
- Commandes prêtes à facturer
- Génération de facture (simulation)

### 10. Dashboard Client
- Historique de commandes
- Suivi en temps réel
- Téléchargement factures

## 🎨 Design & Style

### Palette de couleurs
- **Primaire** : Or/Cuivré (#8B6914) - Haut de gamme
- **Secondaire** : Bordeaux (#8B2635) - Prestige
- **Accent** : Or foncé (#B8860B) - Luxe
- **Succès** : Vert (#2D8B4E)
- **Attention** : Orange (#D97706)
- **Danger** : Rouge (#DC2626)

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne)

### Composants premium
- Cartes avec ombres subtiles
- Animations fluides et micro-interactions
- Badges colorés pour les statuts
- Timeline visuelle avec marqueurs animés
- Modales avec backdrop blur
- Gradients et effets premium

## 📊 Données simulées

Toutes les données sont stockées dans `data.js` :

- **PRODUCTS** : 40 produits avec stocks, prix, disponibilités
- **ORDERS** : Commandes exemples avec timeline
- **STOCK_MOVEMENTS** : Historique de mouvements
- **USERS** : Profils utilisateurs (4 types)

Les fonctions helper incluses :
- `getProduct(id)` : Récupérer un produit
- `getProductAvailability(product)` : Calculer la disponibilité
- `getStockAlertLevel(product)` : Niveau d'alerte stock

## 🔧 Navigation et interactions

### Navigation principale
Utilise la fonction `navigateTo(pageName)` pour changer de page :
```javascript
navigateTo('catalog')           // Catalogue
navigateTo('create-order')      // Nouvelle commande
navigateTo('stock-management')  // Gestion stocks
navigateTo('traceability')      // Traçabilité
```

### Ajout au panier
```javascript
addToCart(productId, quantity)  // Ajouter un produit
```

### Filtres catalogue
Les filtres sont réactifs et filtrent en temps réel :
- Catégorie
- Disponibilité
- Recherche textuelle

## 📸 Captures d'écran recommandées

Pour votre rapport de conseil, capturez :

1. **Page de connexion** - Branding premium
2. **Dashboard commercial** - Vue d'ensemble
3. **Catalogue** - Grille de produits avec filtres
4. **Fiche produit** - Informations logistiques détaillées
5. **Création de commande** - Avec synthèse de faisabilité
6. **Timeline de commande** - Processus en 5 phases
7. **Gestion des stocks** - Avec alertes à 3 niveaux
8. **Traçabilité** - Journal des mouvements
9. **Dashboard magasinier** - Préparations
10. **Vue client** - Suivi de commande

## 🎯 Points clés du processus métier illustré

### Processus de commande (5 phases)
1. **Phase 1-2** : Demande client → Vérification faisabilité → Offre ferme
2. **Phase 3** : Stock réservé → Bon de préparation → Contrôle qualité
3. **Phase 4** : Facturation (uniquement si commande prête)
4. **Phase 5** : Livraison → Clôture

### Gestion des stocks autonome
- 3 niveaux d'alertes visuelles
- Stock de sécurité vs Point de commande
- Commandes fournisseur en attente
- Gestion FIFO avec DLC

### Traçabilité complète
- Chaque action tracée avec horodatage
- Utilisateur responsable identifié
- Audit trail complet

## 🌐 Compatibilité navigateurs

- ✅ Chrome (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 📝 Notes techniques

- **Responsive** : Adapté desktop (optimisé pour captures) et mobile
- **Pas de dépendances** : HTML/CSS/JS vanilla uniquement
- **Données en dur** : Aucun backend requis
- **Stockage** : Utilise la mémoire du navigateur (volatile)

## 🔄 Personnalisation

### Modifier les produits
Éditez `data.js` - tableau `PRODUCTS`

### Ajouter des commandes
Éditez `data.js` - tableau `ORDERS`

### Changer les couleurs
Éditez `styles.css` - variables CSS dans `:root`

### Ajouter des pages
1. Créez la structure HTML dans `index.html`
2. Ajoutez le style dans `styles.css`
3. Implémentez la logique dans `app.js`

## ✨ Fonctionnalités avancées

### Filtrage intelligent
Les filtres se combinent pour affiner la recherche

### Disponibilité dynamique
Calcul automatique : Stock physique - Réservations = Disponible

### Alternatives automatiques
En cas de rupture, le système propose des produits similaires

### Timeline interactive
Marqueurs animés pour les étapes en cours

## 🎓 Utilisation pour rapport de conseil

Cette maquette est conçue pour illustrer :
- ✅ Un processus métier clair et structuré
- ✅ Une gestion des stocks rigoureuse
- ✅ Une traçabilité complète
- ✅ Une expérience utilisateur premium B2B
- ✅ Des alertes proactives
- ✅ Une vision multi-profils (commercial, logistique, admin, client)

## 📧 Support

Pour toute question sur l'utilisation de cette maquette, référez-vous à ce document ou consultez les commentaires dans le code source.

---

**PRODALIM** - L'excellence au service de vos relations d'affaires 🎁
# prodalim
