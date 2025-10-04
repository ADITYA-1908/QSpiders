// Dom Selectors

const h1 = document.getElementsByTagName('h1') // read
console.log(h1)

h1[0].style.color = 'red' // update
h1[0].innerText = 'WebDev Class Finished'

const newDomElement = document.createElement('h2') // create
console.log(newDomElement)

newDomElement.innerText = 'Very Disturbed Right Now'
document.body.append('newDomElement')

newDomElement.remove()

const click = document.getElementById('clickbtn')
click.addEventListener('click', () => {
    const para = document.createElement('h1')
    para.innerText = 'Webtech class is finished'
    para.style.color = 'blue'

    document.body.append(para)
})

// const response = fetch('www.camouflage.com')
