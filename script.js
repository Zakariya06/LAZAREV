
function navAnimtaion(){
    let elem = document.querySelectorAll(".nav-elem h4")
    elem.forEach(e=>{
        e.addEventListener("mouseenter" , ()=>{
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
        e.addEventListener("mouseleave" , ()=>{
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
    })
   
    
}

function page2Animation(){
    

    let rightElem = document.querySelectorAll(".right-elem");
    
    rightElem.forEach(e=>{
        e.addEventListener("mouseenter", (e) => {
            gsap.to(e.target.children[1],{
                opacity: 1,
                scale: 1
            })
        })
        e.addEventListener("mouseleave" , () =>{
            gsap.to(e.children[1],{
                opacity: 0,
                scale: 0
              })
        })
    
        e.addEventListener("mousemove", (dets) =>{
            e.children[1].style.transform = `translate(${dets.clientX - e.getBoundingClientRect().x - 10}px, ${dets.clientY - e.getBoundingClientRect().y -100 }px)`
    
            // gsap.to(e.children[1],{
            //     x: dets.X - e.getBoundingClientRect() -10,
            //     y: dets.Y - e.getBoundingClientRect() - 100
            // })
        })
    })
    }

navAnimtaion();
page2Animation();

