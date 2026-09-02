:root {
  --bg-cream: #FDFBF7;
  --surface-white: #FFFFFF;
  --text-primary: #0F172A;
  --text-muted: #64748B;
  --border-subtle: #E2E8F0;
  --border-accent: #CBD5E1;
  --brand-navy: #0F172A;
  
  --wa-brand: #25D366;
  --wa-dark: #128C7E;
  --wa-gradient: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  --wa-shadow: rgba(37, 211, 102, 0.35);

  --radius-lg: 16px;
  --shadow-card: 0 4px 16px -2px rgba(15, 23, 42, 0.05);
  --shadow-hover: 0 16px 28px -8px rgba(15, 23, 42, 0.12);
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-cream);
  color: var(--text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* Header Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(253, 251, 247, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.brand {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--brand-navy);
  text-decoration: none;
}

.brand-accent { color: var(--wa-dark); }

.nav-wa-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface-white);
  border: 1px solid var(--border-accent);
  padding: 0.55rem 1.1rem;
  border-radius: 50px;
  color: var(--brand-navy);
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-wa-btn i { color: var(--wa-brand); font-size: 1.1rem; }
.nav-wa-btn:hover { border-color: var(--wa-brand); box-shadow: 0 4px 12px var(--wa-shadow); }

/* Hero Section */
.hero {
  padding: 3.5rem 1.25rem 2rem;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--wa-dark);
  background: rgba(37, 211, 102, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.8px;
  margin-bottom: 0.85rem;
  color: var(--brand-navy);
}

.hero p {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 640px;
  margin: 0 auto;
}

/* Category Filters Mobile-Optimized */
.controls-section {
  padding: 1.25rem 0;
  position: sticky;
  top: 72px;
  z-index: 90;
  background: rgba(253, 251, 247, 0.95);
  backdrop-filter: blur(8px);
}

.filter-wrapper {
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.filter-wrapper::-webkit-scrollbar { display: none; }

.filter-tab {
  background: var(--surface-white);
  border: 1px solid var(--border-subtle);
  padding: 0.6rem 1.1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  touch-action: manipulation;
}

.filter-tab .badge {
  background: var(--bg-cream);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

.filter-tab.active, .filter-tab:hover {
  background: var(--brand-navy);
  color: var(--surface-white);
  border-color: var(--brand-navy);
}

.filter-tab.active .badge {
  background: rgba(255, 255, 255, 0.2);
  color: var(--surface-white);
}

/* Responsive Product Grid */
.store-main { padding: 1.5rem 1.25rem 6rem; }

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Product Card UX */
.product-card {
  background: var(--surface-white);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-card);
  opacity: 0;
  transform: translateY(16px);
  animation: bitReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

@keyframes bitReveal {
  to { opacity: 1; transform: translateY(0); }
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--border-accent);
}

.card-media {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #f1f5f9;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.product-card:hover .product-img { transform: scale(1.05); }

.card-category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
}

.card-top { padding: 1.25rem 1.25rem 0.5rem; }

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--brand-navy);
  margin-bottom: 0.5rem;
  line-height: 1.35;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.45;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 1.25rem;
  border-top: 1px solid var(--border-subtle);
  margin-top: 0.5rem;
}

.price-label { font-size: 0.68rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; display: block; }
.price-value { font-size: 1.15rem; font-weight: 800; color: var(--brand-navy); }

/* Realistic WhatsApp Button */
.wa-card-trigger {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--wa-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.35rem;
  box-shadow: 0 4px 12px var(--wa-shadow);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  touch-action: manipulation;
}

.wa-card-trigger:hover {
  transform: scale(1.1) rotate(-6deg);
  box-shadow: 0 8px 18px var(--wa-shadow);
}

/* Skeleton Screens */
.skeleton-card {
  background: var(--surface-white);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sk-line {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.sk-img { width: 100%; height: 200px; }
.sk-title { width: 75%; height: 20px; margin-bottom: 0.75rem; border-radius: 4px; }
.sk-body-1 { width: 100%; height: 12px; margin-bottom: 0.4rem; border-radius: 4px; }
.sk-body-2 { width: 60%; height: 12px; border-radius: 4px; }
.sk-btn { width: 44px; height: 44px; border-radius: 50%; }

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Floating Sticky WhatsApp Button */
.floating-wa {
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--wa-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  box-shadow: 0 8px 20px var(--wa-shadow);
  z-index: 200;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.floating-wa:hover { transform: scale(1.1); }

.wa-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--wa-brand);
  z-index: -1;
  animation: wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes wa-ping { 75%, 100% { transform: scale(1.4); opacity: 0; } }

.wa-tooltip {
  position: absolute;
  right: 66px;
  background: var(--brand-navy);
  color: white;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform: translateX(8px);
}

.floating-wa:hover .wa-tooltip { opacity: 1; transform: translateX(0); }

.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2.5rem 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  background: var(--surface-white);
}

/* Mobile Adjustments */
@media (max-width: 640px) {
  .nav-container { height: 64px; }
  .brand { font-size: 1.05rem; }
  .nav-wa-btn span { display: none; }
  .nav-wa-btn { padding: 0.5rem 0.75rem; }
  .controls-section { top: 64px; }
  .product-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  .floating-wa { bottom: 1.25rem; right: 1.25rem; width: 50px; height: 50px; font-size: 1.5rem; }
  .wa-tooltip { display: none; }
}
