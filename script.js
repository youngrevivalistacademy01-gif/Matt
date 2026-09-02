const PHONE_NUMBER = "2348154715953"; // Replace with company WhatsApp phone number

const products = [
  // Security Cameras
  {
    id: 1,
    name: "Dome Camera",
    category: "security",
    price: "₦35,000",
    desc: "Vandal-resistant, discreet design offering wide-angle coverage.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Bullet Camera",
    category: "security",
    price: "₦42,000",
    desc: "Long-range directional surveillance with built-in deterrent LEDs.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "PTZ (Pan-Tilt-Zoom)",
    category: "security",
    price: "₦85,000",
    desc: "Remote motorized tracking designed for complete coverage.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Turret / Eyeball Camera",
    category: "security",
    price: "₦38,000",
    desc: "Flexible viewing angles engineered to eliminate IR lens glare.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Wireless / Wi-Fi Camera",
    category: "security",
    price: "₦28,000",
    desc: "Fast installation with zero video cabling required.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Wired / PoE Camera",
    category: "security",
    price: "₦48,000",
    desc: "High-speed data and stable power delivery via single ethernet cable.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Doorbell Camera",
    category: "security",
    price: "₦30,000",
    desc: "Smart door access monitoring with real-time two-way audio.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Thermal Camera",
    category: "security",
    price: "₦150,000",
    desc: "Advanced heat-signature tracking functional in zero-light.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "360° / Fisheye Camera",
    category: "security",
    price: "₦60,000",
    desc: "Panoramic single-camera coverage designed for open rooms.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Covert / Hidden Camera",
    category: "security",
    price: "₦25,000",
    desc: "Discreet form factor designed for covert interior monitoring.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },

  // Solar Panels
  {
    id: 11,
    name: "Monocrystalline Panel",
    category: "solar",
    price: "₦110,000",
    desc: "Highest efficiency rating (~22%) optimized for smaller roof spaces.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Polycrystalline Panel",
    category: "solar",
    price: "₦85,000",
    desc: "Cost-effective energy generation with reliable cell endurance.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Thin-Film Solar Panel",
    category: "solar",
    price: "₦65,000",
    desc: "Ultra-flexible, lightweight design for curved or weak surfaces.",
    image: "https://images.unsplash.com/photo-1548337138-e84d379b360a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "PERC Solar Panel",
    category: "solar",
    price: "₦125,000",
    desc: "Passivated cell architecture yielding superior low-light performance.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Bifacial Solar Panel",
    category: "solar",
    price: "₦140,000",
    desc: "Dual-sided glass structure harvesting reflected rear light.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Building-Integrated PV",
    category: "solar",
    price: "₦210,000",
    desc: "Structural solar tiles that directly replace traditional roofing.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Concentrated PV (CPV)",
    category: "solar",
    price: "₦280,000",
    desc: "Focuses solar radiation using optical lenses for high-yield plants.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
  },

  // Building Materials
  {
    id: 18,
    name: "Structural Concrete Mix",
    category: "building",
    price: "₦4,500 / bag",
    desc: "High-compressive foundational mix for structural cast work.",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Structural Steel Beams",
    category: "building",
    price: "₦850,000 / ton",
    desc: "High-tensile load-bearing beams for commercial frameworks.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Timber / Wood Planks",
    category: "building",
    price: "₦12,000 / plank",
    desc: "Sustainably harvested framing wood treated for moisture resistance.",
    image: "https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    name: "Masonry Red Bricks",
    category: "building",
    price: "₦350 / unit",
    desc: "Durable fire-resistant structural bricks for exterior walls.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    name: "Architectural Glass Facades",
    category: "building",
    price: "₦45,000 / sqm",
    desc: "Thermal-insulated reinforced glass for contemporary exteriors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    name: "Natural Stone Cladding",
    category: "building",
    price: "₦18,000 / sqm",
    desc: "Elegantly textured stone veneer for structural wall accents.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    name: "Insulated Concrete Forms",
    category: "building",
    price: "₦22,000 / unit",
    desc: "High-efficiency block system delivering built-in insulation.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    name: "Cross-Laminated Timber",
    category: "building",
    price: "₦320,000 / unit",
    desc: "Engineered solid timber panels for modern sustainable builds.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    name: "Metal Siding Panels",
    category: "building",
    price: "₦15,000 / sqm",
    desc: "Low-maintenance weather-sealed aluminum and steel cladding.",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    name: "Gypsum Drywall Boards",
    category: "building",
    price: "₦6,500 / sheet",
    desc: "Precision-cut gypsum boards for clean interior wall division.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    name: "Fiber Cement Siding",
    category: "building",
    price: "₦11,000 / board",
    desc: "Fireproof, weather-resistant siding built to last decades.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    name: "Composite Roof Shingles",
    category: "building",
    price: "₦25,000 / bundle",
    desc: "Multi-layered composite shingles for severe weather protection.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
  }
];

const grid = document.getElementById("product-grid");
const filterTabs = document.querySelectorAll(".filter-tab");

// Render skeleton screen placeholders
function showSkeletons() {
  grid.innerHTML = Array(6).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="sk-line sk-img"></div>
      <div style="padding: 1.25rem;">
        <div class="sk-line sk-cat"></div>
        <div class="sk-line sk-title"></div>
        <div class="sk-line sk-body-1"></div>
        <div class="sk-line sk-body-2"></div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem; border-top: 1px solid var(--border-subtle);">
        <div class="sk-line" style="width: 40%; height: 20px;"></div>
        <div class="sk-line sk-btn"></div>
      </div>
    </div>
  `).join('');
}

function generateWALink(name, price) {
  const text = `Hello Matt Lifesciential LTD., I would like to inquire about purchasing: ${name} (${price}). Is this currently available?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

function renderProducts(items) {
  grid.innerHTML = items.map(item => `
    <article class="product-card">
      <div class="card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" class="product-img">
        <span class="card-category-badge">${item.category}</span>
      </div>
      <div class="card-top">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
      <div class="card-bottom">
        <div class="card-price">
          <span class="price-label">Price / Unit</span>
          <span class="price-value">${item.price}</span>
        </div>
        <a href="${generateWALink(item.name, item.price)}" 
           target="_blank" 
           class="wa-card-trigger" 
           aria-label="Inquire via WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </article>
  `).join('');
}

function updateCategoryCounts() {
  document.getElementById("count-all").textContent = products.length;
  document.getElementById("count-security").textContent = products.filter(p => p.category === "security").length;
  document.getElementById("count-solar").textContent = products.filter(p => p.category === "solar").length;
  document.getElementById("count-building").textContent = products.filter(p => p.category === "building").length;
}

window.addEventListener("DOMContentLoaded", () => {
  updateCategoryCounts();
  showSkeletons();
  
  setTimeout(() => {
    renderProducts(products);
  }, 1000);
});

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
  });
});
