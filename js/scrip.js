const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()

gsap.to('.header .logo',{
     opacity: 1,
     dispaly: "block",
     ease: "power2.out",
     delay:1,
     duration:1
});

gsap.to('.header .burger', {
    opacity: 1,
    display: "block",
    ease: "power2.out",
    delay:1,
    duration:1
},0.5);

gsap.to('.hero img',{
   opacity: 1,
   display: "block",
   ease: "power2.out",
   delay:1,
   duration:3
},1.5);

gsap.to('.hero .circle',{
    opacity: 1,
    display:"block",
    ease: "power2.out",
    delay:1,
    duration:5
},2);

gsap.to('.menu-rotate, .phone',{
    opacity: 1,
    display:"block",
    ease: "power2.out",
    delay:1,
    duration:2
},3.7);

gsap.to('.budget .social',{
    opacity: 1,
    display:"block",
    ease: "power2.out",
    delay:1,
    duration:2
},3.8);

}
    
    
