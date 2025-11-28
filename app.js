// Global State
let currentUser = null;
let currentUserType = null;
let currentOrderCart = [];
let currentView = 'login-page';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Setup login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Setup navigation links
    document.addEventListener('click', (e) => {
        if (e.target.matches('.nav-link')) {
            e.preventDefault();
            const page = e.target.dataset.page;
            if (page) navigateTo(page);
        }
    });

    // Handle URL hash navigation
    window.addEventListener('hashchange', handleHashChange);

    // Load initial page from hash or default to login
    handleHashChange();
}

// Handle hash-based routing
function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove #

    if (!hash) {
        // No hash, stay on current page or go to login
        if (!currentView || currentView === 'login-page') {
            navigateTo('login-page', false);
        }
        return;
    }

    // Auto-login based on hash if not logged in
    if (!currentUser) {
        autoLogin(hash);
    }

    // Navigate to the page from hash
    navigateTo(hash, false);
}

// Auto-login based on page type
function autoLogin(pageName) {
    if (pageName === 'stock-management') {
        currentUserType = 'magasinier';
        currentUser = USERS.magasinier;
    } else if (pageName.includes('commercial') || pageName === 'create-order') {
        currentUserType = 'commercial';
        currentUser = USERS.commercial;
    } else if (pageName.includes('client')) {
        currentUserType = 'client';
        currentUser = USERS.client;
    } else if (pageName.includes('warehouse')) {
        currentUserType = 'magasinier';
        currentUser = USERS.magasinier;
    } else if (pageName.includes('admin')) {
        currentUserType = 'admin';
        currentUser = USERS.admin;
    } else if (pageName === 'catalog' || pageName === 'traceability') {
        // Default to commercial for catalog and traceability
        currentUserType = 'commercial';
        currentUser = USERS.commercial;
    }
}

// ==================== Authentication ====================

function handleLogin(e) {
    e.preventDefault();
    const userType = document.getElementById('user-type').value;

    if (!userType) {
        alert('Veuillez sélectionner votre profil');
        return;
    }

    currentUserType = userType;
    currentUser = USERS[userType];

    // Navigate to appropriate dashboard
    switch(userType) {
        case 'commercial':
            navigateTo('commercial-dashboard');
            break;
        case 'client':
            navigateTo('client-dashboard');
            break;
        case 'magasinier':
            navigateTo('warehouse-dashboard');
            break;
        case 'admin':
            navigateTo('admin-dashboard');
            break;
    }
}

function logout() {
    currentUser = null;
    currentUserType = null;
    currentOrderCart = [];
    navigateTo('login-page');
}

// ==================== Navigation ====================

function navigateTo(pageName, updateHash = true) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    currentView = pageName;

    // Update URL hash
    if (updateHash && pageName !== 'login-page') {
        window.location.hash = pageName;
    } else if (updateHash && pageName === 'login-page') {
        window.location.hash = '';
    }

    // Show the requested page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');

        // Load page-specific content
        switch(pageName) {
            case 'catalog':
                loadCatalog();
                break;
            case 'commercial-dashboard':
                loadCommercialDashboard();
                break;
            case 'client-dashboard':
                loadClientDashboard();
                break;
            case 'warehouse-dashboard':
                loadWarehouseDashboard();
                break;
            case 'admin-dashboard':
                loadAdminDashboard();
                break;
            case 'stock-management':
                loadStockManagement();
                break;
            case 'traceability':
                loadTraceability();
                break;
            case 'create-order':
                loadCreateOrder();
                break;
        }
    } else {
        console.error('Page not found:', pageName);
    }
}

// ==================== Catalog Page ====================

function loadCatalog() {
    const catalogPage = document.getElementById('catalog');
    if (!catalogPage || catalogPage.querySelector('#product-grid')) {
        if (catalogPage && catalogPage.querySelector('#product-grid')) {
            renderProductGrid();
        }
        return;
    }

    // Inject catalog HTML structure
    catalogPage.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link" onclick="navigateTo('${currentUserType}-dashboard'); return false;">Tableau de bord</a>
                <a href="#" class="nav-link active">Catalogue</a>
                <a href="#" class="nav-link" onclick="navigateTo('create-order'); return false;">Nouvelle commande</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <div>
                    <h1>Catalogue produits</h1>
                    <p style="color: var(--gray-600); margin-top: 0.5rem;">Explorez nos 40+ références premium</p>
                </div>
            </div>

            <div class="card" style="margin-bottom: 1.5rem;">
                <div class="catalog-filters">
                    <div class="filter-group">
                        <label>Catégorie</label>
                        <select id="category-filter" onchange="filterCatalog()">
                            <option value="">Toutes les catégories</option>
                            <option value="prestige">Coffrets Prestige</option>
                            <option value="mini">Mini Coffrets</option>
                            <option value="panier">Paniers Cadeaux</option>
                            <option value="champagne">Champagnes</option>
                            <option value="vin">Coffrets Vins</option>
                            <option value="the">Thés Premium</option>
                            <option value="epicerie">Épicerie Fine</option>
                            <option value="foiegras">Foie Gras</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Disponibilité</label>
                        <select id="availability-filter" onchange="filterCatalog()">
                            <option value="">Toutes</option>
                            <option value="available">Disponible</option>
                            <option value="low_stock">Stock faible</option>
                            <option value="reserved">Stock réservé</option>
                            <option value="out_of_stock">Rupture</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Recherche</label>
                        <input type="text" id="search-filter" placeholder="Référence ou nom..." oninput="filterCatalog()" />
                    </div>
                </div>
            </div>

            <div id="product-grid" class="product-grid"></div>
        </div>
    `;

    renderProductGrid();
}

function renderProductGrid(products = PRODUCTS) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => {
        const availability = getProductAvailability(product);
        const available = product.stock - product.reserved;

        return `
            <div class="product-card" onclick="openProductDetail('${product.id}')">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" />
                    ${product.tags.filter(t => t).map(tag =>
                        `<span class="product-tag ${tag === 'Best seller' ? 'tag-bestseller' : 'tag-default'}">${tag}</span>`
                    ).join('')}
                </div>
                <div class="product-info">
                    <div class="product-ref">${product.id}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-category">${product.categoryLabel}</div>
                    <div class="product-price">${product.price.toFixed(2)} € HT</div>
                    <div class="product-stock">
                        <span class="badge ${availability.badgeClass}">${availability.label}</span>
                        <span class="stock-count">${available > 0 ? `${available} dispo` : availability.message}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterCatalog() {
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const availabilityFilter = document.getElementById('availability-filter')?.value || '';
    const searchFilter = document.getElementById('search-filter')?.value.toLowerCase() || '';

    let filtered = PRODUCTS;

    if (categoryFilter) {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }

    if (availabilityFilter) {
        filtered = filtered.filter(p => {
            const avail = getProductAvailability(p);
            return avail.status === availabilityFilter;
        });
    }

    if (searchFilter) {
        filtered = filtered.filter(p =>
            p.id.toLowerCase().includes(searchFilter) ||
            p.name.toLowerCase().includes(searchFilter)
        );
    }

    renderProductGrid(filtered);
}

function openProductDetail(productId) {
    const product = getProduct(productId);
    if (!product) return;

    const availability = getProductAvailability(product);
    const available = product.stock - product.reserved;

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeProductDetail()"></div>
        <div class="modal-container">
            <div class="modal-header">
                <h2>${product.name}</h2>
                <button class="modal-close" onclick="closeProductDetail()">×</button>
            </div>
            <div class="modal-body">
                <div class="product-detail-grid">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}" />
                        <div class="product-tags">
                            ${product.tags.filter(t => t).map(tag =>
                                `<span class="badge badge-gold">${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="product-detail-info">
                        <div class="product-ref" style="font-size: 1rem; margin-bottom: 0.5rem;">${product.id}</div>
                        <div class="product-price" style="font-size: 2rem; margin-bottom: 1rem;">${product.price.toFixed(2)} € HT</div>
                        <p style="color: var(--gray-700); margin-bottom: 1.5rem;">${product.description}</p>

                        <div class="stock-info-detailed">
                            <h3 style="font-size: 1.125rem; margin-bottom: 1rem;">Informations logistiques</h3>
                            <div class="stock-detail-grid">
                                <div class="stock-detail-item">
                                    <span class="stock-label">Stock physique</span>
                                    <span class="stock-value">${product.stock}</span>
                                </div>
                                <div class="stock-detail-item">
                                    <span class="stock-label">Quantités réservées</span>
                                    <span class="stock-value">${product.reserved}</span>
                                </div>
                                <div class="stock-detail-item">
                                    <span class="stock-label">Disponible</span>
                                    <span class="stock-value" style="color: ${available > 0 ? 'var(--success)' : 'var(--danger)'}; font-weight: 700;">${Math.max(0, available)}</span>
                                </div>
                                <div class="stock-detail-item">
                                    <span class="stock-label">Stock de sécurité</span>
                                    <span class="stock-value">${product.security}</span>
                                </div>
                            </div>

                            ${product.incomingOrders.length > 0 ? `
                                <div class="incoming-orders" style="margin-top: 1rem; padding: 1rem; background: var(--gray-50); border-radius: var(--radius);">
                                    <strong style="display: block; margin-bottom: 0.5rem;">📦 Commandes fournisseur en attente</strong>
                                    ${product.incomingOrders.map(order => `
                                        <div style="font-size: 0.875rem; color: var(--gray-700);">
                                            ${order.quantity} unités - Arrivée prévue le ${order.date}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}

                            ${product.dlc ? `
                                <div class="dlc-info" style="margin-top: 1rem; padding: 0.75rem; background: rgba(217, 119, 6, 0.1); border-radius: var(--radius); border-left: 3px solid var(--warning);">
                                    <strong style="font-size: 0.875rem;">⚠ DLC: ${product.dlc}</strong>
                                </div>
                            ` : ''}

                            <div class="availability-badge-large" style="margin-top: 1rem;">
                                <span class="badge ${availability.badgeClass}" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
                                    ${availability.label}
                                </span>
                                <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--gray-600);">
                                    ${availability.message}
                                </p>
                            </div>
                        </div>

                        <div class="modal-actions" style="margin-top: 2rem;">
                            <button class="btn btn-primary btn-full" onclick="addToCart('${product.id}', 1); closeProductDetail();">
                                Ajouter à la commande
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeProductDetail() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.remove();
}

// ==================== Order Creation ====================

function loadCreateOrder() {
    const orderPage = document.getElementById('create-order');
    if (!orderPage) return;

    orderPage.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link" onclick="navigateTo('${currentUserType}-dashboard'); return false;">Tableau de bord</a>
                <a href="#" class="nav-link" onclick="navigateTo('catalog'); return false;">Catalogue</a>
                <a href="#" class="nav-link active">Nouvelle commande</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <h1>Nouvelle demande client</h1>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('${currentUserType}-dashboard')">Annuler</button>
                    <button class="btn btn-primary" onclick="sendOffer()">Envoyer l'offre au client</button>
                </div>
            </div>

            <div class="order-creation-grid">
                <div class="card">
                    <div class="card-header"><h2>Informations client</h2></div>
                    <form id="client-info-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label>Société *</label>
                                <input type="text" id="client-company" placeholder="Nom de la société" required />
                            </div>
                            <div class="form-group">
                                <label>Contact *</label>
                                <input type="text" id="client-contact" placeholder="Nom du contact" required />
                            </div>
                            <div class="form-group">
                                <label>Email *</label>
                                <input type="email" id="client-email" placeholder="contact@entreprise.fr" required />
                            </div>
                            <div class="form-group">
                                <label>Téléphone</label>
                                <input type="tel" id="client-phone" placeholder="01 23 45 67 89" />
                            </div>
                            <div class="form-group">
                                <label>Canal de commande *</label>
                                <select id="order-channel" required>
                                    <option value="">Sélectionner...</option>
                                    <option value="telephone">Téléphone</option>
                                    <option value="email">Email</option>
                                    <option value="fax">Fax</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Date de livraison souhaitée</label>
                                <input type="date" id="delivery-date" />
                            </div>
                        </div>
                    </form>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h2>Produits sélectionnés</h2>
                        <button class="btn btn-sm btn-primary" onclick="navigateTo('catalog')">
                            <span class="icon">+</span> Parcourir le catalogue
                        </button>
                    </div>
                    <div id="order-items-list"></div>
                </div>

                <div class="card" id="feasibility-card">
                    <div class="card-header"><h2>Synthèse de faisabilité</h2></div>
                    <div id="feasibility-summary"></div>
                </div>

                <div class="card">
                    <div class="card-header"><h2>Récapitulatif</h2></div>
                    <div class="order-summary">
                        <div class="summary-line">
                            <span>Total HT</span>
                            <span class="summary-value" id="order-total-ht">0,00 €</span>
                        </div>
                        <div class="summary-line">
                            <span>TVA (20%)</span>
                            <span class="summary-value" id="order-tva">0,00 €</span>
                        </div>
                        <div class="summary-line total">
                            <span>Total TTC</span>
                            <span class="summary-value" id="order-total-ttc">0,00 €</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    updateOrderDisplay();
}

function addToCart(productId, quantity = 1) {
    const existing = currentOrderCart.find(item => item.productId === productId);

    if (existing) {
        existing.quantity += quantity;
    } else {
        currentOrderCart.push({ productId, quantity });
    }

    updateOrderDisplay();
}

function removeFromCart(productId) {
    currentOrderCart = currentOrderCart.filter(item => item.productId !== productId);
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const container = document.getElementById('order-items-list');
    if (!container) return;

    if (currentOrderCart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Aucun produit sélectionné</p>
                <p style="font-size: 0.875rem; color: var(--gray-500);">Parcourez le catalogue pour ajouter des produits</p>
            </div>
        `;
        updateFeasibilitySummary();
        updateOrderTotals();
        return;
    }

    container.innerHTML = `
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Référence</th>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix unit. HT</th>
                        <th>Total HT</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${currentOrderCart.map(item => {
                        const product = getProduct(item.productId);
                        const availability = getProductAvailability(product);
                        const available = product.stock - product.reserved;
                        const total = product.price * item.quantity;

                        return `
                            <tr>
                                <td><strong>${product.id}</strong></td>
                                <td>${product.name}</td>
                                <td>
                                    <input type="number" value="${item.quantity}" min="1"
                                           onchange="updateCartQuantity('${product.id}', this.value)"
                                           style="width: 70px; padding: 0.25rem; border: 1px solid var(--gray-300); border-radius: var(--radius);" />
                                </td>
                                <td>${product.price.toFixed(2)} €</td>
                                <td><strong>${total.toFixed(2)} €</strong></td>
                                <td>
                                    <span class="badge ${availability.badgeClass}">${availability.label}</span>
                                    ${available < item.quantity ? '<br><small style="color: var(--danger);">Quantité insuffisante!</small>' : ''}
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-danger" onclick="removeFromCart('${product.id}')">Retirer</button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;

    updateFeasibilitySummary();
    updateOrderTotals();
}

function updateCartQuantity(productId, newQuantity) {
    const item = currentOrderCart.find(i => i.productId === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        updateOrderDisplay();
    }
}

function updateFeasibilitySummary() {
    const container = document.getElementById('feasibility-summary');
    if (!container) return;

    if (currentOrderCart.length === 0) {
        container.innerHTML = '<p style="color: var(--gray-500);">Ajoutez des produits pour voir la synthèse de faisabilité</p>';
        return;
    }

    let allAvailable = true;
    let issues = [];

    currentOrderCart.forEach(item => {
        const product = getProduct(item.productId);
        const available = product.stock - product.reserved;

        if (available < item.quantity) {
            allAvailable = false;
            issues.push({
                product: product.name,
                requested: item.quantity,
                available: Math.max(0, available),
                alternatives: PRODUCTS.filter(p =>
                    p.category === product.category &&
                    p.id !== product.id &&
                    (p.stock - p.reserved) >= item.quantity
                ).slice(0, 2)
            });
        }
    });

    if (allAvailable) {
        container.innerHTML = `
            <div class="alert-item alert-info">
                <div class="alert-icon">✓</div>
                <div class="alert-content">
                    <strong>Tous les produits sont disponibles</strong>
                    <p>Commande réalisable avec préparation sous 48h</p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="alert-item alert-warning">
                <div class="alert-icon">⚠</div>
                <div class="alert-content">
                    <strong>Certains produits nécessitent une attention</strong>
                </div>
            </div>
            ${issues.map(issue => `
                <div style="margin-top: 1rem; padding: 1rem; background: var(--gray-50); border-radius: var(--radius);">
                    <strong>${issue.product}</strong>
                    <p style="font-size: 0.875rem; color: var(--gray-700); margin: 0.5rem 0;">
                        Demandé: ${issue.requested} | Disponible: ${issue.available}
                    </p>
                    ${issue.alternatives.length > 0 ? `
                        <p style="font-size: 0.875rem; margin-top: 0.5rem;"><strong>Alternatives disponibles:</strong></p>
                        <ul style="font-size: 0.875rem; margin: 0.5rem 0; padding-left: 1.5rem;">
                            ${issue.alternatives.map(alt => `<li>${alt.id} - ${alt.name}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            `).join('')}
        `;
    }
}

function updateOrderTotals() {
    let totalHT = 0;

    currentOrderCart.forEach(item => {
        const product = getProduct(item.productId);
        totalHT += product.price * item.quantity;
    });

    const tva = totalHT * 0.20;
    const totalTTC = totalHT + tva;

    const htEl = document.getElementById('order-total-ht');
    const tvaEl = document.getElementById('order-tva');
    const ttcEl = document.getElementById('order-total-ttc');

    if (htEl) htEl.textContent = `${totalHT.toFixed(2)} €`;
    if (tvaEl) tvaEl.textContent = `${tva.toFixed(2)} €`;
    if (ttcEl) ttcEl.textContent = `${totalTTC.toFixed(2)} €`;
}

function sendOffer() {
    if (currentOrderCart.length === 0) {
        alert('Veuillez ajouter au moins un produit à la commande');
        return;
    }

    const company = document.getElementById('client-company')?.value;
    if (!company) {
        alert('Veuillez renseigner les informations client');
        return;
    }

    alert('Offre envoyée au client avec succès!');
    currentOrderCart = [];
    navigateTo('commercial-dashboard');
}

// ==================== Dashboard Loaders ====================

function loadCommercialDashboard() {
    // Dashboard is already in HTML, just ensure it's visible
}

function loadClientDashboard() {
    const page = document.getElementById('client-dashboard');
    if (!page) return;

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link active">Mes commandes</a>
                <a href="#" class="nav-link" onclick="navigateTo('catalog'); return false;">Catalogue</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.company}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <h1>Mes commandes</h1>
            </div>

            <div class="card">
                <div class="card-header"><h2>Commandes en cours</h2></div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>N° Commande</th>
                                <th>Date</th>
                                <th>Montant HT</th>
                                <th>Statut</th>
                                <th>Livraison prévue</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ORDERS.filter(o => o.client.name === currentUser.company).map(order => `
                                <tr>
                                    <td><strong>${order.id}</strong></td>
                                    <td>${order.date}</td>
                                    <td>${order.totalHT.toFixed(2)} €</td>
                                    <td><span class="badge badge-info">${getOrderStatusLabel(order.status)}</span></td>
                                    <td>${order.deliveryDate}</td>
                                    <td>
                                        <button class="btn btn-sm btn-secondary" onclick="viewOrderTracking('${order.id}')">Suivre</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadWarehouseDashboard() {
    const page = document.getElementById('warehouse-dashboard');
    if (!page) return;

    const ordersToPrep = ORDERS.filter(o => ['reserved', 'in_preparation'].includes(o.status));

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link active">Préparations</a>
                <a href="#" class="nav-link" onclick="navigateTo('stock-management'); return false;">Gestion stocks</a>
                <a href="#" class="nav-link" onclick="navigateTo('traceability'); return false;">Traçabilité</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <h1>Commandes à préparer</h1>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('stock-management')">
                        <span class="icon">📊</span> Gestion des stocks
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Priorité</th>
                                <th>N° Commande</th>
                                <th>Client</th>
                                <th>Date promesse</th>
                                <th>Articles</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ordersToPrep.map((order, idx) => `
                                <tr>
                                    <td><span class="badge ${idx === 0 ? 'badge-danger' : 'badge-gray'}">${idx === 0 ? 'URGENT' : 'Normal'}</span></td>
                                    <td><strong>${order.id}</strong></td>
                                    <td>${order.client.name}</td>
                                    <td>${order.deliveryDate}</td>
                                    <td>${order.items.length} articles</td>
                                    <td><span class="badge ${order.status === 'in_preparation' ? 'badge-warning' : 'badge-info'}">${getOrderStatusLabel(order.status)}</span></td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" onclick="prepareOrder('${order.id}')">
                                            ${order.status === 'reserved' ? 'Commencer' : 'Continuer'}
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadAdminDashboard() {
    const page = document.getElementById('admin-dashboard');
    if (!page) return;

    const ordersToInvoice = ORDERS.filter(o => o.status === 'ready');

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link active">Facturation</a>
                <a href="#" class="nav-link" onclick="navigateTo('traceability'); return false;">Traçabilité</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <h1>Commandes à facturer</h1>
            </div>

            <div class="card">
                <div class="card-header"><h2>Commandes prêtes - En attente de facturation</h2></div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>N° Commande</th>
                                <th>Client</th>
                                <th>Date</th>
                                <th>Montant HT</th>
                                <th>Montant TTC</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray-500);">
                                    Aucune commande prête à facturer pour le moment
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==================== Stock Management ====================

// Données pour période creuse vs haute
const STOCK_PERIOD_DATA = {
    creuse: {
        label: 'Période Creuse (Janvier - Octobre)',
        adjustments: {
            'CP-002': { stockSecurite: 380, pointCommande: 650, qteReappro: 1200, consomMoy: 127 },
            'MC-007': { stockSecurite: 320, pointCommande: 550, qteReappro: 1000, consomMoy: 89 },
            'EB-003': { stockSecurite: 400, pointCommande: 700, qteReappro: 800, consomMoy: 56 },
            'PC-002': { stockSecurite: 340, pointCommande: 600, qteReappro: 1000, consomMoy: 94 },
            'FG-003': { stockSecurite: 15, pointCommande: 25, qteReappro: 40, consomMoy: 0.6 }
        }
    },
    haute: {
        label: 'Période Haute (Novembre - Décembre)',
        adjustments: {
            'CP-002': { stockSecurite: 1500, pointCommande: 2500, qteReappro: 3000, consomMoy: 479 },
            'MC-007': { stockSecurite: 1200, pointCommande: 1800, qteReappro: 2400, consomMoy: 333 },
            'EB-003': { stockSecurite: 1456, pointCommande: 2000, qteReappro: 2500, consomMoy: 208 },
            'PC-002': { stockSecurite: 1275, pointCommande: 1900, qteReappro: 2550, consomMoy: 354 },
            'FG-003': { stockSecurite: 15, pointCommande: 25, qteReappro: 40, consomMoy: 2 }
        }
    }
};

let currentPeriod = 'creuse';

function getAdjustedStockData(product, period = currentPeriod) {
    const adjustment = STOCK_PERIOD_DATA[period].adjustments[product.id];
    if (adjustment) {
        return {
            ...product,
            security: adjustment.stockSecurite,
            reorderPoint: adjustment.pointCommande,
            qteReappro: adjustment.qteReappro,
            consomMoy: adjustment.consomMoy,
            delai: 2
        };
    }
    return {
        ...product,
        qteReappro: product.reorderPoint * 1.5,
        consomMoy: product.reorderPoint / 30,
        delai: 7
    };
}

function getStockPercentage(stock, pointCommande) {
    return Math.min(100, (stock / pointCommande) * 100);
}

function getStockBarClass(percentage) {
    if (percentage < 40) return 'critical';
    if (percentage < 70) return 'warning';
    return 'ok';
}

function getAlerteMessage(alertLevel) {
    switch(alertLevel) {
        case 3: return '🚨 ALERTE CRITIQUE : Stock sous le seuil de sécurité. Commande urgente requise.';
        case 2: return '⚠ ATTENTION : Approche du stock de sécurité. Prévoir réapprovisionnement.';
        case 1: return 'ℹ INFO : Point de commande atteint. Commande suggérée.';
        default: return '';
    }
}

function getDetailedStockStatus(product, period = currentPeriod) {
    const adjusted = getAdjustedStockData(product, period);
    const available = product.stock - product.reserved;

    if (product.stock === 0) return { level: 3, status: 'critique', label: 'RUPTURE TOTALE' };
    if (product.stock < adjusted.security) return { level: 3, status: 'critique', label: 'CRITIQUE' };
    if (product.stock <= adjusted.reorderPoint) return { level: 2, status: 'attention', label: 'ATTENTION' };
    if (available <= product.reorderPoint) return { level: 1, status: 'info', label: 'À SURVEILLER' };
    return { level: 0, status: 'ok', label: 'NORMAL' };
}

function changePeriod(newPeriod) {
    currentPeriod = newPeriod;
    loadStockManagement();
}

function loadStockManagement() {
    const page = document.getElementById('stock-management');
    if (!page) return;

    const adjustedProducts = PRODUCTS.map(p => ({
        ...p,
        adjusted: getAdjustedStockData(p, currentPeriod),
        statusInfo: getDetailedStockStatus(p, currentPeriod)
    })).sort((a, b) => b.statusInfo.level - a.statusInfo.level);

    const criticalCount = adjustedProducts.filter(p => p.statusInfo.level === 3).length;
    const warningCount = adjustedProducts.filter(p => p.statusInfo.level === 2).length;
    const okCount = adjustedProducts.filter(p => p.statusInfo.level === 0).length;
    const tauxService = ((PRODUCTS.length - criticalCount) / PRODUCTS.length * 100).toFixed(1);

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link" onclick="navigateTo('warehouse-dashboard'); return false;">Préparations</a>
                <a href="#" class="nav-link active">Gestion stocks</a>
                <a href="#" class="nav-link" onclick="navigateTo('traceability'); return false;">Traçabilité</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <div>
                    <h1>Tableau de Bord Gestion des Stocks</h1>
                    <p style="color: var(--gray-600); margin-top: 0.5rem;">Système de gestion optimisé avec alertes automatiques en temps réel</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('warehouse-dashboard')">
                        <span class="icon">←</span> Retour aux préparations
                    </button>
                </div>
            </div>

            <!-- Period Selector -->
            <div class="period-selector-card">
                <label for="period-select">Période d'activité :</label>
                <select id="period-select" onchange="changePeriod(this.value)">
                    <option value="creuse" ${currentPeriod === 'creuse' ? 'selected' : ''}>Période Creuse (Janvier - Octobre)</option>
                    <option value="haute" ${currentPeriod === 'haute' ? 'selected' : ''}>Période Haute (Novembre - Décembre)</option>
                </select>
            </div>

            <!-- Stats Dashboard -->
            <div class="stock-stats-grid">
                <div class="stock-stat-card critical">
                    <div class="stock-stat-label">Alertes Critiques</div>
                    <div class="stock-stat-value">${criticalCount}</div>
                </div>
                <div class="stock-stat-card warning">
                    <div class="stock-stat-label">Alertes Attention</div>
                    <div class="stock-stat-value">${warningCount}</div>
                </div>
                <div class="stock-stat-card ok">
                    <div class="stock-stat-label">Stocks Normaux</div>
                    <div class="stock-stat-value">${okCount}</div>
                </div>
                <div class="stock-stat-card info">
                    <div class="stock-stat-label">Taux de Service</div>
                    <div class="stock-stat-value">${tauxService}%</div>
                </div>
            </div>

            <!-- Detailed Stock Table -->
            <div class="card">
                <div class="table-container">
                    <table class="stock-detail-table">
                        <thead>
                            <tr>
                                <th>Référence</th>
                                <th>Produit</th>
                                <th class="text-center">Statut</th>
                                <th class="text-right">Stock Actuel</th>
                                <th class="text-right">Stock Sécurité</th>
                                <th class="text-right">Point Commande</th>
                                <th>Niveau Stock</th>
                                <th>Action Suggérée</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${adjustedProducts.map(p => {
                                const percentage = getStockPercentage(p.stock, p.adjusted.reorderPoint);
                                const barClass = getStockBarClass(percentage);
                                const alertMessage = getAlerteMessage(p.statusInfo.level);

                                return `
                                    <tr>
                                        <td><span class="ref-code">${p.id}</span></td>
                                        <td>
                                            <strong>${p.name}</strong>
                                            <div class="stock-small-text">
                                                Délai livraison: ${p.adjusted.delai}j | Consommation moy.: ${p.adjusted.consomMoy} u/jour
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <span class="status-badge status-${p.statusInfo.status}">${p.statusInfo.label}</span>
                                        </td>
                                        <td class="text-right"><strong>${p.stock}</strong> unités</td>
                                        <td class="text-right">${p.adjusted.security}</td>
                                        <td class="text-right">${p.adjusted.reorderPoint}</td>
                                        <td>
                                            <div class="stock-progress-bar">
                                                <div class="stock-progress-fill stock-progress-${barClass}" style="width: ${percentage}%"></div>
                                                <div class="stock-progress-text">${Math.round(percentage)}%</div>
                                            </div>
                                        </td>
                                        <td>
                                            ${p.statusInfo.level > 0
                                                ? `<button class="btn-stock-action btn-stock-${p.statusInfo.status}" onclick="alert('Commande de ${Math.round(p.adjusted.qteReappro)} unités de ${p.id} - ${p.name}')">
                                                    Commander ${Math.round(p.adjusted.qteReappro)} unités
                                                   </button>`
                                                : '<span class="no-action-text">Aucune action requise</span>'}
                                        </td>
                                    </tr>
                                    ${alertMessage ? `
                                        <tr class="alert-row ${p.statusInfo.level === 3 ? 'alert-row-critical' : 'alert-row-warning'}">
                                            <td colspan="8">
                                                <div class="alert-row-text">${alertMessage}</div>
                                            </td>
                                        </tr>
                                    ` : ''}
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Footer Note -->
            <div class="stock-footer-note">
                <strong>Note :</strong> Ce système automatisé génère les alertes en temps réel selon les paramètres définis.
                Les règles de réapprovisionnement s'adaptent automatiquement à la période d'activité (creuse/haute saison).
                Les stocks sont mis à jour instantanément lors de chaque préparation de commande.
            </div>
        </div>
    `;
}

// ==================== Traceability ====================

function loadTraceability() {
    const page = document.getElementById('traceability');
    if (!page) return;

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link" onclick="navigateTo('${currentUserType}-dashboard'); return false;">Tableau de bord</a>
                <a href="#" class="nav-link active">Traçabilité</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <h1>Traçabilité & Journal des mouvements</h1>
                <p style="color: var(--gray-600); margin-top: 0.5rem;">Historique complet de tous les mouvements de stock et actions</p>
            </div>

            <div class="card">
                <div class="card-header"><h2>Mouvements récents</h2></div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Date & Heure</th>
                                <th>Utilisateur</th>
                                <th>Action</th>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Commentaire</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${STOCK_MOVEMENTS.map(movement => `
                                <tr>
                                    <td style="font-size: 0.875rem;">${movement.date}</td>
                                    <td><strong>${movement.user}</strong></td>
                                    <td>
                                        <span class="badge ${getActionBadgeClass(movement.action)}">
                                            ${movement.action}
                                        </span>
                                    </td>
                                    <td><strong>${movement.product}</strong></td>
                                    <td style="color: ${movement.quantity > 0 ? 'var(--success)' : movement.quantity < 0 ? 'var(--danger)' : 'var(--gray-700)'}; font-weight: 600;">
                                        ${movement.quantity > 0 ? '+' : ''}${movement.quantity}
                                    </td>
                                    <td style="font-size: 0.875rem; color: var(--gray-600);">${movement.comment}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==================== Helper Functions ====================

function getOrderStatusLabel(status) {
    const labels = {
        'pending': 'En étude',
        'reserved': 'Stock réservé',
        'in_preparation': 'En préparation',
        'ready': 'Prête à livrer',
        'invoiced': 'Facturée',
        'delivered': 'Livrée'
    };
    return labels[status] || status;
}

function getActionBadgeClass(action) {
    if (action.includes('Réception')) return 'badge-success';
    if (action.includes('Prélèvement')) return 'badge-warning';
    if (action.includes('Réservation')) return 'badge-info';
    if (action.includes('Correction')) return 'badge-danger';
    if (action.includes('Facturation')) return 'badge-purple';
    return 'badge-gray';
}

function viewOrderTracking(orderId) {
    // Navigate to order tracking page with order details
    navigateTo('order-tracking');
    displayOrderTracking(orderId);
}

function displayOrderTracking(orderId) {
    const order = ORDERS.find(o => o.id === orderId);
    if (!order) return;

    const page = document.getElementById('order-tracking');
    if (!page) return;

    page.innerHTML = `
        <nav class="navbar">
            <div class="navbar-brand"><h1 class="brand-logo-small">PRODALIM</h1></div>
            <div class="navbar-menu">
                <a href="#" class="nav-link" onclick="navigateTo('${currentUserType}-dashboard'); return false;">Tableau de bord</a>
                <a href="#" class="nav-link active">Suivi commande</a>
            </div>
            <div class="navbar-user">
                <span class="user-name">${currentUser.name}</span>
                <span class="user-role">${currentUser.role}</span>
                <button class="btn-logout" onclick="logout()">Déconnexion</button>
            </div>
        </nav>

        <div class="container">
            <div class="page-header">
                <div>
                    <h1>Suivi de commande <span style="color: var(--primary);">${order.id}</span></h1>
                    <p style="color: var(--gray-600); margin-top: 0.5rem;">Client: ${order.client.name}</p>
                </div>
                <div class="header-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('${currentUserType}-dashboard')">Retour</button>
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h2>Statut actuel</h2></div>
                <div style="padding: 1rem; text-align: center;">
                    <span class="badge badge-info" style="font-size: 1rem; padding: 0.75rem 1.5rem;">
                        ${getOrderStatusLabel(order.status)}
                    </span>
                    <p style="margin-top: 1rem; color: var(--gray-600);">Livraison prévue le ${order.deliveryDate}</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h2>Timeline de la commande</h2></div>
                <div class="timeline">
                    ${order.timeline.map((event, idx) => `
                        <div class="timeline-item ${event.status === 'completed' ? 'completed' : event.status === 'in_progress' ? 'in-progress' : 'pending'}">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <strong>${event.action}</strong>
                                    <span class="timeline-date">${event.date}</span>
                                </div>
                                <div class="timeline-meta">
                                    <span class="timeline-user">${event.user}</span> - <span>${event.role}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h2>Détails de la commande</h2></div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Référence</th>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix unit. HT</th>
                                <th>Total HT</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${order.items.map(item => {
                                const product = getProduct(item.productId);
                                return `
                                    <tr>
                                        <td><strong>${product.id}</strong></td>
                                        <td>${product.name}</td>
                                        <td>${item.quantity}</td>
                                        <td>${item.price.toFixed(2)} €</td>
                                        <td><strong>${(item.price * item.quantity).toFixed(2)} €</strong></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="4" style="text-align: right; font-weight: 600;">Total HT</td>
                                <td><strong>${order.totalHT.toFixed(2)} €</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function prepareOrder(orderId) {
    alert('Fonctionnalité de préparation - Vue détaillée du bon de préparation pour ' + orderId);
}
