const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(navbar) &&
      !e.composedPath().includes(menuBtn)
    ) {
      navbar.classList.remove("active");
    }
  });
});

const menu = [
  {
    id: 1,
    img: "imageHala/menuFolder/hummus.jpg",
    title: "Hummus",
    category: "Antipasti",
    price: 6,
    desc: "Crema di ceci perfetta con pane o verdure",
  },
  {
    id: 2,
    img: "imageHala/menuFolder/babaGhanouj.webp",
    title: "Baba Ghanuj",
    category: "Antipasti",
    price: 6,
    desc: "Crema di melanzane perfetta con pane o verdure",
  },
  {
    id: 3,
    img: "imageHala/menuFolder/fattoush.png",
    title: "Fattoush",
    category: "Antipasti",
    price: 6,
    desc: "Insalata fresca di prezzemolo con bulgur, pomodori, menta e dressing al limone",
  },

  {
    id: 4,
    img: "imageHala/menuFolder/tabbuleh.png",
    title: "Tabuleh",
    category: "Antipasti",
    price: 6,
    desc: "Prezzemolo, menta, pomodoro, cipolla, salsa melograno, burghul",
  },

  {
    id: 5,
    img: "imageHala/menuFolder/piattoShwarmaCarne.jpg",
    title: "Piatto Shawarma Carne",
    category: "Piatti",
    price: 14,
    desc: "Con antipasti a scelta, patatine, salsa tahina e insalata mista",
  },
  {
    id: 6,
    img: "imageHala/menuFolder/piattoShawarmaPollo.jpeg",
    title: "Piatto Shawarma Pollo",
    category: "Piatti",
    price: 12,
    desc: "Con antipasti a scelta, patatine e insalata mista ",
  },
  {
    id: 7,
    img: "imageHala/menuFolder/piattoShishTawouk.jpg",
    title: "Piatto Shish Tawouk",
    category: "Piatti",
    price: 12,
    desc: "Con antipasti a scelta, patatine e insalata mista",
  },
  {
    id: 8,
    img: "imageHala/menuFolder/ribsWithRice.jpg",
    title: "Piatto Costolette",
    category: "Piatti",
    price: 14,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },
  {
    id: 9,
    img: "imageHala/menuFolder/crispyChicken.jpg",
    title: "Piatto Crispy",
    category: "Piatti",
    price: 12,
    desc: "Classic Middle Eastern dip made with chickpeas, tahini, olive oil, lemon juice, and garlic.",
  },

  {
    id: 10,
    img: "imageHala/menuFolder/warakInab.jpg",
    title: "Warak Inab",
    category: "Antipasti",
    price: 6,
    desc: "Involtini di vite ripieni di riso, prezzemolo, pomodoro e spezie",
  },
  {
    id: 11,
    img: "imageHala/menuFolder/kebbeh.jpg",
    title: "Kobba",
    category: "Antipasti",
    price: 8,
    desc: "Carne maccinato, cipolla, prezzemolo, burghel, riso",
  },

  {
    id: 12,
    img: "imageHala/menuFolder/aliDiPollo.png",
    title: "Ali di pollo",
    category: "Piatti",
    price: 12,
    desc: "Pollo, peperoncino, burro, salsa piccante, miele",
  },

  {
    id: 13,
    img: "imageHala/menuFolder/riso.jpg",
    title: "Riso",
    category: "Antipasti",
    price: 4,
    desc: "Prezzemolo, menta, pomodoro, cipolla, salsa melograno, burghul",
  },

  {
    id: 14,
    img: "imageHala/menuFolder/hummusConCarne.jpg",
    title: "Hummus con carne",
    category: "Antipasti",
    price: 10,
    desc: "Prezzemolo, menta, pomodoro, cipolla, salsa melograno, burghul",
  },

  {
    id: 15,
    img: "imageHala/menuFolder/piattoKofta.jpg",
    title: "Piatto Kofta",
    category: "Piatti",
    price: 14,
    desc: "Carne grigliata, antipasti a scelta, insalata mista e patatine",
  },

  {
    id: 16,
    img: "imageHala/menuFolder/piadinaShawarmaCarne.jpg",
    title: "Shawarma di carne",
    category: "Piadine",
    price: 7,
    desc: "Manzo, hummus, cipolla, prezzemolo e pomodoro",
  },

  {
    id: 17,
    img: "imageHala/menuFolder/burgerCarne.png",
    title: "Hamburger di carne",
    category: "Hamburger",
    price: 7,
    desc: "fetta di manzo, insalata, pomodoro, cipolla e cheddar ",
  },

  {
    id: 18,
    img: "imageHala/menuFolder/chickenBurger.png",
    title: "Hamburger di pollo",
    category: "Hamburger",
    price: 7,
    desc: "Manzo, hummus, cipolla, prezzomolo, pomodoro",
  },

  {
    id: 19,
    img: "imageHala/menuFolder/piadinaShawarmaPollo.jpg",
    title: "Shawarma pollo",
    category: "Piadine",
    price: 6,
    desc: "petto di pollo, crema d'aglio, cetrioli sottaceto, insalata",
  },

  {
    id: 20,
    img: "imageHala/menuFolder/Sambousik.jpg",
    title: "Sambusik",
    category: "Antipasti",
    price: 6,
    desc: "Sfogliatine ripiene di carne, formaggio o spinaci, speziate e fritte",
  },

  {
    id: 21,
    img: "imageHala/menuFolder/batataHarra.jpg",
    title: "patata harra",
    category: "Antipasti",
    price: 5,
    desc: "patate piccanti saltate con aglio, coriandolo e peperoncino",
  },
  {
    id: 22,
    img: "imageHala/menuFolder/fajitaWrap.jpg",
    title: "Fajitas",
    category: "Piadine",
    price: 8,
    desc: "Pollo, peperoni, funghi, mais e cheddar ",
  },
  {
    id: 23,
    img: "imageHala/menuFolder/piadinaFalafel.jpg",
    title: "piadina falafel",
    category: "Piadine",
    price: 6,
    desc: "Polpette di ceci, prezzemolo, hummus, pomodoro, cetriolini sottaceto",
  },
  {
    id: 24,
    img: "imageHala/menuFolder/jajik.jpg",
    title: "Jajik",
    category: "Antipasti",
    price: 6,
    desc: "yogurt bianco, cetriolo, aglio, limone, foglioline menta e sale",
  },
  {
    id: 25,
    img: "imageHala/menuFolder/piadinaShishTawook.jpg",
    title: "Piadina Shish Tawouk",
    category: "Piadine",
    price: 6,
    desc: "Petto di pollo, yogurt, limone, aglio, paprika, canella, pepe, sale e patatine",
  },

  {
    id: 26,
    img: "imageHala/menuFolder/piattoMachawiMisto.jpg",
    title: "Piatto Machawi Misto",
    category: "Piatti",
    price: 6,
    desc: "Petto di pollo, yogurt, limone, aglio, paprika, canella, pepe, sale e patatine",
  },

  {
    id: 27,
    img: "imageHala/menuFolder/piattoFalafel.jpg",
    title: "Piatto Falafel",
    category: "Piatti",
    price: 10,
    desc: "Polpette di ceci croccanti con antipasti a scelta, patatine e insalata mista",
  },

];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
                <img src=${item.img} alt="${item.title}" class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price} €</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
                    ${category}
                </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      /* Add all items + filtered menus*/
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
