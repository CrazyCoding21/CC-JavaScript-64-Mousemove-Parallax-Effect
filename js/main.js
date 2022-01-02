document.addEventListener('mousemove', parallaxEffect);

function parallaxEffect(e){
    this.querySelectorAll('.text').forEach(text => {
        let x = (window.innerWidth - e.pageX * 2) / 2;
        text.style.transform = `translateX(${x}px)`;
    });
}