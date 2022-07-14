window.addEventListener('DOMContentLoaded', () => {
    let tabsLight = document.querySelector('.persons-list__tab__light');
    let tabsDark = document.querySelector('.persons-list__tab__dark');
    let personsDark = document.querySelector('.persons-list__content_dark');
    let personsLight = document.querySelector('.persons-list__content_light');
    let btn = document.getElementById('registration');
    let close = document.querySelector('.window__close');
    let modal = document.querySelector('.window');

    tabsLight.addEventListener('click',()=>{
        personsDark.classList.add('persons-list__content__hidden');
        personsLight.classList.add('persons-list__content__visible');
        tabsLight.classList.add('persons-list__tab__light__active');
        personsLight.classList.remove('persons-list__content__hidden');
        personsDark.classList.remove('persons-list__content__visible');
        tabsDark.classList.remove('persons-list__tab__dark__active');
    });

    tabsDark.addEventListener('click',()=>{
        personsLight.classList.add('persons-list__content__hidden');
        personsLight.classList.remove('persons-list__content__visible');
        tabsDark.classList.add('persons-list__tab__dark__active');
        personsDark.classList.add('persons-list__content__visible');
        personsDark.classList.remove('persons-list__content__hidden');
        tabsLight.classList.remove('persons-list__tab__light__active');
    });
    
    btn.addEventListener('click',()=>{
        modal.classList.remove('window__hidden');
    })

    close.addEventListener('click',()=>{
        modal.classList.add('window__hidden')
    })
})




