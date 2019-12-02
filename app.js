// function to trigger animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button').addEventListener('click', () => {
        document.querySelector('.menu__list')
        .classList.toggle('menu__list--animate');
  })
});
    