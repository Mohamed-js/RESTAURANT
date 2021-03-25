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
        if(item.textContent === 'Home')     {var tab = home.home;}
        if(item.textContent === 'Menu')     {var tab = menu.menu;}
        if(item.textContent === 'Contact')  {var tab = contact.contact;}
        main.innerHTML =''
        main.appendChild(tab())
    }
});

main.appendChild(home.home())








