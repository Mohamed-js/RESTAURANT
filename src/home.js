import * as components from './components'




function home() {
    const head = components.text('h1', 'PIZZA CIAO', 'head')
    const slogan = components.text('h5', 'Because you deserve the best,', 'slogan1')
    const slogan2 = components.text('h6', 'You deserve us.', 'slogan2')

    const home = components.text('div', '', 'home')
    home.appendChild(head)
    home.appendChild(slogan)
    home.appendChild(slogan2)
    return home
}

export { home } ;