var body = document.querySelector('body')
body.style.backgroundColor = 'blue'

var specialParagraphs = document.querySelectorAll('p.highlight')

for (var i = 0; i < specialParagraphs.length; i++) {
    i.style.color = 'yellow'
}