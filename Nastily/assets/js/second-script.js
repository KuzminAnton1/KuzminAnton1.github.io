window.addEventListener('DOMContentLoaded', () => {
    function headerScroll(headerSel) {
        const header = document.querySelector(headerSel);
        const postPage = document.querySelector('.post-page');
    
        if (document.documentElement.clientWidth > 1140 && !postPage){
            if(window.scrollY > 50){
                header.classList.add('header__active');
            }else{
                header.classList.remove('header__active');
            }
        
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50){
                    header.classList.add('header__active');
                }else{
                    header.classList.remove('header__active');
                }
            })
        }
        if (postPage){
            header.classList.add('header__active');
            if(window.scrollY > 50){
                header.classList.add('header__active');
            }
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50){
                    header.classList.add('header__active');
                }
            })
        }
    }
    headerScroll('header');

    function toggleMenu(triggerSel, menuSel) {
        const trigger = document.querySelector(triggerSel),
            menu = document.querySelector(menuSel);
    
        trigger.addEventListener('click', () => {
            menu.classList.toggle('header__wrap__menu__active');
            trigger.classList.toggle('header__wrap__menu-btn__active');
        })
    }
    toggleMenu('.header__wrap__menu-btn', '.header__wrap__menu');

    function pageupScroll(blocksSel){
        const blocks = document.querySelectorAll(blocksSel);
    
        blocks.forEach(block => {
            block.addEventListener('click', () => {
                window.scrollTo(0,0);
            })
        })
    }
    pageupScroll('.pageup');

    const span = document.querySelector('.copyright__year');
    let date = new Date().getFullYear();
    span.textContent = date;


    function Tabs(tabsSel, textContentSel, imgContentSel){
        const tabs = document.querySelectorAll(tabsSel),
            textBlocks = document.querySelectorAll(textContentSel),
            imgBlocks = document.querySelectorAll(imgContentSel);
    
        function activeTab(i = 0){
            tabs.forEach(tab => {
                tab.classList.remove('about-product__wrap__descr__tabs__item__active');
            })
            textBlocks.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('text-animation');
            })
            imgBlocks.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('img-animation');
            })
    
            textBlocks[i].style.display = 'block';
            textBlocks[i].classList.add('text-animation');
            tabs[i].classList.add('about-product__wrap__descr__tabs__item__active');
            imgBlocks[i].style.display = 'flex';
            imgBlocks[i].classList.add('img-animation');
        }
        activeTab();
        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                activeTab(i);
            })
        })
    }

    if (document.querySelector('.about-us')){
        Tabs('.about-us__wrap__descr__tabs__item', '.about-us__wrap__descr__tab-content__item', '.about-us__wrap__img__item');
    }
    if (document.querySelector('.products-pluses__content')){
        Tabs('.about-product__wrap__descr__tabs__item', '.about-product__wrap__descr__tab-content__item', '.about-product__wrap__img__item');
    }
})