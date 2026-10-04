import index from './content.json' with { type: 'json'}
import CardElement from './card.js'

const content = document.querySelector('main')

let palette = ['#ccc', '#fcc', '#ffc', '#ccf','#fcf', '#cff', '#fff']
let ci = 0

let dbList = {}
for (let item of index) {
    let [db, table] = item.split('/')
    if (!dbList[db]) dbList[db] = []
    dbList[db].push(table)
}

for (let name in dbList) {
    const card = new CardElement(name, dbList[name], palette[ci++])
    content.appendChild(card)
    ci = ci % palette.length
}
