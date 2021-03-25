import * as components from './components'



function contact() {
    const head = components.text('h1', 'Contact', 'head')
    const slogan = components.text('h5', 'Because you deserve the best,', 'slogan')
    const slogan2 = components.text('h6', 'You deserve us.', 'slogan2')

    const contact = components.text('div', '', 'contact')
    contact.appendChild(head)
    contact.appendChild(slogan)
    contact.appendChild(slogan2)
    return contact
}

export { contact } ;