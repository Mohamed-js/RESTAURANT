const text = (elem, text, className) => {
    let t = document.createElement(`${elem}`);
    t.textContent = `${text}`
    t.classList.add(`${className}`)
    return t
}

function tabs() {
    const navbar = text('ul','','navbar')
    for (var i = 0; i < arguments.length; ++i) {
        let el = text('li',`${arguments[i]}`, 'nav-item');
        navbar.appendChild(el)
    }
    return navbar
}






export { text, tabs }