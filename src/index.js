document.getElementById('about').addEventListener('click', () => {
    document.getElementById('javaScript').style.display = 'none';
    document.getElementById('contactMe').style.display = 'none';
    document.getElementById('information').style.display = 'flex'
})

document.getElementById('projects').addEventListener('click', () => {
    document.getElementById('javaScript').style.display = 'flex';
    document.getElementById('information').style.display = 'none'
    document.getElementById('contactMe').style.display = 'none'
})

document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('javaScript').style.display = 'none';
    document.getElementById('information').style.display = 'none'
    document.getElementById('contactMe').style.display = 'flex'
})