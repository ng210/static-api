import _css from "./card.css" with { type: "css" };

export default class CardElement extends HTMLElement {
    #name = null
    #tables = null
    #color = ''
    constructor(name, tables, color) {
        super()
        this.#name = name
        this.#tables = tables
        this.#color = color
    }

    connectedCallback() {
        document.adoptedStyleSheets = [_css]
        this.style.background = `radial-gradient(at center, #fffc, ${this.#color}8)`
        const header = document.createElement('h1')
        header.innerHTML = this.#name
        this.appendChild(header)
        const list = document.createElement('ul')
        this.appendChild(list)
        for (let table of this.#tables) {
            let entry = document.createElement('li')
            entry.url = `./${this.#name}/${table}`
            entry.innerHTML = `<a href="${entry.url}">${table.split('.')[0]}</a>`
            list.appendChild(entry)
        }
    }
}

customElements.define('db-card', CardElement)