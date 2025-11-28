# Guide de Navigation - PRODALIM

## 🔑 Accès direct aux pages (sans connexion)

Vous pouvez accéder directement aux différentes pages en modifiant le JavaScript dans la console du navigateur ou en modifiant temporairement le code.

## 📍 Pages disponibles et leurs IDs

### Méthode 1 : Via la Console JavaScript (RECOMMANDÉ)

Ouvrez la console de votre navigateur (F12) et tapez :

```javascript
// Dashboard Commercial
navigateTo('commercial-dashboard')

// Catalogue Produits
navigateTo('catalog')

// Création de Commande
navigateTo('create-order')

// Suivi de Commande
navigateTo('order-tracking')
viewOrderTracking('CMD-2025-0847')  // Avec une commande spécifique

// Dashboard Client
navigateTo('client-dashboard')

// Dashboard Magasinier
navigateTo('warehouse-dashboard')

// Gestion des Stocks
navigateTo('stock-management')

// Traçabilité
navigateTo('traceability')

// Dashboard Admin (Facturation)
navigateTo('admin-dashboard')

// Retour à la page de connexion
navigateTo('login-page')
```

### Méthode 2 : Simuler une connexion rapide

Dans la console :

```javascript
// Se connecter comme Commercial
currentUserType = 'commercial';
currentUser = USERS.commercial;
navigateTo('commercial-dashboard');

// Se connecter comme Client
currentUserType = 'client';
currentUser = USERS.client;
navigateTo('client-dashboard');

// Se connecter comme Magasinier
currentUserType = 'magasinier';
currentUser = USERS.magasinier;
navigateTo('warehouse-dashboard');

// Se connecter comme Admin
currentUserType = 'admin';
currentUser = USERS.admin;
navigateTo('admin-dashboard');
```

### Méthode 3 : Modifier l'URL avec un Hash (Alternative)

Vous pouvez créer une version avec routing par hash. Ajoutez ce code dans la console :

```javascript
// Fonction helper pour naviguer par hash
window.location.hash = '#commercial-dashboard';
window.location.hash = '#catalog';
window.location.hash = '#stock-management';
// etc.
```

## 🎯 Scénarios de Capture d'Écran

### Scénario 1 : Vue Commercial (Sophie Martin)
```javascript
currentUserType = 'commercial';
currentUser = USERS.commercial;
navigateTo('commercial-dashboard');
```

**Pages accessibles :**
- `commercial-dashboard` - Tableau de bord
- `catalog` - Catalogue produits
- `create-order` - Nouvelle commande
- `stock-management` - Gestion stocks
- `traceability` - Traçabilité
- `order-tracking` - Suivi d'une commande

### Scénario 2 : Vue Client (Catherine Bernard)
```javascript
currentUserType = 'client';
currentUser = USERS.client;
navigateTo('client-dashboard');
```

**Pages accessibles :**
- `client-dashboard` - Mes commandes
- `catalog` - Catalogue (consultation)
- `order-tracking` - Suivi de mes commandes

### Scénario 3 : Vue Magasinier (Marc Dubois)
```javascript
currentUserType = 'magasinier';
currentUser = USERS.magasinier;
navigateTo('warehouse-dashboard');
```

**Pages accessibles :**
- `warehouse-dashboard` - Préparations
- `stock-management` - Gestion stocks
- `traceability` - Traçabilité

### Scénario 4 : Vue Admin (Julie Moreau)
```javascript
currentUserType = 'admin';
currentUser = USERS.admin;
navigateTo('admin-dashboard');
```

**Pages accessibles :**
- `admin-dashboard` - Facturation
- `traceability` - Traçabilité
- `order-tracking` - Suivi commandes

## 🖼️ Captures d'Écran Recommandées

### 1. Page de Connexion
```javascript
navigateTo('login-page');
```
**Capture :** Design premium, statistiques, formulaire de connexion

### 2. Dashboard Commercial
```javascript
currentUserType = 'commercial';
currentUser = USERS.commercial;
navigateTo('commercial-dashboard');
```
**Capture :** Stats, demandes récentes, alertes logistiques, commandes par statut

### 3. Catalogue Produits - Vue d'ensemble
```javascript
navigateTo('catalog');
```
**Capture :** Grille de produits, filtres, badges de disponibilité

### 4. Catalogue Produits - Filtres
```javascript
navigateTo('catalog');
// Puis dans la console, simuler un filtre :
document.getElementById('category-filter').value = 'prestige';
filterCatalog();
```
**Capture :** Catalogue filtré sur Coffrets Prestige

### 5. Fiche Produit Détaillée
```javascript
navigateTo('catalog');
// Puis cliquer sur un produit OU dans la console :
openProductDetail('CP-002');  // Coffret Signature Truffes & Champagne (en rupture)
// ou
openProductDetail('CP-001');  // Coffret Essentiel (disponible)
```
**Capture :** Modal avec infos logistiques, stock, DLC, alternatives

### 6. Création de Commande - Panier vide
```javascript
currentOrderCart = [];
navigateTo('create-order');
```
**Capture :** Formulaire client + panier vide

### 7. Création de Commande - Avec produits
```javascript
currentOrderCart = [
    { productId: 'CP-001', quantity: 15 },
    { productId: 'CP-004', quantity: 10 },
    { productId: 'MC-001', quantity: 10 }
];
navigateTo('create-order');
```
**Capture :** Panier rempli + synthèse de faisabilité

### 8. Création de Commande - Avec rupture
```javascript
currentOrderCart = [
    { productId: 'CP-002', quantity: 5 },  // En rupture !
    { productId: 'FG-003', quantity: 10 }   // Stock faible
];
navigateTo('create-order');
```
**Capture :** Alertes de rupture + propositions d'alternatives

### 9. Suivi de Commande - Timeline
```javascript
viewOrderTracking('CMD-2025-0847');
```
**Capture :** Timeline 5 phases, statut actuel, détails commande

### 10. Suivi de Commande - En préparation
```javascript
viewOrderTracking('CMD-2025-0852');
```
**Capture :** Commande en cours de préparation

### 11. Dashboard Magasinier
```javascript
currentUserType = 'magasinier';
currentUser = USERS.magasinier;
navigateTo('warehouse-dashboard');
```
**Capture :** Liste des préparations avec priorités

### 12. Gestion des Stocks - Vue d'ensemble
```javascript
navigateTo('stock-management');
```
**Capture :** Alertes du jour + tableau complet des stocks

### 13. Gestion des Stocks - Alertes critiques
```javascript
navigateTo('stock-management');
```
**Capture :** Focus sur les alertes niveau 2 et 3 (ruptures)

### 14. Traçabilité
```javascript
navigateTo('traceability');
```
**Capture :** Journal complet des mouvements avec horodatage

### 15. Dashboard Client
```javascript
currentUserType = 'client';
currentUser = USERS.client;
navigateTo('client-dashboard');
```
**Capture :** Vue client avec historique de commandes

## 🎨 Astuces pour de Belles Captures

### Afficher un produit spécifique en rupture
```javascript
navigateTo('catalog');
openProductDetail('CP-002');  // Signature Truffes & Champagne - RUPTURE
```

### Afficher un produit avec DLC proche
```javascript
openProductDetail('FG-003');  // Médaillon Foie Gras - DLC courte
```

### Afficher un produit disponible et populaire
```javascript
openProductDetail('CP-001');  // Coffret Essentiel - Best Seller
```

### Voir les alertes de stock critiques
```javascript
navigateTo('stock-management');
// Les produits avec alertes sont automatiquement mis en évidence
```

## 🔧 Actions Utiles

### Ajouter des produits au panier
```javascript
addToCart('CP-001', 5);
addToCart('MC-005', 10);
navigateTo('create-order');
```

### Vider le panier
```javascript
currentOrderCart = [];
updateOrderDisplay();
```

### Changer de profil utilisateur à la volée
```javascript
currentUserType = 'commercial';
currentUser = USERS.commercial;
// Puis naviguez où vous voulez
```

## 📊 Liste Complète des IDs de Pages

```
login-page              → Page de connexion
commercial-dashboard    → Dashboard assistante commerciale
client-dashboard        → Dashboard client B2B
warehouse-dashboard     → Dashboard chef magasinier
admin-dashboard         → Dashboard assistante administrative
catalog                 → Catalogue produits
product-detail          → (via modal, utiliser openProductDetail('ID'))
create-order           → Création de commande
order-tracking         → Suivi de commande
stock-management       → Gestion des stocks
traceability          → Traçabilité et journal
```

## 🎬 Workflow Complet pour Démo

```javascript
// 1. Connexion comme commercial
currentUserType = 'commercial';
currentUser = USERS.commercial;
navigateTo('commercial-dashboard');
// CAPTURE 1: Dashboard

// 2. Aller au catalogue
navigateTo('catalog');
// CAPTURE 2: Catalogue

// 3. Voir un produit
openProductDetail('CP-001');
// CAPTURE 3: Fiche produit

// 4. Créer une commande
currentOrderCart = [
    { productId: 'CP-001', quantity: 15 },
    { productId: 'MC-005', quantity: 20 }
];
navigateTo('create-order');
// CAPTURE 4: Nouvelle commande

// 5. Voir le suivi
viewOrderTracking('CMD-2025-0847');
// CAPTURE 5: Timeline

// 6. Changer de profil → Magasinier
currentUserType = 'magasinier';
currentUser = USERS.magasinier;
navigateTo('warehouse-dashboard');
// CAPTURE 6: Préparations

// 7. Gestion des stocks
navigateTo('stock-management');
// CAPTURE 7: Alertes stock

// 8. Traçabilité
navigateTo('traceability');
// CAPTURE 8: Journal des mouvements
```

---

**Note :** Toutes ces commandes sont à taper dans la **Console JavaScript** de votre navigateur (F12 → Console).
