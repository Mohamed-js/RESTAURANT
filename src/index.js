import * as components from './components'
import * as home from './home'
import * as menu from './menu'
import * as contact from './contact'

const page = document.getElementById('content')

page.appendChild(components.tabs('Home', 'Menu', 'Contact'))
page.appendChild(components.createMain())
let main = document.getElementById('main');

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(item => {
    item.onclick = () => {
        main.innerHTML =''
        if(item.textContent === 'Home')     main.appendChild(home.home());
        if(item.textContent === 'Menu')     main.appendChild(menu.menu());
        if(item.textContent === 'Contact')  main.appendChild(contact.contact());
    }
});

main.appendChild(home.home())








