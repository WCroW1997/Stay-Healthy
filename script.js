const input = document.querySelector('#email__input'),
      btn = document.querySelector('#form__btn'),
      body = document.querySelector('body'),
      sliderWrapper = document.querySelector('.slider__wraper'),
      btnNext = document.querySelector('#next__slide'),
      btnPrev = document.querySelector('#prev__slide'),
      slides = document.querySelectorAll('.slide')

let widthArr = [0]
let sliderWidth = 0
let offset = 0
let step = 0

// for (let index = 0; index < slides.length; index++) {
//     widthArr.push(slides[index].offsetWidth + 30)
//     sliderWidth += slides[index].offsetWidth + 30
// }

// sliderWrapper.style.width = sliderWidth + 'px'


// // console.log(sliderWrapper);
// console.log(sliderWidth);
// console.log(widthArr);

// btnNext.addEventListener('click', () => {
//     offset = offset + widthArr[step]
//     sliderWrapper.style.left = offset + 'px'
//     step++
// })
      
// btnPrev.addEventListener('click', () => {
//     console.log('prev');
// })





const createPopup = email =>{
    return `
    <div class="popup">
        <p class="popup__text">Now your email <strong>${email}</strong>  on our news list</p>
    </div>
`
}

btn.addEventListener('click', () =>{
   
    const emailValue = input.value
    body.innerHTML += createPopup(emailValue)
    setTimeout(() => {
        const popup = document.querySelector('.popup')
        popup.remove()
    }, 5000);
})



