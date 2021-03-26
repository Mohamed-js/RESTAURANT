import * as components from './components'

const contact = () => {
    const head = components.text('h1', 'Contact', 'head')
    const slogan = components.text('h5', 'Phone: +201100086711', 'slogan1')
    const slogan2 = components.text('a', 'Portfolio', 'slogan2')
    slogan2.classList.add('port')
    slogan2.setAttribute('href','https://mohamed-js.github.io/Portfolio/')
    const contact = components.text('div', '', 'contact')
    contact.appendChild(head)
    contact.appendChild(slogan)
    contact.appendChild(slogan2)
    return contact
}

export { contact } ;