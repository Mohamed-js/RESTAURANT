const text = (elem, text, className) => {
  let t = document.createElement(`${elem}`);
  t.textContent = `${text}`;
  t.classList.add(`${className}`);
  return t;
};

const menuItems = (arr) => {
  const menu = text("section", "", "menu");
  for (var i = 0; i < arr.length; i += 1) {
    let card = text("div", "", "card");
    let img = text("img", "", "item-img");
    img.setAttribute("alt", `${arr[i].img}`);
    img.setAttribute("src", `./imgs/${arr[i].img}.png`);
    let name = text("h4", `${arr[i].name}`, "item-name");
    let price = text("p", `${arr[i].price} -EGP`, "item-price");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    menu.appendChild(card);
  }
  return menu;
}

function tabs() {
  const navbar = text("ul", "", "navbar");
  for (var i = 0; i < arguments.length; i += 1) {
    let el = text("li", `${arguments[i]}`, "nav-item");
    navbar.appendChild(el);
  }
  return navbar;
}

const createMain = () => {
  const main = text("div", "", "main");
  main.id = "main";
  return main;
}

export { text, tabs, menuItems, createMain };
