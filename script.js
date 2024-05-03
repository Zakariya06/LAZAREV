function navAnimtaion() {
  let elem = document.querySelectorAll(".nav-elem h4");
  elem.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      let tl = gsap.timeline();
      tl.to("#nav-bottom", {
        height: "26vh",
      });
      tl.to(".nav-elem h5", {
        duration: 0.1,
        display: "block",
      });
      tl.to(".nav-elem h5 span", {
        y: 0,
        stagger: {
          amount: 0.6,
        },
      });
    });
    e.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();
      tl.to(".nav-elem h5 span", {
        y: 25,
        stagger: {
          amount: 0.1,
        },
      });
      tl.to(".nav-elem h5", {
        display: "none",
        duration: 0.1,
      });
      tl.to("#nav-bottom", {
        height: 0,
        duration: 0.4,
      });
    });
  });
}

function page2Animation() {
  let rightElem = document.querySelectorAll(".right-elem");

  rightElem.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
      gsap.to(e.target.children[1], {
        opacity: 1,
        scale: 1,
      });
    });
    e.addEventListener("mouseleave", () => {
      gsap.to(e.children[1], {
        opacity: 0,
        scale: 0,
      });
    });

    e.addEventListener("mousemove", (dets) => {
      e.children[1].style.transform = `translate(${
        dets.clientX - e.getBoundingClientRect().x - 10
      }px, ${dets.clientY - e.getBoundingClientRect().y - 100}px)`;

      // gsap.to(e.children[1],{
      //     x: dets.X - e.getBoundingClientRect() -10,
      //     y: dets.Y - e.getBoundingClientRect() - 100
      // })
    });
  });
}

function page3Animation() {
  let playIcon = document.querySelector(".page3-center");
  let video = document.querySelector("#page3 video");

  playIcon.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1.2) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: 30,
    });
  });
}

function videoAnimation() {
  let secVideo = document.querySelectorAll(".section1-right video");
  secVideo.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.style.opacity = 1;
      video.play().catch((error) => {
        // Autoplay was prevented, handle the error
        console.error("Autoplay was prevented: ", error);
      });
    });

    video.addEventListener("mouseleave", () => {
      video.style.opacity = 0;
      video.pause();
      video.currentTime = 0;
    });
  });
}

function cardAnimation() {
  let card = document.querySelectorAll(".sec-card");
  card.forEach((cards) => {
    cards.addEventListener("mouseenter", (evt) => {
      let video = cards.children[2].childNodes[3];
      video.style.opacity = 1;
      video.play().catch((error) => {
        // Autoplay was prevented, handle the error
        console.error("Autoplay was prevented: ", error);
      });
    });

    
    cards.addEventListener("mouseleave", () => {
        let video = cards.children[2].childNodes[3];
        video.style.opacity = 0;
        video.pause();
        video.currentTime = 0;
      });


  });
}

navAnimtaion();
page2Animation();
page3Animation();
videoAnimation();
cardAnimation();
