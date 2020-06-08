var gId = 100
var gProjs = [
    createProj('mine-sweeper', 'mines sweeper', 'try find all the mines without lose'),
    createProj('pacman', 'pacman', 'have fun  be pacman eat ghosts'),
    createProj('chess', 'chess', 'have fun playing chess'),
    createProj('books-shop', 'books shop', 'expensive famous books ')
]


function createProj(name, title, desc, labels) {
    gId++
    return {
        id: gId,
        name: name,
        title: title,
        desc: desc,
        url: `https://adi-peled.github.io/${name}`,
        publishedAt: new Date().toLocaleString('en-US'),
        labels: ['nothing1', 'nothing2']
    }

}
function getProjs() {
    return gProjs
}




