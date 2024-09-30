gsap.registerPlugin(ScrollTrigger)
const cursor1 = document.querySelector('.cursor')
const cursor2 = document.querySelector('.blur-cursor')
const main = document.querySelector('main')
window.addEventListener('mousemove', function(e) {
    gsap.to(cursor1,{
        x: e.clientX,
        y: e.clientY,
        duration:.7
    })
    gsap.to(cursor2,{
        x: e.clientX,
        y: e.clientY,
        duration:1.5,
        delay:.2
    })
})

gsap.to(main,{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'.section2',
        start:'top bottom',
        end:'top 30%',
        scrub:2,
    }
})
document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mousemove', function(e) {
        gsap.to(cursor1,{
            width: '8rem',
            height: '8rem',
            backgroundColor:'transparent',
            border:'2px solid #fff',
            duration:.3
        })
    })
    card.addEventListener('mouseleave', function(e) {
        gsap.to(cursor1,{
            width: '2.3rem',
            height: '2.3rem',
            backgroundColor:'rgb(149, 193, 30)',
            border:'none',
            duration:.3
        })
    })
})
document.querySelectorAll('.links p').forEach(card=>{
    card.addEventListener('mousemove', function(e) {
        gsap.to(cursor1,{
            width: '8rem',
            height: '8rem',
            backgroundColor:'transparent',
            border:'2px solid #fff',
            duration:.3
        })
    })
    card.addEventListener('mouseleave', function(e) {
        gsap.to(cursor1,{
            width: '2.3rem',
            height: '2.3rem',
            backgroundColor:'rgb(149, 193, 30)',
            border:'none',
            duration:.3
        })
    })
})