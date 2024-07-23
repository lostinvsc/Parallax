let parallx_el = document.querySelectorAll('.parallax')
let xv = 0,
    yv = 0;

window.addEventListener('mousemove', (e) => {
    xv = e.clientX - window.innerWidth / 2
    yv = e.clientY - window.innerHeight / 2
if(timeline.isActive()){
    return ;
}

    Array.from(parallx_el).forEach((el) => {
        let mp = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zv = (e.clientX - parseFloat(getComputedStyle(el).left)) * mp;
        let xspeed = el.dataset.speedx
        let yspeed = el.dataset.speedy
        el.style.transform = `translateX(calc(-50% + ${xv * xspeed}px)) translateY(calc(-50% + ${yv * yspeed}px)) perspective(3200px) translateZ(${-zv * 0.35}px)`

    })

})
let timeline = gsap.timeline();

Array.from(parallx_el).filter((el) => !el.classList.contains('text')).forEach((el) => {
    timeline.from(
        el,
        {
            top: `${el.offsetHeight / 2 + parseFloat(el.dataset.distance)}px`,
            duration: 4,
            ease: 'power3.out',
        },
        0
        
    )
})



timeline.from(
'.text h2',
{
y:'-200px',
duration:4,
ease:'power3.out',
opacity:0,
},
0.5
)
timeline.from(
'.text h1',
{
y:window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top +200 ,
duration:3,
ease:'power3.out',
},
2
)

timeline.from('.hide',{
    opacity:0,
    duration:3,
},3
)