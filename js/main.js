const nextBtn = document.querySelector('#right')
const prevBtn = document.querySelector('#left')
const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)

sliderItems.forEach(function(slide, index){

    if (index !== 0){
        slide.classList.add('hidden')
    }


    slide.dataset.index = index



    sliderItems[0].setAttribute('data-active', '')

    slide.addEventListener('click', function(){



        let nextSlideIndex

        if(index + 1 === sliderItems.length){
            nextSlideIndex = 0
        }
        else{
            nextSlideIndex = +slide.dataset.index + 1
        }


        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
 
    })

})



nextBtn.onclick = function(){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex

    if(currentSlideIndex + 1 === sliderItems.length){
        nextSlideIndex = 0
    }
    else{
        nextSlideIndex = currentSlideIndex + 1
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
}

prevBtn.onclick = function(){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex

    if(currentSlideIndex === 0){
        nextSlideIndex = sliderItems.length - 1
    }
    else{
        nextSlideIndex = currentSlideIndex - 1
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
}
