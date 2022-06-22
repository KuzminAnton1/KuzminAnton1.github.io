window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navibar'),
    menuItem = document.querySelectorAll('.navibar_item'),
    hamburger = document.querySelector('#navi');

    hamburger.addEventListener('click', () => {
        menu.style.right = '0';
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.style.right = '150%';
        })
    })
})