import * as components from './components'

const page = document.getElementById('content')

let header = components.text('h1','Hello World!', 'header')

let header2 = components.text('h2', '', 'header2')

console.log(components.tabs('Home','Menu','Contact'))