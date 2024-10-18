let header =document.getElementById('head');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
       header.classList.add('scrollDown')
    }
    else
    {
        header.classList.remove('scrollDown')
    }
});