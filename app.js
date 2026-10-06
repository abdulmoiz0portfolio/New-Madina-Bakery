/**
 * New Madina Bakery - "The King of Rusk"
 * E-Commerce Interaction & State Management
 * Strict Anti-AI Slop Architectural Implementation
 */

// Complete Catalog Database with all requested items
const PRODUCTS_DATA = [
  // Breads & Rusks
  {
    id: 'peanut-rusk',
    name: 'Peanut Rusk',
    category: 'rusks',
    categoryLabel: 'Breads & Rusks',
    price: 320,
    priceFormatted: 'Rs. 320',
    description: 'Crisp double-baked golden rusk studded with crunchy roasted peanuts. Madina\'s pride.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'Signature'
  },
  {
    id: 'butter-rusk',
    name: 'Butter Rusk',
    category: 'rusks',
    categoryLabel: 'Breads & Rusks',
    price: 340,
    priceFormatted: 'Rs. 340',
    description: 'Rich pure butter infused tea toast. Melts delicately when dipped in traditional Karak Chai.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'Bestseller'
  },
  {
    id: 'milky-rusk',
    name: 'Milky Rusk',
    category: 'rusks',
    categoryLabel: 'Breads & Rusks',
    price: 300,
    priceFormatted: 'Rs. 300',
    description: 'Subtly sweet milk-kneaded rusks baked to a crisp caramel tone. Karachi morning staple.',
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Popular'
  },
  {
    id: 'tasty-cake-rusk',
    name: 'Tasty Cake Rusk',
    category: 'rusks',
    categoryLabel: 'Breads & Rusks',
    price: 380,
    priceFormatted: 'Rs. 380',
    description: 'Dense, aromatic sponge cake slices baked crisp with hints of cardamom and vanilla.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'Classic'
  },
  {
    id: 'fresh-bread',
    name: 'Fresh Bread',
    category: 'rusks',
    categoryLabel: 'Breads & Rusks',
    price: 180,
    priceFormatted: 'Rs. 180',
    description: 'Golden crust sliced bread baked fresh each morning at 6:00 AM. Soft and airy texture.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Daily Fresh'
  },

  // Cakes
  {
    id: 'ice-cake-3lb',
    name: 'Ice Cake (3 Pound)',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 2100,
    priceFormatted: 'Rs. 2,100',
    description: 'Double-layered moist vanilla sponge filled and frosted with chilled fresh dairy cream.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: '3 Pound'
  },
  {
    id: 'ice-cake-5lb',
    name: 'Ice Cake (5 Pound)',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 3400,
    priceFormatted: 'Rs. 3,400',
    description: 'Grand celebration tier cake with rich dairy cream, white chocolate curls, and cherries.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: '5 Pound'
  },
  {
    id: 'mango-cake',
    name: 'Mango Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 2300,
    priceFormatted: 'Rs. 2,300',
    description: 'Prepared with velvety Alphonso/Chaunsa mango puree and whipped cream ribbons.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Seasonal'
  },
  {
    id: 'three-milky-cake',
    name: 'Three Milky Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 2400,
    priceFormatted: 'Rs. 2,400',
    description: 'Authentic Tres Leches sponge thoroughly soaked in evaporated, condensed, and heavy whole milk.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'House Special'
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple Cake with picture',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 2600,
    priceFormatted: 'Rs. 2,600',
    description: 'Classic pineapple cream cake customized with your edible photo print topper.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Custom Photo'
  },
  {
    id: 'ice-cream-cake',
    name: 'Ice Cream Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 2800,
    priceFormatted: 'Rs. 2,800',
    description: 'Chilled fusion cake layered with premium gelato, chocolate sponge, and hot fudge glaze.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Frozen'
  },

  // Savory & Fast Food
  {
    id: 'chicken-cheese-patties',
    name: 'Yummy Chicken Cheese Patties',
    category: 'savory',
    categoryLabel: 'Savory & Fast Food',
    price: 150,
    priceFormatted: 'Rs. 150',
    description: 'Golden flaky puff pastry filled with finely shredded spiced chicken and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'Hot Item'
  },
  {
    id: 'potato-patties',
    name: 'Potato Patties',
    category: 'savory',
    categoryLabel: 'Savory & Fast Food',
    price: 90,
    priceFormatted: 'Rs. 90',
    description: 'Buttery puff envelope filled with cumin-tempered mashed potatoes, green chilies, and coriander.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Veg'
  },
  {
    id: 'chicken-bbq-patties',
    name: 'Special Chicken BBQ Patties',
    category: 'savory',
    categoryLabel: 'Savory & Fast Food',
    price: 160,
    priceFormatted: 'Rs. 160',
    description: 'Smoked tandoori shredded chicken encased in multi-layered crisp, golden pastry layers.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Spicy'
  },
  {
    id: 'fresh-pizza',
    name: 'Fresh Pizza',
    category: 'savory',
    categoryLabel: 'Savory & Fast Food',
    price: 450,
    priceFormatted: 'Rs. 450',
    description: 'Freshly baked pan pizza with seasoned chicken chunks, capsicum, olives, and melted cheddar.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Baked Fresh'
  },

  // Sweets
  {
    id: 'donuts',
    name: 'Donuts',
    category: 'sweets',
    categoryLabel: 'Sweets',
    price: 140,
    priceFormatted: 'Rs. 140',
    description: 'Soft yeast-raised bakery ring donuts coated in glossy dark Belgian chocolate glaze.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Fresh'
  },
  {
    id: 'butter-biscuits',
    name: 'Butter Biscuits',
    category: 'sweets',
    categoryLabel: 'Sweets',
    price: 480,
    priceFormatted: 'Rs. 480 / box',
    description: 'Traditional melt-in-the-mouth salted sweet butter biscuits. Crisp and deeply buttery.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isSignature: true,
    tag: 'Karachi Favorite'
  },
  {
    id: 'butter-pastries',
    name: 'Butter Pastries',
    category: 'sweets',
    categoryLabel: 'Sweets',
    price: 170,
    priceFormatted: 'Rs. 170',
    description: 'Crisp sugar-glazed puff pastry layers filled with light vanilla diplomat cream.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    fallbackImg: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80',
    isSignature: false,
    tag: 'Classic'
  }
];

// Application State
const state = {
  selectedItems: new Map(), // Map of id -> product object
  activeCategory: 'all',
  searchQuery: ''
};

// DOM References
const productsGrid = document.getElementById('productsGrid');
const floatingPanel = document.getElementById('floatingCheckoutPanel');
const floatingDynamicSummary = document.getElementById('floatingDynamicSummary');
const floatingSubtext = document.getElementById('floatingSubtext');
const btnWhatsappOrder = document.getElementById('btnWhatsappOrder');
const btnCallOrder = document.getElementById('btnCallOrder');
const btnClearSelection = document.getElementById('btnClearSelection');
const headerCartCount = document.getElementById('headerCartCount');
const categoryTabs = document.querySelectorAll('.category-tab-btn');
const searchInput = document.getElementById('searchInput');
const resultsStatusText = document.getElementById('resultsStatusText');
const previewDrawer = document.getElementById('previewDrawer');
const selectionTagsList = document.getElementById('selectionTagsList');

/**
 * Initialize Application
 */
function initApp() {
  renderProducts();
  setupEventListeners();
  updateCheckoutPanel();
}

/**
 * Filter and Return Products based on active category & search query
 */
function getFilteredProducts() {
  return PRODUCTS_DATA.filter(product => {
    const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' || 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

/**
 * Render Product Grid
 */
function renderProducts() {
  const filtered = getFilteredProducts();

  // Update counter display
  if (resultsStatusText) {
    resultsStatusText.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} items`;
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results-box">
        <h3>No matching bakery items found</h3>
        <p>Try searching for "Rusk", "Cake", "Patties", or select another category above.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => {
    const isSelected = state.selectedItems.has(product.id);
    return `
      <article class="product-card ${isSelected ? 'is-selected' : ''}" data-id="${product.id}">
        <div class="card-image-wrapper">
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.name)}" 
            class="product-image"
            loading="lazy"
            onerror="this.onerror=null; this.src=getSvgFallback('${escapeHtml(product.name)}');"
          />
          <span class="card-badge">${escapeHtml(product.categoryLabel)}</span>
          ${product.tag ? `<span class="card-signature-tag">${escapeHtml(product.tag)}</span>` : ''}
        </div>
        <div class="card-content">
          <span class="card-category-hint">${escapeHtml(product.categoryLabel)}</span>
          <h3 class="card-title">${escapeHtml(product.name)}</h3>
          <p class="card-description">${escapeHtml(product.description)}</p>
          <div class="card-meta-row">
            <div class="card-price-block">
              <span class="price-currency">Price</span>
              <span class="price-amount">${escapeHtml(product.priceFormatted)}</span>
            </div>
            <button 
              type="button" 
              class="btn-add-item ${isSelected ? 'is-added' : ''}" 
              data-id="${product.id}"
              aria-label="${isSelected ? 'Remove ' + escapeHtml(product.name) : 'Add ' + escapeHtml(product.name) + ' to selection'}"
            >
              ${isSelected ? '✓ Added' : '[ + ] Add Item'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Toggle Item Selection
 */
function toggleItemSelection(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  if (state.selectedItems.has(productId)) {
    state.selectedItems.delete(productId);
  } else {
    state.selectedItems.set(productId, product);
  }

  // Update visual state of matching card in DOM
  updateCardDOM(productId);

  // Update Floating Panel & Badges
  updateCheckoutPanel();
}

/**
 * Selectively update DOM for a specific product card to avoid full re-render flickering
 */
function updateCardDOM(productId) {
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card) return;

  const btn = card.querySelector('.btn-add-item');
  const isSelected = state.selectedItems.has(productId);

  if (isSelected) {
    card.classList.add('is-selected');
    if (btn) {
      btn.classList.add('is-added');
      btn.innerHTML = '✓ Added';
    }
  } else {
    card.classList.remove('is-selected');
    if (btn) {
      btn.classList.remove('is-added');
      btn.innerHTML = '[ + ] Add Item';
    }
  }
}

/**
 * Update Floating Checkout Panel State & URLs
 */
function updateCheckoutPanel() {
  const count = state.selectedItems.size;

  // Header badge
  if (headerCartCount) {
    headerCartCount.textContent = count;
  }

  // Exact prompt requirement:
  // "Inside the floating panel: Display a dynamic text summary: 'You have selected [X] items.'"
  if (count > 0) {
    const summaryText = `You have selected ${count} items.`;
    if (floatingDynamicSummary) {
      floatingDynamicSummary.textContent = summaryText;
    }

    // Build items summary list for WhatsApp URL
    const itemsList = Array.from(state.selectedItems.values());
    
    // Calculate estimated total price
    const totalPrice = itemsList.reduce((acc, cur) => acc + cur.price, 0);
    if (floatingSubtext) {
      floatingSubtext.textContent = `Est. Total: Rs. ${totalPrice.toLocaleString()} • Ready for instant dispatch`;
    }

    // Render Preview chips
    if (previewDrawer && selectionTagsList) {
      previewDrawer.classList.add('is-open');
      selectionTagsList.innerHTML = itemsList.map(item => `
        <span class="selection-chip">
          ${escapeHtml(item.name)}
          <span class="selection-chip-remove" data-remove-id="${item.id}" title="Remove item">✕</span>
        </span>
      `).join('');
    }

    /**
     * Exact WhatsApp Action Logic Required:
     * Redirect to: https://wa.me/923000000000?text=Hello, I need the following items: %0A- Item 1%0A- Item 2
     */
    const itemsFormatted = itemsList.map(item => `%0A- ${encodeURIComponent(item.name)}`).join('');
    const whatsappUrl = `https://wa.me/923000000000?text=Hello,%20I%20need%20the%20following%20items:${itemsFormatted}`;
    
    if (btnWhatsappOrder) {
      btnWhatsappOrder.href = whatsappUrl;
      btnWhatsappOrder.setAttribute('target', '_blank');
      btnWhatsappOrder.setAttribute('rel', 'noopener noreferrer');
    }

    /**
     * Exact Call Now Action Logic Required:
     * Trigger tel:+923000000000
     */
    if (btnCallOrder) {
      btnCallOrder.href = 'tel:+923000000000';
    }

    // Show floating panel
    floatingPanel.classList.add('is-active');
    floatingPanel.setAttribute('aria-hidden', 'false');

  } else {
    // Hide floating panel when 0 items selected
    floatingPanel.classList.remove('is-active');
    floatingPanel.setAttribute('aria-hidden', 'true');
    if (previewDrawer) {
      previewDrawer.classList.remove('is-open');
    }
  }
}

/**
 * Clear All Selections
 */
function clearAllSelections() {
  state.selectedItems.clear();
  // Update all cards in DOM
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.remove('is-selected');
    const btn = card.querySelector('.btn-add-item');
    if (btn) {
      btn.classList.remove('is-added');
      btn.innerHTML = '[ + ] Add Item';
    }
  });
  updateCheckoutPanel();
}

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Delegate Add Item button clicks on Products Grid
  productsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-item');
    if (btn) {
      const productId = btn.getAttribute('data-id');
      if (productId) {
        toggleItemSelection(productId);
      }
    }
  });

  // Delegate Remove Chip clicks inside Preview Drawer
  if (selectionTagsList) {
    selectionTagsList.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.selection-chip-remove');
      if (removeBtn) {
        const idToRemove = removeBtn.getAttribute('data-remove-id');
        if (idToRemove) {
          toggleItemSelection(idToRemove);
        }
      }
    });
  }

  // Clear Selection Button
  if (btnClearSelection) {
    btnClearSelection.addEventListener('click', () => {
      clearAllSelections();
    });
  }

  // Category Filter Tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.getAttribute('data-category') || 'all';
      renderProducts();
    });
  });

  // Search input with debounce
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Smooth scroll for hero Explore Menu button
  const exploreMenuBtn = document.getElementById('btnExploreMenu');
  if (exploreMenuBtn) {
    exploreMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const menuSection = document.getElementById('menuCatalog');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Scroll to menu on header cart click
  const headerCartBtn = document.getElementById('headerCartBtn');
  if (headerCartBtn) {
    headerCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (state.selectedItems.size > 0) {
        floatingPanel.scrollIntoView({ behavior: 'smooth' });
      } else {
        const menuSection = document.getElementById('menuCatalog');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}

/**
 * Utility: HTML Escaping
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Utility: Clean Anti-AI Slop SVG Bakery Fallback Generator
 */
function getSvgFallback(name) {
  const cleanName = escapeHtml(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250">
    <rect width="100%" height="100%" fill="#F3EFEA"/>
    <rect x="15" y="15" width="370" height="220" fill="none" stroke="#E2D8CC" stroke-width="2"/>
    <text x="50%" y="42%" text-anchor="middle" fill="#C5832B" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold">NEW MADINA BAKERY</text>
    <text x="50%" y="58%" text-anchor="middle" fill="#2C2C2C" font-family="'Inter', sans-serif" font-size="15" font-weight="600">${cleanName}</text>
    <text x="50%" y="74%" text-anchor="middle" fill="#8C8479" font-family="'Inter', sans-serif" font-size="11" letter-spacing="1">THE KING OF RUSK • FRESH DAILY</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Start app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initApp);
