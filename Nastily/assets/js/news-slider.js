window.addEventListener("DOMContentLoaded", () => {
    function sliderNews(slidesSel, prevSel, nextSel){
        const slides = document.querySelectorAll(slidesSel),
            prev = document.querySelector(prevSel),
            next = document.querySelector(nextSel);

        let index = 0;
        function showSlide(i = 0){
            if (i > slides.length - 1){
                index = slides.length - 1;
            }
            if (i < 0){
                index = 0;
            }

            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('slides-prev-active');
                slide.classList.remove('slides-next-active');
            })

            slides[index].style.display = 'flex';
        }
        showSlide();

        function nextSlide(i){
            index += i;
            showSlide(index);
        }

        prev.addEventListener('click', () => {
            nextSlide(-1);
            slides[index].classList.add('slides-prev-active');
        })

        next.addEventListener('click', () => {
            nextSlide(1);
            slides[index].classList.add('slides-next-active');
        })
    }

    sliderNews('.news__content__slider__wrap__slides', '.news__content__slider__arrows__prev', '.news__content__slider__arrows__next')
})