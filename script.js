
function navAnimtaion(){
    let nav = document.querySelector("nav")
    nav.addEventListener("mouseenter" , ()=>{
        let tl = gsap.timeline();
        tl.to("#nav-bottom",{
            height: "26vh"
        })
        tl.to(".nav-elem h5", {
            duration: 0.1,
            display: "block"
        })
        tl.to(".nav-elem h5 span",{
            y: 0, 
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave" , ()=>{
        let tl = gsap.timeline();
        tl.to(".nav-elem h5 span",{
            y: 25, 
            stagger: {
                amount: 0.1
            }
        })
        tl.to(".nav-elem h5",{
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom",{
            height: 0,
            duration:0.4
        })
    })
    
}

navAnimtaion();
