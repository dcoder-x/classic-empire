const hrObserver = new IntersectionObserver((entries,)=>{
    entries.forEach((entry)=>{
        let elem = entry.target
        if (entry.isIntersecting) {
            
            elem.classList.add('scale')
            elem.style.transform='scale(1)'
        } else {
            elem.classList.remove('scale')
            elem.style.transform='scale(0)'
        }
    })
})

const hr = document.querySelectorAll('hr')

hr.forEach((element)=>{
    hrObserver.observe(element)
})

//slider

const slider = document.querySelectorAll('.slider'),
figure = document.querySelector('figure'),
slideLeftBtn = document.querySelector('.left'),
slideRightBtn = document.querySelector('.right')

// let width = figure.offsetWidth;
// console.log(figure.offsetWidth)
// slideLeftBtn.onclick =()=>{
//     console.log(figure.offsetWidth)
//     figure.classList.remove('slide')
//     setTimeout(()=>{
//         figure.classList.add('slide')
//         console.log('added')
//     },5000)
//     clearTimeout()
//     figure.scrollBy(-(width-100),0)
//     console.log('hello')
   
    
// }
// slideRightBtn.onclick =()=>{
//     console.log(figure.offsetWidth)
//     figure.classList.remove('slide')
//     setTimeout(()=>{
//         figure.classList.add('slide')
//         console.log('added')
//     },5000)
//     clearTimeout()
//     figure.scrollBy((width),width)
//     console.log('hello')
    
// }

const nav = document.querySelector('nav')
window.onscroll=()=>{
    if (document.body.scrollTop||document.documentElement.scrollTop>100) {
        nav.style.backgroundColor="rgba(0,0,0)"
    } else {
        nav.style.backgroundColor="rgba(0, 0, 0, 0)"
    }
}

const sliderText = document.querySelector('.text')
