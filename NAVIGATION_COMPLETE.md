# 🧭 Guide de Navigation Complet - PRODALIM

## 🎯 Accès aux Pages

### Option 1 : Navigation Intégrée (RECOMMANDÉ)

Utilisez l'application principale avec navigation complète :

```
file:///Users/mathieumagnin/Documents/pujol/index.html
```

**Depuis n'importe quelle page :**
- Utilisez le **menu de navigation** en haut
- Utilisez les **boutons dans les pages** (ex: "Gestion des stocks")
- Utilisez les **liens dans l'URL** avec le hash (#)

### Option 2 : Accès Direct par Hash

```
# Dashboards
file:///Users/mathieumagnin/Documents/pujol/index.html#commercial-dashboard
file:///Users/mathieumagnin/Documents/pujol/index.html#warehouse-dashboard
file:///Users/mathieumagnin/Documents/pujol/index.html#client-dashboard
file:///Users/mathieumagnin/Documents/pujol/index.html#admin-dashboard

# Pages Fonctionnelles
file:///Users/mathieumagnin/Documents/pujol/index.html#catalog
file:///Users/mathieumagnin/Documents/pujol/index.html#create-order
file:///Users/mathieumagnin/Documents/pujol/index.html#stock-management
file:///Users/mathieumagnin/Documents/pujol/index.html#traceability
file:///Users/mathieumagnin/Documents/pujol/index.html#order-tracking
```

## 🔄 Parcours Utilisateur par Profil

### 👔 Assistante Commerciale (Sophie Martin)

**Point d'entrée :**
```
file:///Users/mathieumagnin/Documents/pujol/index.html#commercial-dashboard
```

**Navigation disponible :**
- **Menu** : Tableau de bord | Catalogue | Nouvelle commande
- **Boutons** :
  - 📊 Gestion des stocks → Voir les alertes et niveaux
  - ➕ Nouvelle demande client → Créer une commande
- **Actions** :
  - Voir les demandes clients récentes
  - Consulter les alertes logistiques
  - Accéder au catalogue produits
  - Créer une nouvelle commande

### 👨‍🔧 Chef Magasinier (Marc Dubois)

**Point d'entrée :**
```
file:///Users/mathieumagnin/Documents/pujol/index.html#warehouse-dashboard
```

**Navigation disponible :**
- **Menu** : Préparations | Gestion stocks | Traçabilité
- **Boutons** :
  - 📊 Gestion des stocks → Tableau de bord complet
- **Actions** :
  - Voir les commandes à préparer
  - **Gérer les stocks** (période creuse/haute)
  - Consulter la traçabilité
  - Voir les alertes critiques

**Gestion des Stocks :**
```
file:///Users/mathieumagnin/Documents/pujol/index.html#stock-management
```

**Depuis cette page :**
- Sélecteur de période (Creuse / Haute)
- 4 statistiques clés (Critiques / Attention / OK / Taux service)
- Tableau complet avec barres de progression
- Boutons "Commander X unités" pour chaque produit en alerte
- Bouton "← Retour aux préparations"

### 👤 Client B2B (Catherine Bernard)

**Point d'entrée :**
```
file:///Users/mathieumagnin/Documents/pujol/index.html#client-dashboard
```

**Navigation disponible :**
- **Menu** : Mes commandes | Catalogue
- **Actions** :
  - Voir l'historique de commandes
  - Suivre une commande en cours
  - Consulter le catalogue

### 💼 Assistante Administrative (Julie Moreau)

**Point d'entrée :**
```
file:///Users/mathieumagnin/Documents/pujol/index.html#admin-dashboard
```

**Navigation disponible :**
- **Menu** : Facturation | Traçabilité
- **Actions** :
  - Facturer les commandes prêtes
  - Consulter la traçabilité

## 🎬 Workflow Complet - Magasinier

### Scénario : Gérer les stocks en période haute

1. **Connexion automatique** (via hash)
   ```
   file:///Users/mathieumagnin/Documents/pujol/index.html#warehouse-dashboard
   ```

2. **Voir les préparations en cours**
   - Liste des commandes à préparer
   - Priorités affichées

3. **Accéder à la gestion des stocks**
   - Clic sur le bouton "📊 Gestion des stocks"
   - OU clic sur "Gestion stocks" dans le menu
   - OU URL directe : `#stock-management`

4. **Analyser la situation**
   - Voir les 4 stats en haut (Critiques: 3, Attention: 5, etc.)
   - Changer en "Période Haute" dans le sélecteur

5. **Observer les changements**
   - Les alertes augmentent (plus de produits critiques)
   - Les seuils sont ajustés automatiquement
   - Les barres de progression changent de couleur

6. **Commander des produits**
   - Clic sur "Commander 1200 unités" pour CP-002
   - Clic sur "Commander 1000 unités" pour MC-007
   - etc.

7. **Revenir aux préparations**
   - Clic sur "← Retour aux préparations"
   - OU clic sur "Préparations" dans le menu

8. **Consulter la traçabilité**
   - Clic sur "Traçabilité" dans le menu
   - Voir tous les mouvements de stock

## 📊 Fonctionnalités Gestion des Stocks

### Sélecteur de Période
- **Période Creuse** : Stocks normaux, consommation faible
- **Période Haute** : Stocks augmentés, consommation élevée
- Changement en temps réel des alertes et seuils

### Statistiques Clés
1. **Alertes Critiques** (rouge) : Produits en rupture ou sous seuil de sécurité
2. **Alertes Attention** (orange) : Produits approchant le seuil
3. **Stocks Normaux** (vert) : Produits avec niveau satisfaisant
4. **Taux de Service** (bleu) : % de disponibilité globale

### Tableau Détaillé
Pour chaque produit :
- Référence (format code monospace doré)
- Nom + infos logistiques (délai, consommation/jour)
- Badge de statut coloré
- Stock actuel / Stock sécurité / Point commande
- **Barre de progression visuelle** avec %
- Bouton d'action si nécessaire

### Alertes Contextuelles
Messages automatiques sous chaque produit en alerte :
- 🚨 Critique : Rouge
- ⚠ Attention : Orange
- ℹ Info : Bleu

### Boutons d'Action
- **Rouge** : Commande urgente
- **Orange** : Commande recommandée
- **Bleu** : Commande suggérée
- Quantités pré-calculées selon la période

## 🔗 Liens Entre Pages

### Depuis Commercial Dashboard
- Catalogue → `navigateTo('catalog')`
- Nouvelle commande → `navigateTo('create-order')`
- Gestion stocks → `navigateTo('stock-management')`

### Depuis Warehouse Dashboard
- Gestion stocks → `navigateTo('stock-management')`
- Traçabilité → `navigateTo('traceability')`

### Depuis Stock Management
- Retour préparations → `navigateTo('warehouse-dashboard')`
- Traçabilité → `navigateTo('traceability')`

### Depuis n'importe où
- Déconnexion → `logout()` → Retour au login

## 🎨 Pour Captures d'Écran

### Workflow Recommandé

1. **Page de connexion**
   ```
   file:///Users/mathieumagnin/Documents/pujol/index.html
   ```

2. **Dashboard Magasinier**
   ```
   file:///Users/mathieumagnin/Documents/pujol/index.html#warehouse-dashboard
   ```
   → Capture avec bouton "Gestion des stocks"

3. **Gestion Stocks - Période Creuse**
   ```
   file:///Users/mathieumagnin/Documents/pujol/index.html#stock-management
   ```
   → Capture avec sélecteur sur "Creuse"

4. **Gestion Stocks - Période Haute**
   → Changer le sélecteur
   → Capture avec plus d'alertes critiques

5. **Détail d'une alerte**
   → Zoom sur une ligne rouge avec message critique

6. **Traçabilité**
   ```
   file:///Users/mathieumagnin/Documents/pujol/index.html#traceability
   ```

## ⚙️ Fonctions JavaScript Utiles

Ouvrez la console (F12) et tapez :

```javascript
// Changer de période
changePeriod('haute')
changePeriod('creuse')

// Naviguer
navigateTo('stock-management')
navigateTo('warehouse-dashboard')
navigateTo('traceability')

// Auto-login
currentUserType = 'magasinier'
currentUser = USERS.magasinier
```

---

✅ **Tous les boutons et liens fonctionnent maintenant !**
