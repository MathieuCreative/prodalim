# 🔗 Accès Direct aux Pages - URLs

Vous pouvez maintenant accéder directement aux pages via l'URL avec des **hash (#)** !

## 📍 URLs Directes

Copiez-collez ces URLs dans votre navigateur :

### Page de Connexion
```
file:///Users/mathieumagnin/Documents/pujol/index.html
```

### Dashboard Commercial
```
file:///Users/mathieumagnin/Documents/pujol/index.html#commercial-dashboard
```

### Catalogue Produits
```
file:///Users/mathieumagnin/Documents/pujol/index.html#catalog
```

### Création de Commande
```
file:///Users/mathieumagnin/Documents/pujol/index.html#create-order
```

### Gestion des Stocks
```
file:///Users/mathieumagnin/Documents/pujol/index.html#stock-management
```

### Traçabilité
```
file:///Users/mathieumagnin/Documents/pujol/index.html#traceability
```

### Dashboard Magasinier
```
file:///Users/mathieumagnin/Documents/pujol/index.html#warehouse-dashboard
```

### Dashboard Client
```
file:///Users/mathieumagnin/Documents/pujol/index.html#client-dashboard
```

### Dashboard Admin
```
file:///Users/mathieumagnin/Documents/pujol/index.html#admin-dashboard
```

### Suivi de Commande
```
file:///Users/mathieumagnin/Documents/pujol/index.html#order-tracking
```

## ✨ Auto-Login

Le système détecte automatiquement le profil utilisateur en fonction de la page :

- **Commercial** : `#commercial-dashboard`, `#create-order`, `#catalog`, `#traceability`
- **Magasinier** : `#warehouse-dashboard`, `#stock-management`
- **Client** : `#client-dashboard`
- **Admin** : `#admin-dashboard`

## 🎯 Raccourcis Clavier (dans le navigateur)

Une fois sur la page, vous pouvez aussi taper dans la console (F12) :

```javascript
// Aller au catalogue
window.location.hash = '#catalog'

// Aller à la gestion des stocks
window.location.hash = '#stock-management'

// etc.
```

## 📱 Partager un Lien

Vous pouvez partager ces URLs directement - le destinataire arrivera sur la bonne page !

---

**Note :** Les URLs utilisent le protocole `file://` car c'est un site local. Si vous mettez le site sur un serveur web, remplacez simplement par `https://votre-domaine.com/index.html#page`
