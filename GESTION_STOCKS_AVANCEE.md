# 📊 Gestion des Stocks Avancée - Documentation

## 🎯 Vue d'ensemble

La nouvelle page de gestion des stocks offre un **tableau de bord complet** avec système d'alertes automatiques et adaptation dynamique aux périodes d'activité.

## 🔗 Accès Direct

```
file:///Users/mathieumagnin/Documents/pujol/index.html#stock-management
```

## ✨ Fonctionnalités Principales

### 1. Sélecteur de Période

Deux modes disponibles :
- **Période Creuse** (Janvier - Octobre) : Stocks et seuils normaux
- **Période Haute** (Novembre - Décembre) : Stocks et seuils ajustés pour la haute saison

**Les paramètres s'adaptent automatiquement** :
- Stock de sécurité augmenté
- Point de commande rehaussé
- Quantités de réapprovisionnement majorées
- Consommation moyenne recalculée

### 2. Dashboard de Statistiques

4 indicateurs clés :
- 🚨 **Alertes Critiques** : Produits en rupture ou sous le seuil de sécurité
- ⚠ **Alertes Attention** : Produits approchant le stock de sécurité
- ✅ **Stocks Normaux** : Produits avec niveau satisfaisant
- 📈 **Taux de Service** : Performance globale du stock

### 3. Tableau Détaillé des Stocks

Pour chaque produit :

**Informations affichées :**
- Référence produit (format monospace)
- Nom du produit
- Délai de livraison fournisseur
- Consommation moyenne journalière
- Statut visuel avec badge coloré
- Stock actuel en unités
- Stock de sécurité (seuil minimum)
- Point de commande (déclencheur de réappro)
- Barre de progression visuelle du niveau de stock
- Action suggérée (bouton de commande si nécessaire)

**Badges de Statut :**
- 🔴 **CRITIQUE** : Rupture totale ou stock < seuil de sécurité
- 🟠 **ATTENTION** : Stock proche du seuil de sécurité
- 🔵 **À SURVEILLER** : Point de commande atteint
- 🟢 **NORMAL** : Stock satisfaisant

### 4. Barres de Progression

Visualisation en temps réel du niveau de stock :
- **Rouge** : < 40% du point de commande (critique)
- **Orange** : 40-70% du point de commande (attention)
- **Vert** : > 70% du point de commande (ok)

Pourcentage affiché au centre de la barre.

### 5. Alertes Contextuelles

Messages d'alerte automatiques sous chaque produit nécessitant une action :

- **Niveau 3 (Critique)** :
  > 🚨 ALERTE CRITIQUE : Stock sous le seuil de sécurité. Commande urgente requise.

- **Niveau 2 (Attention)** :
  > ⚠ ATTENTION : Approche du stock de sécurité. Prévoir réapprovisionnement.

- **Niveau 1 (Info)** :
  > ℹ INFO : Point de commande atteint. Commande suggérée.

### 6. Boutons d'Action

Boutons colorés selon l'urgence :
- **Rouge** (Critique) : Action urgente requise
- **Orange** (Attention) : Action recommandée
- **Bleu** (Info) : Action suggérée

Au clic : Affiche la quantité suggérée à commander

## 📊 Exemples de Produits Configurés

### Période Creuse

| Produit | Stock Actuel | Stock Sécu | Point Cmd | Consomm/j |
|---------|--------------|------------|-----------|-----------|
| CP-002 | 380 | 380 | 650 | 127 |
| MC-007 | 520 | 320 | 550 | 89 |
| EB-003 | 1800 | 400 | 700 | 56 |

### Période Haute

| Produit | Stock Actuel | Stock Sécu | Point Cmd | Consomm/j |
|---------|--------------|------------|-----------|-----------|
| CP-002 | 380 | **1500** | **2500** | **479** |
| MC-007 | 520 | **1200** | **1800** | **333** |
| EB-003 | 1800 | **1456** | **2000** | **208** |

**Observation** : En période haute, les mêmes stocks deviennent critiques !

## 🎨 Design & Couleurs

### Palette Adaptée au Thème Premium

- **En-têtes de tableau** : Gris foncé (#333) avec texte blanc
- **Cartes de stats** : Fond blanc avec bordure colorée gauche
- **Badges** : Fond transparent coloré avec bordure
- **Barres de progression** : Dégradés selon le niveau
- **Boutons d'action** : Couleurs vives selon l'urgence

### Typographie

- **Références produit** : Courier New (monospace) en doré
- **Titres** : Playfair Display
- **Corps** : Inter
- **Chiffres stats** : Playfair Display grande taille

## 🔄 Logique de Calcul

### Niveau de Stock (%)

```javascript
percentage = (Stock Actuel / Point de Commande) * 100
```

### Classification des Alertes

```javascript
if (stock === 0) → Niveau 3 (CRITIQUE - Rupture totale)
else if (stock < stock_sécurité) → Niveau 3 (CRITIQUE)
else if (stock <= point_commande) → Niveau 2 (ATTENTION)
else if (disponible <= point_commande) → Niveau 1 (INFO)
else → Niveau 0 (NORMAL)
```

### Couleur de la Barre

```javascript
if (percentage < 40%) → Rouge (critical)
else if (percentage < 70%) → Orange (warning)
else → Vert (ok)
```

## 📸 Captures d'Écran Recommandées

### 1. Vue Période Creuse
Montre des stocks en situation normale avec quelques alertes

### 2. Vue Période Haute
Montre l'impact de la haute saison sur les alertes (plus de produits critiques)

### 3. Détail d'un Produit Critique
Focus sur une ligne avec :
- Badge CRITIQUE rouge
- Barre de progression rouge < 40%
- Message d'alerte en dessous
- Bouton rouge "Commander X unités"

### 4. Statistiques du Haut
Les 4 cartes de stats avec leurs chiffres et couleurs

### 5. Comparaison Avant/Après
Capture du même écran en période creuse puis en période haute pour montrer l'adaptation

## 🎓 Utilisation pour le Rapport

Cette page illustre :

✅ **Gestion proactive** : Alertes automatiques avant rupture
✅ **Adaptabilité** : Ajustement automatique période creuse/haute
✅ **Visualisation claire** : Codes couleurs, barres de progression
✅ **Actions guidées** : Suggestions de commandes avec quantités calculées
✅ **Traçabilité** : Informations détaillées (délais, consommation)
✅ **Performance** : Taux de service global affiché

## 🔧 Personnalisation

Pour ajouter d'autres produits aux ajustements de période, éditez `app.js` :

```javascript
const STOCK_PERIOD_DATA = {
    haute: {
        adjustments: {
            'VOTRE-REF': {
                stockSecurite: 1000,
                pointCommande: 1500,
                qteReappro: 2000,
                consomMoy: 200
            }
        }
    }
};
```

## 💡 Astuce Console

Pour changer de période via la console :

```javascript
changePeriod('haute')  // Passe en période haute
changePeriod('creuse') // Revient en période creuse
```

---

**PRODALIM** - Gestion intelligente des stocks pour une excellence opérationnelle
