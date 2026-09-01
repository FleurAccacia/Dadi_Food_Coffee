import { useState } from "react";
import "./App.css";

const menuCategories = [
  {
    id: "starters",
    label: "Starters",
    plats: [
      {
        nom: "Chicken Panko",
        description: "Poulet Panés vendus par 3 , 4 ou 6 ",
        prix: "7€",
      },
      {
        nom: "Croquestas",
        description: "Bombes vendus par 3 , 4 ou 6 ",
        prix: "9€",
      },

    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    plats: [
      {
        nom: "Air cheesburger",
        description: "Steak maison, cheddar, sauce secrète DADi ",
        
        prix: "9,90€",
      },
      {
        nom: "Smash Air-Cheesburger",
        description: "Poulet croustillant, pickles, mayo maison",
        prix: "11€",
      },
      {
        nom: "Dadi",
        description: "Double steak smashé, oignons caramélisés",
        prix: "14€",
      },
      {
        nom: "SmashDadi",
        description: "Double steak smashé, oignons caramélisés",
        prix: "14€",
      },
      {
        nom: "Panko",
        description: "Poulet pané, oignons caramélisés",
        prix: "14€",
      },
      {
        nom: "Pankot🔥",
        description: "Double steak smashé, oignons caramélisés",
        prix: "14€",
      },
      {
        nom: "Mama🔥",
        description: "Double steak smashé, oignons caramélisés",
        prix: "14€",
      },
      {
        nom: "Veggie🍃",
        description: "Double steak smashé, oignons caramélisés",
        prix: "14€",
      },
    ],
  },
  {
    id: "rolls",
    label: "Rolls",
    plats: [
      {
        nom: "Roll Poulet grillé",
        description: "Poulet mariné, crudités, sauce tahini",
        prix: "10€",
      },
      {
        nom: "Roll Falafel",
        description: "Falafels maison, houmous, salade",
        prix: "9€",
      },
      {
        nom: "Roll Smash",
        description: "Steak smashé, fromage fondu, sauce DADi",
        prix: "11€",
      },
    ],
  },
  {
    id: "crousty",
    label: "DADi Crousty",
    plats: [
      {
        nom: "Crousty Classic",
        description: "Poulet croustillant frit, sauce miel-moutarde",
        prix: "10€",
      },
      {
        nom: "Crousty Spicy",
        description: "Poulet épicé, sauce ranch maison",
        prix: "10€",
      },
      {
        nom: "Crousty Box x4",
        description: "4 morceaux, frites, sauce au choix",
        prix: "13€",
      },
    ],
  },
  {
    id: "bowls",
    label: "Bowls",
    plats: [
      {
        nom: "Bowl açaï DADi",
        description: "Açaï, granola, fruits frais, miel",
        prix: "10€",
      },
      {
        nom: "Buddha Bowl",
        description: "Quinoa, légumes rôtis, sauce tahini",
        prix: "13€",
      },
      {
        nom: "Bowl Poulet",
        description: "Riz, poulet grillé, avocat, sauce soja",
        prix: "12€",
      },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    plats: [
      {
        nom: "Salade DADi",
        description: "Roquette, tomates, parmesan, vinaigrette maison",
        prix: "9€",
      },
      {
        nom: "Salade Poulet",
        description: "Poulet grillé, avocat, grenade, citron",
        prix: "11€",
      },
      {
        nom: "Salade César",
        description: "Romaine, parmesan, croutons maison, sauce césar",
        prix: "10€",
      },
    ],
  },
  {
    id: "fries",
    label: "Fries",
    plats: [
      {
        nom: "Frites maison",
        description: "Frites fraîches, sel de mer",
        prix: "4€",
      },
      {
        nom: "Loaded Fries",
        description: "Frites, cheddar fondu, bacon halal, sauce DADi",
        prix: "7€",
      },
      {
        nom: "Sweet Fries",
        description: "Frites de patate douce, sauce sriracha mayo",
        prix: "5€",
      },
    ],
  },
  {
    id: "mac",
    label: "Mac & Cheese",
    plats: [
      {
        nom: "Mac Classic",
        description: "Macaronis, sauce cheddar ultra crémeuse maison",
        prix: "9€",
      },
      {
        nom: "Mac Poulet",
        description: "Poulet croustillant, cheddar, oignons frits",
        prix: "11€",
      },
      {
        nom: "Mac Truffe",
        description: "Macaronis, sauce truffe, parmesan râpé",
        prix: "12€",
      },
    ],
  },
  {
    id: "kids",
    label: "Menus Kids",
    plats: [
      {
        nom: "Mini Burger Kids",
        description: "Petit burger, mini frites, boisson",
        prix: "8€",
      },
      {
        nom: "Crousty Kids",
        description: "2 morceaux crousty, frites, jus de fruits",
        prix: "8€",
      },
      {
        nom: "Mini Roll Kids",
        description: "Petit roll poulet, frites, boisson",
        prix: "8€",
      },
    ],
  },
  {
    id: "matcha",
    label: "Matchas & Ube",
    plats: [
      {
        nom: "Matcha Latte",
        description: "Thé matcha, lait d'avoine ou vache, chaud ou froid",
        prix: "6€",
      },
      {
        nom: "Ube Latte",
        description: "Igname violette, lait de coco, notes vanillées",
        prix: "6€",
      },
      {
        nom: "Matcha Frappé",
        description: "Matcha, glace, lait, crème fouettée",
        prix: "7€",
      },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    plats: [
      {
        nom: "Tropical DADi",
        description: "Mangue, ananas, lait de coco, citron vert",
        prix: "6€",
      },
      {
        nom: "Berry Boost",
        description: "Fraises, framboises, banane, lait d'amande",
        prix: "6€",
      },
      {
        nom: "Green Power",
        description: "Épinards, pomme, concombre, gingembre",
        prix: "6€",
      },
    ],
  },
  {
    id: "milkshakes",
    label: "Milkshakes",
    plats: [
      {
        nom: "Milkshake Vanille",
        description: "Glace vanille maison, lait, chantilly",
        prix: "7€",
      },
      {
        nom: "Milkshake Fraise",
        description: "Fraises fraîches, glace, chantilly",
        prix: "7€",
      },
      {
        nom: "Milkshake Lotus",
        description: "Biscuit Lotus, glace vanille, chantilly",
        prix: "8€",
      },
    ],
  },
  {
    id: "bubbletea",
    label: "Thé glacé & Bubble Tea",
    plats: [
      {
        nom: "Bubble Tea Taro",
        description: "Taro, lait, perles de tapioca",
        prix: "6€",
      },
      {
        nom: "Thé glacé pêche",
        description: "Thé vert, pêche, menthe fraîche, glaçons",
        prix: "5€",
      },
      {
        nom: "Bubble Tea Fraise",
        description: "Fraise, lait de coco, perles de tapioca",
        prix: "6€",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    plats: [
      {
        nom: "Crème brûlée",
        description: "Recette maison à la vanille de Madagascar",
        prix: "6€",
      },
      {
        nom: "Cookie DADi",
        description: "Cookie moelleux chocolat, fait maison",
        prix: "3€",
      },
      {
        nom: "Cheesecake du jour",
        description: "Cheesecake maison selon inspiration du jour",
        prix: "7€",
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    plats: [
      {
        nom: "Cold Brew maison",
        description: "Café infusé 24h, lait d'avoine ou nature",
        prix: "5€",
      },
      {
        nom: "Limonade pêche",
        description: "Citron frais, pêche, menthe, glaçons",
        prix: "4€",
      },
      {
        nom: "Eau / Sodas",
        description: "Eau plate, gazeuse, Coca, Fanta, Sprite",
        prix: "2€",
      },
    ],
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/logo.jpg"
          alt="Dadi Food & Coffee"
          className="navbar-logo-img"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#apropos">Notre histoire</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#infos">Infos</a>
        </li>
        <li>
          <a href="#contact" className="nav-btn">
            Réserver
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Food &amp; Coffee · Grenoble</p>
        <h1 className="hero-title">DADi</h1>
        <p className="hero-tagline">
          COME A
          <span className="neon-word">
            <span className="neon-hun">HUN</span>NGRY
          </span>
          , LEAVE HAPPY...
        </p>
        <a href="#menu" className="btn-primary">
          Voir le menu
        </a>
      </div>
      <div className="waves-container">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>
    </section>
  );
}

function APropos() {
  return (
    <section className="apropos" id="apropos">
      <div className="container">
        <div className="apropos-content">
          <div className="apropos-image-side">
            <div className="apropos-img-frame">
              <img
                src="https://rs-menus-api.roocdn.com/images/8ead13c7-8c0a-4a31-aa8b-9d1235cda858/image.jpeg"
                alt="DADi Food & Coffee"
              />
            </div>
          </div>
          <div className="apropos-text-side">
            <span className="label-tag">Notre histoire</span>
            <h2 className="apropos-titre">
              Un coin de paradis
              <br />
              au coeur des Alpes
            </h2>
            <p>
              <strong>DADi</strong>, c'est une marque 100% grenobloise. Pas une
              chaîne, pas une franchise — un projet né ici, à Grenoble, avec une
              vraie identité locale et une ambiance qu'on a construite
              nous-mêmes.
            </p>
            <p>
              Tout est <strong>halal</strong> et <strong>fait maison</strong> :
              des plats aux desserts, en passant par chaque sauce. On ne coupe
              pas les coins ronds. Pour nous, une bonne expérience commence dans
              l'assiette.
            </p>
            <div className="apropos-stats">
              <div className="stat-item">
                <strong>100%</strong>
                <span>Halal</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>Fait</strong>
                <span>Maison</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>100%</strong>
                <span>Grenoblois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurFood() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      titre: "Nos Burgers",
      desc: "Vendus par 2 , Smashés, gourmands",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80",
      titre: "Nos Rolls",
      desc: "Gourmands",
    },
    {
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      titre: "Nos Bowls",
      desc: "Frais, colorés, équilibrés",
    },
    {
      img: "https://images.",
      titre: "Nos Crousty et Macs",
      desc: "Copieux, délicieux",
    },
    {
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
      titre: "Nos Desserts",
      desc: "100% faits maison",
    },
    {
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
      titre: "Nos Boissons",
      desc: "Matchas, smoothies, bubble tea",
    },
    {
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
      titre: "Brunch",
      desc: "Divers variétés de goûts",
    },
  ];

  return (
    <section className="ourfood">
      <div className="container">
        <span className="label-tag center">Ce qu'on fait</span>
        <h2 className="section-title">Our Food</h2>
        <p className="section-sub">
          Tout est halal • Tout est fait maison • 100% Grenoble
        </p>
        <div className="ourfood-grid">
          {items.map((item) => (
            <div key={item.titre} className="ourfood-card">
              <div className="ourfood-img-wrap">
                <img src={item.img} alt={item.titre} />
              </div>
              <div className="ourfood-info">
                <h3>{item.titre}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  // useState : on mémorise quelle catégorie est active
  // quand on clique une catégorie, React re-affiche les bons plats
  const [active, setActive] = useState("burgers");
  const categorie = menuCategories.find((c) => c.id === active);

  return (
    <section className="menu" id="menu">
      <div className="menu-bg-shape" />
      <div className="container">
        <span className="label-tag center">Ce qu'on propose</span>
        <h2 className="section-title">Notre carte</h2>
        <p className="section-sub">
          Des menus disponible en little (plats, boisson) et big (plats, boisson, dessert)
        </p>

        {/* Onglets des catégories */}
        <div className="menu-tabs">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab ${active === cat.id ? "menu-tab-active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Plats de la catégorie active */}
        <div className="menu-plats">
          {categorie.plats.map((plat) => (
            <div key={plat.nom} className="menu-plat-card">
              <div className="menu-item-info">
                <span className="menu-item-nom">{plat.nom}</span>
                <span className="menu-item-desc">{plat.description}</span>
              </div>
              <span className="menu-item-prix">{plat.prix}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Infos() {
  return (
    <section className="infos" id="infos">
      <div className="container">
        <span className="label-tag center light">Viens nous voir</span>
        <h2 className="section-title light">On t'attend</h2>
        <div className="infos-grid">
          <div className="info-card">
            <div className="info-icon-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3>Adresse</h3>
            <p>9 Av. Benoît Frachon, 38400 Saint-Martin-d'Hères</p>
            <p>Grenoble, Isère (38)</p>
            <p>Rhône-Alpes</p>
          </div>
          <div className="info-card">
            <div className="info-icon-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>Horaires</h3>
            <p>Lun – Jeu : 09:30 – 22:00</p>
            <p>Ven – Dim : 9h30 – 22h30</p>
          </div>
          <div className="info-card">
            <div className="info-icon-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Contact</h3>
            <p>04 76 42 87 71</p>
            <p>@dadi_food_and_coffee</p>
            <p>contact@dadi-grenoble.fr</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">Dadi</p>
      <p className="footer-sub">Food &amp; Coffee</p>
      <p className="footer-copy">
        © 2026 DADi · Grenoble · Restauration Rapide
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <APropos />
      <OurFood />
      <Menu />
      <Infos />
      <Footer />
    </>
  );
}

export default App;
