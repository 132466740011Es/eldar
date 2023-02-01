const clickHTML = (str) => {
    alert(str)
}


// first

const first = document.querySelector('.first')

const clickJS = (str) => {
    alert(str)
}


const clickJSTwo = () => {
    alert('hello world')
}


// first.onclick = () => clickJS('hello world')
first.onclick = clickJSTwo


// second

const second = document.querySelector('.second')

second.onclick = () => {
    alert('HELLO')
}





// const box = document.querySelector('.box')
// const redBtn = document.querySelector('.red')
// const greenBtn = document.querySelector('.green')


// redBtn.onclick = () => {
//     box.classList.remove('colorGreen')
//     box.classList.add('colorRed')
// }



// greenBtn.onclick = () => {
//     box.classList.remove('colorRed')
//     box.classList.add('colorGreen')
// }

// const changeThem = document.querySelector('.change-theme')
// const text = document.querySelector('.text')

// // changeThem.onclick = () => {
// //     document.body.classList.toggle('dark')
// //     text.classList.toggle('white')
// // }



// // const one = document.querySelector('.one')
// // const two = document.querySelector('.two')
// // const three = document.querySelector('.three')
// // const four = document.querySelector('.four')


// // const oneText = document.querySelector('.one-text')

// // one.addEventListener('click', () => {
// //     !oneText.textContent
// //         ?oneText.textContent = 'HELLO'
// //         :oneText.textContent = ''
// // })

// // console.log(!'');


// two.addEventListener('mouseover', () => {
//     two.style.background = 'black'
//     two.textContent = 'hello'
//     two.style.color = 'white'
// })


// two.addEventListener('mouseleave', () => {
//     two.style.background = ''
//     two.textContent = ''
// })




// three.addEventListener('mouseup', () => {
//     three.style.background = 'color'
//     three.textContent = ''
// })

// three.addEventListener('mousedown', () => {
//     three.style.background = 'aqua'
//     three.textContent = 'processing'
// })




// let offset = 0
// let num = 0

// four.style.color = 'white'
// four.style.fontSize = '30px'



// four.addEventListener('mousemove', () => {
//     offset++
//     num++
//     four.style.margin = `${offset}px`
//     four.textContent = num
// })




// // const input = document.querySelector('input')
// // const todoBtn = document.querySelector('#todo')
// // const output = document.querySelector('#output')


// // todoBtn.addEventListener('click', () => {
// //     const child = document.createElement('p')
// //     child.textContent = input.value
// //     output.append(child)
// // })





