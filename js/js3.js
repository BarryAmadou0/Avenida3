// Menu data met optionele afbeeldingen
const menuData = {
    voorgerechten: [
        {
            name: "Scampi's en lookboter",
            description: "",
            price: 8.00,
            image: "../Media/10556573_avenida_Food_scampi.jpg"
        },
        {
            name: "Kaaskroketten",
            description: "",
            price: 7.00,
            image: ""
        },
        {
            name: "Garnaalkroketten",
            description: "",
            price: 8.00,
            image: "../Media/10556573_avenida_Food_garnaalkrotten.jpg"
        },
        {
            name: "Scampi's in currysaus",
            description: "",
            price: 8.00,
            image: "../Media/10556573_avenida_Food_scampi in currysaus.jpg"
        },
        {
            name: "Calamaris",
            description: "",
            price: 8.00,
            image: "../Media/10556573_avenida_Food_calamaris.jpg"
        },
        {
            name: "Chicken wings",
            description: "",
            price: 8.00,
            image: ""
        }
    ],
    salades:[
        {
            name:"Nicoise",
            description:"Gemende sla met tonijn,ansjovis en olijven",
            price:11.00,
            image:"../Media/AvenidaSaladeNisCoise.jpeg",
        },
        {
            name:"Mediterraanse salade",
            description:"Tonijn gemixt met zeevruchten,scampi en ansjovis",
            price:14.00,
            image:"",
        },
        {
            name:"Salade Hawaï",
            description:"Malse kip, sappige ananas en romige cocktailsaus op een frisse salade",
            price:12.00,
            image:"",
        },
    ],
    soep:[
        {
            name:"Vissoep",
            description:"Huisgemaakte vissoep met verse vis en groenten",
            price:6.00,
            image:"",
        },
        {
            name:"Harira",
            description:"Traditionele Marokkaanse soep",
            price:6.50,
            image:"",
        },
    ],
    pizza:[
        {
            name:"Margherita",
            description:"Klassieke pizza met tomatensaus",
            price:8.00,
            image:"../Media/10556573_avenida_Food_pizza.jpg",
        },
        {
            name:"Quattro Formaggi",
            description:"Romige pizza met vier kazen",
            price:13.00,
            image:"",
        },
        {
            name:"Bolognese",
            description:"Pizza met tomatensaus met gekruid gehakt",
            price:13.00,
            image:"",
        },
        {
            name:"Funghi",
            description:"Pizza met tomatensaus en champignons",
            price:10.00,
            image:"",
        },
        {
            name:"Primavera",
            description:"Pizza met tomatensaus, champignons, paprika, spinazie, mais, olijven en ui.",
            price:12.00,
            image:"",
        },
        {
            name:"Solo mio",
            description:"Pizza met ei, spinazie en romige looksaus",
            price:11.00,
            image:"",
        },
        {
            name:"Salami",
            description:"Pizza met tomatensaus en pittige salami",
            price:10.00,
            image:"",
        },
        {
            name:"Capricciosa",
            description:" Pizza met salami en champignons",
            price:11.00,
            image:"",
        },
        {
            name:"Quattro Stagioni",
            description:"Pizza met salami, champignons, paprika en ansjovis",
            price:13.00,
            image:"",
        },
        {
            name:"Hawaï",
            description:"Pizza met kip en ananas",
            price:13.00,
            image:"",
        },
        {
            name:"Avenida",
            description:"Pizza met pita, kip, champignons, paprika, ui, olijven en pikante saus",
            price:15.00,
            image:"",
        },
        {
            name:"Tonno",
            description:"Pizza met ui, tonijn en frisse looksaus",
            price:12.00,
            image:"",
        },
        {
            name:"Frutti Del Mar",
            description:"Pizza met zeevruchten en looksaus",
            price:13.00,
            image:"",
        },
        {
            name:"Scampi",
            description:"Pizza met scampi's,ui en look",
            price:14.00,
            image:"",
        },
        {
            name:"Salmone",
            description:"Pizza met zalm en ui",
            price:14.00,
            image:"",
        },
        {
            name:"Napolitana",
            description:"Pizza met ansjovis en kappertjes",
            price:10.00,
            image:"",
        },
    ],
    kinderschotel:[
        {
            name:"Hamburger/Fishburger",
            description:"",
            price:8.50,
            image:"",
        },
        {
            name:"Spaghetti bolognese",
            description:"",
            price:8.50,
            image:"",
        },
    ],
    hoofdgerechten: [
        {
            name: "Kip special",
            description: "kip, ui, paprika, mais en pikante saus",
            price: 15.50,
            image: "../Media/AvenidaKipSpecial.jpeg"
        },
        {
            name: "Kip hawai",
            description: "Kip, ananas en mais",
            price: 15.50,
            image: ""
        },
        {
            name: "Kipfilet",
            description: "met Currysaus, Pepersaus of Champignonsaus",
            price: 15.50,
            image: "../Media/AvenidaKipCurry.jpeg"
        },
        {
            name:"Kipfilet met Avenidas saus",
            description:"pikant",
            price:17.00,
            image:"",
        },
        {
            name:"4 sterren",
            description:"Kipfilet, rijst, spaghetti en currysaus",
            price:17.50,
            image:"../Media/1-10556573_avenida_Food_4sterrenkipfilet rijstspaghetti currysaus.jpg",
        },
        {
            name:"Kip natuur",
            description:"Groentjes en spaghetti alio olio",
            price:17.50,
            image:"",
        },
        {
            name: "Lams special",
            description: "Lams, ui, paprika, mais en pikante saus",
            price: 16.00,
            image: ""
        },
        {
            name: "Lams hawai",
            description: "Lams, ananas en mais",
            price: 16.00,
            image: ""
        },
        {
            name:"Lams feta",
            description:"Lams en fetakass",
            price:16.00,
            image:"",
        },
        {
            name: "Steak",
            description: "met Currysaus, Avenida saus, Pepersaus of Champignonsaus",
            price: 18.50,
            image: "../Media/10556573_avenida_Food_steak champignonsaus.jpg"
        },
        {
            name:"Steak natuur",
            description:"Groentjes en spaghetti alio olio",
            price:18.00,
            image:"",
        },
        {
            name:"Spieringkotelet",
            description:"",
            price:25.00,
            image:"../Media/AvenidaSpareRibs2.jpeg",
        },
        {
            name:"Vis natuur",
            description:"Groentjes en spaghetti alio olio",
            price:18.00,
            image:"",
        },
        {
            name:"Vis in tomatenroomsaus",
            description:"rijst en spaghetti",
            price:17.00,
            image:"",
        },
        {
            name:"Vis in Avenidasaus",
            description:"pikant",
            price:17.50,
            image:"",
        },
        {
            name:"Rijst met zeevruchten",
            description:"Scampi's, kip, zeevruchten(is pikant)",
            price:17.00,
            image:"",
        },
        {
            name:"Zalm",
            description:"",
            price:19.00,
            image:"../Media/AvenidaZalmSchotel.jpeg",
        },
        {
            name:"Avenidaschotel",
            description:"Kip, lams, merguez en hackfleisch",
            price:20.00,
            image:"",
        },
        {
            name:"Stoofvlees met frieten",
            description:"",
            price:17.00,
            image:"../Media/10556573_avenida_Food_stoofvlees met frieten.jpg",
        },
        {
            name:"Vol en vent",
            description:"Kip en champignon",
            price:17.00,
            image:"../Media/10556573_avenida_Food_vol en vent kip champignon.jpg",
        },
        {
            name:"Hamburger kefta",
            description:"Ui,kaas en saus",
            price:12.00,
            image:"../Media/10556573_avenida_Food_hamburger keftaui kaas en saus.jpg",
        },
        {
            name:"Pannini Kip",
            description:"met portie friet en salade",
            price:8.50,
            image:"",
        },
        {
            name:"Pannini mozzarella",
            description:"met portie friet en salade",
            price:7.00,
            image:"",
        },
        {
            name:"Pannini kefta",
            description:"met portie friet en salade",
            price:8.50,
            image:"",
        },

    ],
    pita:[
        {
            name:"Avenida",
            description:"Kip,ui,kroketten en pikante saus(zonder frieten)",
            price:10.00,
            image:"",
        },
        {
            name: "Kip special",
            description: "kip, ui, paprika, mais en pikante saus",
            price: 10.00,
            image: ""
        },
        {
            name: "Kip hawai",
            description: "Kip, ananas en mais",
            price: 10.00,
            image: ""
        },
        {
            name: "Lams special",
            description: "Lams, ui, paprika, mais en pikante saus",
            price: 11.00,
            image: ""
        },
        {
            name: "Lams hawai",
            description: "Lams, ananas en mais",
            price: 11.00,
            image: ""
        },
    ],
    pasta:[
        {
            name:"Bolognese",
            description:"Tomatensaus en gehakt",
            price:13.00,
            image:"",
        },
        {
            name:"Quattro Formaggi",
            description:"Roomsaus en 4 soorten kazen",
            price:15.00,
            image:"",
        },
        {
            name:"Arabiata",
            description:"Pikante tomatensaus en ui",
            price:12.00,
            image:"../Media/AvenidaPastaArabiata.jpeg",
        },
        {
            name:"Pollo",
            description:"Kip, champignons en currysaus",
            price:13.00,
            image:"../Media/10556573_avenida_Food_pasta pollo.jpg",
        },
        {
            name:"Scampi",
            description:"Scampi en tomatensaus",
            price:15.00,
            image:"",
        },
        {
            name:"Coriano",
            description:"Scampi, currysaus en broccoli",
            price:15.50,
            image:"",
        },
        {
            name:"Diabolique",
            description:"Scampi en pikante roomsaus",
            price:15.00,
            image:"../Media/10556573_avenida_Food_pasta diabolique scampis pikante roomsaus.jpg",
        },
        {
            name:"Avenida",
            description:"Scampi en Avenidasaus",
            price:15.50,
            image:"",
        },
        {
            name:"Zalm",
            description:"Roomsaus en ui",
            price:15.00,
            image:"",
        },
        {
            name:"Zeevruchten",
            description:"Tomatenroomsaus",
            price:15.00,
            image:"",
        },
        {
            name:"Pasta special",
            description:"Scampi's, kip, zeevruchten, groenten en pikante saus",
            price:17.00,
            image:"",
        },
        {
            name:"Driekleuren",
            description:"Lasagne bolognese,penne met kip en linguine scampi special met pikante saus",
            price:17.00,
            image:"",
        },
        {
            name:"Lasagna Bolognese",
            description:"Ui, paparika en gehakt",
            price:15.50,
            image:"../Media/AvenidaLasagna.jpeg",
        },
        {
            name:"Lasagna Cannelloni",
            description:"Spinazie, ricotta en bolognese",
            price:14.50,
            image:"",
        },
    ],
    desserts:{
        "Pannekoeken":[
            {
                name:"Pannekoek met nutella",
                description:"",
                price:6.50,
                image:"",
            },
            {
                name:"Pannekoek met nuttela en amandelen",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Pannenkoek met banaan en honing",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Pannekoek met suiker",
                description:"",
                price:5.00,
                image:"",
            },
            {
                name:"Pannekoek met chocolade en ijs",
                description:"",
                price:7.50,
                image:"",
            },
        ],
        "Wafels":[
            {
                name:"Wafel met suiker en ijs",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Wafel met chocolade en ijs",
                description:"",
                price:7.50,
                image:"../Media/10556573_avenida_Food_wafel met chocolade en ijs.jpg",
            },
        ],
        "Taarten":[
            {
                name:"Dubai chocolat",
                description:"",
                price:9.00,
                image:"",
            },
            {
                name:"Raphael coco",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Red velvet",
                description:"",
                price:7.50,
                image:"../Media/10556573_avenida_Food_red velvet cake.jpg",
            },
            {
                name:"Tiramisu velvet",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Saint sébastian cake",
                description:"",
                price:9.00,
                image:"../Media/AvenidaTaartSanSebestian.jpeg",
            },
            {
                name:"Bosbessen",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Biscut met oreo",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"White profiteroles",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Lotus met caramel",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Leonardo cake",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Tiramisu",
                description:"",
                price:6.50,
                image:"",
            },
            {
                name:"Framboos cheescake",
                description:"",
                price:7.50,
                image:"",
            },
        ],
        "Ijsdesserts":[
            {
                name:"Moelleux",
                description:"",
                price:6.00,
                image:"",
            },
            {
                name:"Creme brulee",
                description:"",
                price:6.00,
                image:"../Media/AvenidaCremeBrulee.jpeg",
            },
            {
                name:"Banana split ijs",
                description:"",
                price:8.00,
                image:"",
            },
            {
                name:"Dame Blanche",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Aardbeien coupe ijs",
                description:"",
                price:8.50,
                image:"",
            }
        ]
    },
    dranken:{
        "Warme dranken":[
            {
                name:"Koffie",
                description:"",
                price:2.50,
                image:"",
            },
            {
                name:"Koffie met melk",
                description:"",
                price:3.00,
                image:"",
            },
            {
                name:"Ijskoffie",
                description:"",
                price:3.00,
                image:"",
            },
            {
                name:"Cappucino",
                description:"",
                price:3.00,
                image:"",
            },
            {
                name:"Chocomelk",
                description:"",
                price:3.00,
                image:"",
            },
            {
                name:"Marokkaanse muntthee",
                description:"",
                price:3.00,
                image:"",
            },
            {
                name:"Zwarte thee",
                description:"",
                price:3.00,
                image:"",
            }
        ],
        "Mojito's":[
            {
                name:"Aardbei Mojito",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Classic Mojito",
                description:"",
                price:7.00,
                image:"../Media/10556573_avenida_Food_classic mojito.jpg",
            },
            {
                name:"Milano Mojito",
                description:"",
                price:7.50,
                image:"",
            },
            {
                name:"Alaska Mojito",
                description:"",
                price:7.50,
                image:"",
            }
        ],
        "Smoothies":[
            {
                name:"Mango smoothie",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Aardbeien smoothie",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Avenida smoothie",
                description:"",
                price:8.50,
                image:"",
            },
            {
                name:"Banaan smoothie",
                description:"",
                price:7.00,
                image:"",
            },
            {
                name:"Avocado smoothie",
                description:"",
                price:8.00,
                image:"",
            },
        ],
        "Milkshakes":[
            {
                name:"Vanille milkshake",
                description:"",
                price:6.00,
                image:"",
            },
            {
                name:"Aardbeien milkshake",
                description:"",
                price:6.50,
                image:"",
            },
            {
                name:"Chocolade milkshake",
                description:"",
                price:6.50,
                image:"",
            },
            {
                name:"Pistache milkshake",
                description:"",
                price:5.50,
                image:"",
            }
        ],
        "Frisdrank":[
            {
                name:"Normale drank",
                description:"Cola,Cola light,Fanta,Sprite,Ice tea,Loosa ice,Appelsiensap,Plat water,Bruis water",
                price:2.50,
                image:"",
            },
            {
                name:"drank",
                description:"Gini,Tonic,Agrum",
                price:2.80,
                image:"",
            },
            {
                name:"Vers geperste appelsiensap",
                description:"",
                price:4.00,
                image:"",
            },
            {
                name:"Grote fles water",
                description:"",
                price:8.00,
                image:"",
            },
            {
                name:"Grote fles cola/fanta",
                description:"",
                price:10.00,
                image:"",
            }
        ]
    },
    extra:[
        {
            name:"Kaas",
            description:"",
            price:2.00,
            image:"",
        },
        {
            name:"Groenten",
            description:"",
            price:4.00,
            image:"",
        },
        {
            name:"Vlees",
            description:"",
            price:7.00,
            image:"",
        },
        {
            name:"Kip",
            description:"",
            price:6.00,
            image:"",
        },
        {
            name:"Saus",
            description:"",
            price:3.50,
            image:"",
        },
        {
            name:"Pitabroodje",
            description:"",
            price:2.00,
            image:"",
        },
        {
            name:"Brood",
            description:"",
            price:1.00,
            image:"",
        },
        {
            name:"Friet,Puree,Rijst,Pasta",
            description:"",
            price:3.50,
            image:"",
        },

    ]
};

// DOM elementen
const menuContainer = document.getElementById('menu-items-container');
const categoryButtons = document.querySelectorAll('.category-btn');

// Categorie icons
const categoryIcons = {
    voorgerechten: "🍤",
    salades: "🥗",
    soep: "🍲",
    pizza: "🍕",
    kinderschotel: "👶",
    hoofdgerechten: "🍛",
    pita: "🥙",
    pasta: "🍝",
    desserts: "🍰",
    dranken: "🍹",
    extra: "➕"
};

// Laad menu items met slideshow voor items met foto's
function loadMenuItems(category) {
    menuContainer.innerHTML = '';

    // Geneste categorie (bijv. desserts)
    if (typeof menuData[category] === 'object' && !Array.isArray(menuData[category])) {
        // Verzamel ALLE items met afbeeldingen uit alle subcategorieën
        let allItemsWithImages = [];
        let allSubCategories = [];

        // Sorteer subcategorieën en verzamel afbeeldingen
        Object.entries(menuData[category]).forEach(([subCategory, items]) => {
            // Sorteer items per subcategorie: eerst met afbeelding
            const sortedItems = [...items].sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));
            allSubCategories.push({ subCategory, items: sortedItems });
            allItemsWithImages = [...allItemsWithImages, ...sortedItems.filter(item => item.image)];
        });

        // Toon ÉÉN slideshow bovenaan (alleen als er afbeeldingen zijn)
        if (allItemsWithImages.length > 0) {
            createSlideshow(allItemsWithImages);
        }

        // Toon geneste subcategorieën met gesorteerde items
        allSubCategories.forEach(({ subCategory, items }) => {
            const subTitle = document.createElement('h3');
            subTitle.className = 'subcategory-title';
            subTitle.innerHTML = `${categoryIcons[subCategory] || ""} ${subCategory}`;
            menuContainer.appendChild(subTitle);

            createMenuGrid(items, category); // Items zijn al gesorteerd
        });
    }
    // Normale categorie (plat array)
    else {
        // Sorteer items: eerst met afbeelding
        const sortedItems = [...menuData[category]].sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));
        const itemsWithImages = sortedItems.filter(item => item.image);

        if (itemsWithImages.length > 0) {
            createSlideshow(itemsWithImages);
        }

        createMenuGrid(sortedItems, category); // Gebruik gesorteerde array
    }
}

// Maak slideshow element
function createSlideshow(items) {
    const slideshowContainer = document.createElement('div');
    slideshowContainer.className = 'slideshow-container';

    items.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="slide-caption">
                <h3>${item.name}</h3>
                <p>${item.description || ''}</p>
                <p class="price">€${item.price.toFixed(2)}</p>
            </div>
        `;
        slideshowContainer.appendChild(slide);
    });

    // Voeg navigatie dots toe
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slideshow-dots';
    items.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    slideshowContainer.appendChild(dotsContainer);
    menuContainer.appendChild(slideshowContainer);

    // Activeer slideshow functionaliteit
    setupSlideshow();
}

// Slideshow functionaliteit
function setupSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
        });
    });

    // Auto-advance elke 5 seconden
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Maak menu grid
function createMenuGrid(items, category) {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'menu-grid';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const imageHTML = item.image
            ? `<img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy">`
            : `<div class="no-image-placeholder">
                 <span class="category-icon">${categoryIcons[category] || "🍽️"}</span>
               </div>`;

        menuItem.innerHTML = `
            ${imageHTML}
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                ${item.description ? `<p>${item.description}</p>` : '<p>&nbsp;</p>'}
                <p class="price">€${item.price.toFixed(2)}</p>
            </div>
        `;

        gridContainer.appendChild(menuItem);
    });

    menuContainer.appendChild(gridContainer);
}

// Event listeners voor categorieën
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadMenuItems(button.dataset.category);
    });
});

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems('voorgerechten');

    // Smooth scroll voor anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});