import * as components from './components'

let arr = [
    {
        name: "Pizza Ciao",
        price: "40",
        img: "ciao"
    },
    {
        name: "Pizza Mashroom",
        price: "50",
        img: "mashroom"
    },
    {
        name: "Pizza Chicken",
        price: "50",
        img: "chicken"
    },
    {
        name: "Pizza Meat",
        price: "50",
        img: "meat"
    },
    {
        name: "Pizza Chicken",
        price: "50",
        img: "chicken"
    },
    {
        name: "Pizza Meat",
        price: "50",
        img: "meat"
    },
    {
        name: "Pizza Mashroom",
        price: "50",
        img: "mashroom"
    },
    {
        name: "Pizza Ciao",
        price: "40",
        img: "ciao"
    }
]

const menu = () => {

    const head = components.text('h1', 'Our Menu', 'head')
    const menu = components.text('div', '', 'menu')
    menu.appendChild(head)
    menu.appendChild(components.menuItems(arr))
    return menu
}

export { menu } ;