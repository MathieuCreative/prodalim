// Product Catalog Data
const PRODUCTS = [
    // Coffrets Prestige
    {
        id: 'CP-001',
        name: 'Coffret Prestige Essentiel',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 89.00,
        stock: 45,
        reserved: 12,
        security: 15,
        reorderPoint: 20,
        incomingOrders: [{supplier: 'Maison Gourmande', quantity: 30, date: '2025-12-05'}],
        dlc: '2026-02-28',
        tags: ['Best seller', '100% français'],
        description: 'Un coffret raffiné qui réunit les essentiels de la gastronomie française pour enchanter vos partenaires.',
        // Image : Coffret cadeau élégant
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'CP-002',
        name: 'Coffret Prestige Signature Truffes & Champagne',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 185.00,
        stock: 0,
        reserved: 8,
        security: 10,
        reorderPoint: 15,
        incomingOrders: [{supplier: 'Délices & Champagne', quantity: 25, date: '2025-12-02'}],
        dlc: '2026-01-31',
        tags: ['Édition limitée', 'Premium'],
        description: 'L\'alliance parfaite entre truffes d\'exception et champagne millésimé pour une expérience gustative inoubliable.',
        // Image : Champagne et ambiance festive (CORRIGÉE)
        image: 'https://images.unsplash.com/photo-1544473436-7dbcafda7e5d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'CP-003',
        name: 'Coffret Prestige Gourmandise Salée',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 125.00,
        stock: 28,
        reserved: 5,
        security: 12,
        reorderPoint: 18,
        incomingOrders: [],
        dlc: '2026-03-15',
        tags: ['100% français'],
        description: 'Une sélection de délices salés artisanaux pour les amateurs de saveurs authentiques et raffinées.',
        // Image : Planche apéritive gourmande (CORRIGÉE)
        image: 'https://images.unsplash.com/photo-1610892970063-47c3daf775db?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'CP-004',
        name: 'Coffret Prestige Chocolat & Douceurs',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 98.00,
        stock: 62,
        reserved: 18,
        security: 20,
        reorderPoint: 25,
        incomingOrders: [{supplier: 'Chocolaterie Artisanale', quantity: 40, date: '2025-12-08'}],
        dlc: '2026-04-30',
        tags: ['Best seller'],
        description: 'Un voyage gourmand à travers les meilleurs chocolats et confiseries haut de gamme.',
        // Image : Chocolats fins
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'CP-005',
        name: 'Coffret Prestige Grand Cru',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 210.00,
        stock: 18,
        reserved: 4,
        security: 8,
        reorderPoint: 12,
        incomingOrders: [],
        dlc: '2026-06-30',
        tags: ['Premium', 'Édition limitée'],
        description: 'Une composition exceptionnelle de produits grands crus pour les connaisseurs les plus exigeants.',
        // Image : Vin rouge élégant
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'CP-006',
        name: 'Coffret Prestige Chef Étoilé',
        category: 'prestige',
        categoryLabel: 'Coffret Prestige',
        price: 295.00,
        stock: 12,
        reserved: 6,
        security: 5,
        reorderPoint: 8,
        incomingOrders: [{supplier: 'Atelier du Chef', quantity: 15, date: '2025-12-10'}],
        dlc: '2026-02-28',
        tags: ['Édition limitée', 'Premium', 'Chef étoilé'],
        description: 'Une création exclusive en collaboration avec un chef étoilé, pour une expérience gastronomique d\'exception.',
        // Image : Plat gastronomique
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=300&q=80'
    },

    // ... (Le reste du tableau reste identique, à partir de Mini Coffrets) ...
    // Je remets la suite pour faciliter le copier-coller :
    
    // Mini Coffrets
    {
        id: 'MC-001',
        name: 'Mini Coffret Dégustation Chocolats',
        category: 'mini',
        categoryLabel: 'Mini Coffret',
        price: 32.00,
        stock: 150,
        reserved: 45,
        security: 50,
        reorderPoint: 70,
        incomingOrders: [{supplier: 'Chocolaterie Artisanale', quantity: 100, date: '2025-12-03'}],
        dlc: '2026-04-30',
        tags: ['Best seller'],
        description: 'Une sélection de chocolats fins pour découvrir l\'excellence chocolatière.',
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'MC-002',
        name: 'Mini Coffret Gourmand Sucré-Salé',
        category: 'mini',
        categoryLabel: 'Mini Coffret',
        price: 28.00,
        stock: 98,
        reserved: 22,
        security: 40,
        reorderPoint: 60,
        incomingOrders: [],
        dlc: '2026-03-31',
        tags: ['100% français'],
        description: 'Un équilibre parfait entre douceurs sucrées et saveurs salées raffinées.',
        image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'MC-003',
        name: 'Mini Coffret Découverte du Terroir',
        category: 'mini',
        categoryLabel: 'Mini Coffret',
        price: 35.00,
        stock: 72,
        reserved: 15,
        security: 30,
        reorderPoint: 45,
        incomingOrders: [{supplier: 'Producteurs Locaux', quantity: 60, date: '2025-12-06'}],
        dlc: '2026-05-31',
        tags: ['100% français', 'Terroir'],
        description: 'Un voyage à travers les terroirs français avec des produits d\'exception.',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'MC-005',
        name: 'Mini Coffret Pause Gourmande',
        category: 'mini',
        categoryLabel: 'Mini Coffret',
        price: 26.00,
        stock: 115,
        reserved: 35,
        security: 45,
        reorderPoint: 65,
        incomingOrders: [{supplier: 'Maison Gourmande', quantity: 80, date: '2025-12-04'}],
        dlc: '2026-06-30',
        tags: ['Best seller'],
        description: 'Le compagnon idéal pour une pause gourmande au bureau.',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'MC-006',
        name: 'Mini Coffret Café & Mignardises',
        category: 'mini',
        categoryLabel: 'Mini Coffret',
        price: 29.00,
        stock: 88,
        reserved: 20,
        security: 35,
        reorderPoint: 55,
        incomingOrders: [],
        dlc: '2026-05-31',
        tags: [''],
        description: 'Café d\'exception accompagné de mignardises raffinées.',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&h=300&q=80'
    },
    
    // Coffrets Vins
    {
        id: 'CV-001',
        name: 'Coffret Duo de Vins de Fête',
        category: 'vin',
        categoryLabel: 'Coffret Vin',
        price: 85.00,
        stock: 42,
        reserved: 14,
        security: 18,
        reorderPoint: 25,
        incomingOrders: [{supplier: 'Cave Prestige', quantity: 30, date: '2025-12-06'}],
        dlc: null,
        tags: ['100% français'],
        description: 'Deux grands vins soigneusement sélectionnés pour accompagner vos repas de fête.',
        image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'CV-002',
        name: 'Coffret Trio Grands Vins',
        category: 'vin',
        categoryLabel: 'Coffret Vin',
        price: 135.00,
        stock: 28,
        reserved: 9,
        security: 12,
        reorderPoint: 18,
        incomingOrders: [],
        dlc: null,
        tags: ['Premium', '100% français'],
        description: 'Trois grands crus français pour une dégustation d\'exception.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&h=300&q=80'
    },

    // Thés Premium
    {
        id: 'TP-001',
        name: 'Coffret Thés d\'Exception',
        category: 'the',
        categoryLabel: 'Thé Premium',
        price: 45.00,
        stock: 65,
        reserved: 20,
        security: 25,
        reorderPoint: 35,
        incomingOrders: [{supplier: 'Maison du Thé', quantity: 50, date: '2025-12-05'}],
        dlc: '2026-12-31',
        tags: [''],
        description: 'Une collection de thés rares du monde entier pour les amateurs de saveurs raffinées.',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'TP-002',
        name: 'Coffret Infusions Bien-Être',
        category: 'the',
        categoryLabel: 'Thé Premium',
        price: 38.00,
        stock: 78,
        reserved: 18,
        security: 30,
        reorderPoint: 45,
        incomingOrders: [],
        dlc: '2026-12-31',
        tags: ['Bien-être'],
        description: 'Des infusions bio et naturelles pour moments de détente et de bien-être.',
        image: 'https://images.unsplash.com/photo-1515696955266-4f67e13219e8?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'TP-003',
        name: 'Coffret Thés & Infusions Hiver',
        category: 'the',
        categoryLabel: 'Thé Premium',
        price: 42.00,
        stock: 52,
        reserved: 16,
        security: 22,
        reorderPoint: 32,
        incomingOrders: [{supplier: 'Maison du Thé', quantity: 40, date: '2025-12-07'}],
        dlc: '2026-12-31',
        tags: ['Saisonnalité'],
        description: 'Une sélection de thés et infusions aux saveurs réconfortantes de l\'hiver.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&h=300&q=80'
    },

    // Épicerie Fine & Biscuits
    {
        id: 'EB-001',
        name: 'Assortiment de Biscuits de Noël',
        category: 'epicerie',
        categoryLabel: 'Épicerie Fine',
        price: 28.00,
        stock: 105,
        reserved: 32,
        security: 40,
        reorderPoint: 60,
        incomingOrders: [{supplier: 'Biscuiterie Artisanale', quantity: 80, date: '2025-12-03'}],
        dlc: '2026-03-31',
        tags: ['Best seller', 'Tradition'],
        description: 'Des biscuits artisanaux aux saveurs traditionnelles de Noël.',
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'EB-004',
        name: 'Huiles & Vinaigres d\'Exception',
        category: 'epicerie',
        categoryLabel: 'Épicerie Fine',
        price: 48.00,
        stock: 42,
        reserved: 10,
        security: 18,
        reorderPoint: 28,
        incomingOrders: [{supplier: 'Domaine des Saveurs', quantity: 35, date: '2025-12-06'}],
        dlc: '2027-12-31',
        tags: ['Premium'],
        description: 'Une sélection d\'huiles et vinaigres d\'exception pour les gourmets.',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        id: 'EB-005',
        name: 'Assortiment de Chocolats Grands Crus',
        category: 'epicerie',
        categoryLabel: 'Épicerie Fine',
        price: 52.00,
        stock: 55,
        reserved: 18,
        security: 22,
        reorderPoint: 32,
        incomingOrders: [],
        dlc: '2026-06-30',
        tags: ['Premium', 'Grand Cru'],
        description: 'Chocolats grands crus du monde entier, sélection premium.',
        image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=400&h=300&q=80'
    },
    

    // Foies Gras
    {
        id: 'FG-001',
        name: 'Bloc de Foie Gras de Canard IGP',
        category: 'foiegras',
        categoryLabel: 'Foie Gras',
        price: 45.00,
        stock: 58,
        reserved: 20,
        security: 25,
        reorderPoint: 35,
        incomingOrders: [{supplier: 'Ferme du Sud-Ouest', quantity: 40, date: '2025-12-05'}],
        dlc: '2026-01-15',
        tags: ['IGP', '100% français'],
        description: 'Bloc de foie gras de canard IGP du Sud-Ouest, saveur authentique.',
        image: 'https://images.unsplash.com/photo-1758972574371-57cf8c42bae8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'FG-003',
        name: 'Médaillon de Foie Gras à la Figue',
        category: 'foiegras',
        categoryLabel: 'Foie Gras',
        price: 52.00,
        stock: 6,
        reserved: 8,
        security: 15,
        reorderPoint: 22,
        incomingOrders: [{supplier: 'Maison Gourmet', quantity: 35, date: '2025-12-01'}],
        dlc: '2025-12-20',
        tags: ['Premium', 'Création'],
        description: 'Médaillons de foie gras délicatement parfumés à la figue.',
        image: 'https://images.unsplash.com/photo-1585516458147-5ec89e1b0fd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'FG-004',
        name: 'Foie Gras Entier Tradition',
        category: 'foiegras',
        categoryLabel: 'Foie Gras',
        price: 68.00,
        stock: 0,
        reserved: 15,
        security: 18,
        reorderPoint: 25,
        incomingOrders: [{supplier: 'Ferme du Sud-Ouest', quantity: 30, date: '2025-11-28'}],
        dlc: '2026-01-31',
        tags: ['Premium', 'Tradition', '100% français'],
        description: 'Foie gras entier de canard, préparation traditionnelle d\'exception.',
        image: 'https://media.istockphoto.com/id/2200806839/fr/photo/butter-board-preparing-softened-butter-with-soft-cheese.jpg?s=1024x1024&w=is&k=20&c=LYufTjyVtkcA0BlAduomD-VPWTz-EMdelqiGBEhhuR8='
    }
];
// Orders Data
const ORDERS = [
    {
        id: 'CMD-2025-0847',
        client: {
            name: 'Groupe Bernard & Associés',
            contact: 'Mme Catherine Bernard',
            email: 'c.bernard@bernard-associes.fr',
            phone: '01 45 67 89 12'
        },
        date: '2025-11-27 14:20',
        channel: 'email',
        status: 'reserved',
        items: [
            { productId: 'CP-001', quantity: 15, price: 89.00 },
            { productId: 'CP-004', quantity: 10, price: 98.00 },
            { productId: 'MC-001', quantity: 10, price: 32.00 }
        ],
        totalHT: 2655.00,
        deliveryDate: '2025-12-05',
        timeline: [
            { date: '2025-11-27 14:20', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Demande client reçue par email', status: 'completed' },
            { date: '2025-11-27 14:45', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Vérification de faisabilité - Stock OK', status: 'completed' },
            { date: '2025-11-27 15:10', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Offre ferme envoyée au client', status: 'completed' },
            { date: '2025-11-27 16:30', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Confirmation client reçue - Stock réservé', status: 'completed' },
            { date: '2025-11-28 09:00', user: 'Marc Dubois', role: 'Chef magasinier', action: 'Préparation en attente', status: 'pending' }
        ]
    },
    {
        id: 'CMD-2025-0852',
        client: {
            name: 'Technologie Plus SA',
            contact: 'M. Laurent Petit',
            email: 'l.petit@technoplus.fr',
            phone: '04 78 45 12 36'
        },
        date: '2025-11-28 09:15',
        channel: 'telephone',
        status: 'in_preparation',
        items: [
            { productId: 'CP-005', quantity: 8, price: 210.00 },
            { productId: 'CB-001', quantity: 12, price: 68.00 },
            { productId: 'MC-005', quantity: 15, price: 26.00 }
        ],
        totalHT: 2886.00,
        deliveryDate: '2025-12-02',
        timeline: [
            { date: '2025-11-28 09:15', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Demande client par téléphone', status: 'completed' },
            { date: '2025-11-28 09:30', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Stock vérifié et réservé', status: 'completed' },
            { date: '2025-11-28 10:00', user: 'Sophie Martin', role: 'Assistante commerciale', action: 'Confirmation envoyée - commande validée', status: 'completed' },
            { date: '2025-11-28 10:30', user: 'Marc Dubois', role: 'Chef magasinier', action: 'Préparation commencée', status: 'in_progress' }
        ]
    }
];

// Stock Movements / Traceability
const STOCK_MOVEMENTS = [
    { date: '2025-11-28 10:30:15', user: 'Marc Dubois', action: 'Prélèvement stock', product: 'CP-005', quantity: -8, comment: 'Commande CMD-2025-0852' },
    { date: '2025-11-28 10:15:22', user: 'Marc Dubois', action: 'Prélèvement stock', product: 'CB-001', quantity: -12, comment: 'Commande CMD-2025-0852' },
    { date: '2025-11-28 09:45:10', user: 'Sophie Martin', action: 'Réservation stock', product: 'CP-005', quantity: 8, comment: 'Réservation CMD-2025-0852' },
    { date: '2025-11-28 09:45:08', user: 'Sophie Martin', action: 'Réservation stock', product: 'CB-001', quantity: 12, comment: 'Réservation CMD-2025-0852' },
    { date: '2025-11-28 09:00:45', user: 'Marc Dubois', action: 'Réception fournisseur', product: 'FG-004', quantity: 30, comment: 'Bon de livraison BL-2025-1156' },
    { date: '2025-11-27 16:30:18', user: 'Sophie Martin', action: 'Réservation stock', product: 'CP-001', quantity: 15, comment: 'Réservation CMD-2025-0847' },
    { date: '2025-11-27 16:30:16', user: 'Sophie Martin', action: 'Réservation stock', product: 'CP-004', quantity: 10, comment: 'Réservation CMD-2025-0847' },
    { date: '2025-11-27 14:15:32', user: 'Marc Dubois', action: 'Correction inventaire', product: 'EB-003', quantity: -2, comment: 'Casse détectée lors inventaire' },
    { date: '2025-11-27 11:20:05', user: 'Julie Moreau', action: 'Facturation', product: 'CP-003', quantity: 0, comment: 'Facture FA-2025-0821 éditée' },
    { date: '2025-11-27 09:30:22', user: 'Marc Dubois', action: 'Réception fournisseur', product: 'EB-001', quantity: 80, comment: 'Bon de livraison BL-2025-1142' },
    { date: '2025-11-26 16:45:10', user: 'Marc Dubois', action: 'Prélèvement stock', product: 'CP-001', quantity: -22, comment: 'Commande CMD-2025-0834' },
    { date: '2025-11-26 15:10:33', user: 'Sophie Martin', action: 'Réservation stock', product: 'CP-001', quantity: 22, comment: 'Réservation CMD-2025-0834' },
    { date: '2025-11-26 11:05:18', user: 'Marc Dubois', action: 'Réception fournisseur', product: 'MC-001', quantity: 100, comment: 'Bon de livraison BL-2025-1138' }
];

// User Data
const USERS = {
    commercial: { name: 'Sophie Martin', role: 'Assistante commerciale', email: 'sophie.martin@prodalim.fr' },
    client: { name: 'Catherine Bernard', role: 'Client B2B', company: 'Groupe Bernard & Associés', email: 'c.bernard@bernard-associes.fr' },
    magasinier: { name: 'Marc Dubois', role: 'Chef magasinier', email: 'marc.dubois@prodalim.fr' },
    admin: { name: 'Julie Moreau', role: 'Assistante administrative', email: 'julie.moreau@prodalim.fr' }
};

// Helper Functions
function getProduct(productId) {
    return PRODUCTS.find(p => p.id === productId);
}

function getProductAvailability(product) {
    const available = product.stock - product.reserved;

    if (product.stock === 0) {
        return {
            status: 'out_of_stock',
            label: 'Rupture de stock',
            badgeClass: 'badge-danger',
            message: product.incomingOrders.length > 0
                ? `Réappro prévu le ${product.incomingOrders[0].date}`
                : 'Rupture prolongée'
        };
    }

    if (available <= 0) {
        return {
            status: 'reserved',
            label: 'Stock réservé',
            badgeClass: 'badge-warning',
            message: product.incomingOrders.length > 0
                ? `Réappro prévu le ${product.incomingOrders[0].date}`
                : 'Stock entièrement réservé'
        };
    }

    if (product.stock <= product.reorderPoint) {
        return {
            status: 'low_stock',
            label: 'Stock faible',
            badgeClass: 'badge-warning',
            message: `${available} unités disponibles - Réappro recommandé`
        };
    }

    return {
        status: 'available',
        label: 'Disponible',
        badgeClass: 'badge-success',
        message: `${available} unités disponibles`
    };
}

function getStockAlertLevel(product) {
    if (product.stock === 0) return 3; // Critical
    if (product.stock < product.security) return 2; // Warning
    if (product.stock <= product.reorderPoint) return 1; // Info
    return 0; // OK
}

function getCategoryProducts(category) {
    if (!category) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}
