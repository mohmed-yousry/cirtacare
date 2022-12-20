const divLoad = document.querySelector(".loead");
const seletCode2 = document.querySelector("#code");
let inputHidd = document.querySelector("#countercode");
let whatsIcon = document.querySelector(".whatschat");
let allInputRange = Array.from(document.querySelectorAll(".container-imgs"));
window.onload = () => {
  whatsIcon.style.display = `none`;
  divLoad.style.display = `none`;

  setTimeout(() => {
    whatsIcon.style.display = `flex`;
  }, 10000);
  if (location.href.includes("contact")) {
    for (let i = 0; i < seletCode2.options.length; i++) {
      if (seletCode2.options[i].getAttribute("code") == inputHidd.value) {
        seletCode2.options[i].getAttribute("code");
        seletCode2.options[i].setAttribute("selected", "");
      }
    }
  }

  // handle contry2
  let allcontry2 = document.querySelector(".allcontry2");
  let imgActive = document.querySelector(".contry-img");
  let input2 = document.querySelector(".input-contry-2");
  let inputLoction = document.querySelector(".input-gps");
  //  let inputContry2 = document.querySelector(".input-contry") ;
  let selectContry = document.querySelector(".selected-contry");
  fetch("./code.json")
    .then((getdata) => getdata.json())
    .then((data) => {
      data.forEach((e) => {
        let div = document.createElement("div");
        div.className = `flex contry p-3 cursor-pointer`;
        div.innerHTML = `
      <img class="w-6 h-6" src="${e.flag}" alt="alt" style = "width : 1.5rem ; height : 1.5rem ;">
      <p> ${e.name} </p>
      <p> (${e.dialCode}) </p>
      `;
        allcontry2.appendChild(div);
        fetch(`https://api.db-ip.com/v2/free/self`)
          .then((getip) => getip.json())
          .then((ip) => {
            if (ip.countryName == e.name) {
              imgActive.src = `${e.flag}`;
              input2.value = `${e.dialCode.replace("+", "0")}`;
              inputLoction.value = `${e.name}`;
            }
          });
      });

      let allcontry22 = Array.from(document.querySelectorAll(".contry"));
      allcontry22.forEach((e) => {
        e.addEventListener("click", (tr) => {
          allcontry2.classList.add("hidden");
          inputLoction.value = `${e.children[1].innerHTML}`;
          imgActive.src = `${e.children[0].getAttribute("src")}`;
          input2.value = e.children[2].innerHTML
            .trim()
            .replace("(", "")
            .replace(")", "")
            .replace("+", "0");
        });
      });
    });
  selectContry.addEventListener("click", () => {
    allcontry2.classList.toggle("hidden");
  });

  // handle contry2


};

// loaed

// public settings

// img.setAttribute("loading", "lazy");
let allImg = Array.from(document.querySelectorAll("img"));
// navbar
// doropMobile
let allDrop2 = Array.from(document.querySelectorAll(".drop-mobile"));
allDrop2.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.children[0].classList.contains("icon-angle-down")) {
      e.children[0].classList.remove("icon-angle-down");
      e.children[0].classList.add("icon-ctrl");
    } else {
      e.children[0].classList.add("icon-angle-down");
      e.children[0].classList.remove("icon-ctrl");
    }
    e.children[1].classList.toggle("hidden");
  });
});
// doropMobile
// dowopdesktop
const allSection = Array.from(document.querySelectorAll(".basic"));
const allDrowpDown = Array.from(document.querySelectorAll(".dowpdesktop"));
allDrowpDown.forEach((e) => {
  e.addEventListener("click", () => {
    allDrowpDown.forEach((k) => {
      k.children[1].classList.add("hidden");
    });
    e.children[1].classList.remove("hidden");
  });
});

document.querySelector("body").addEventListener("click", (tr) => {
  if (tr.target.classList.contains("main-nav")) {
    allDrowpDown.forEach((e) => {
      e.children[1].classList.add("hidden");
    });
  } else if (tr.target.classList.contains("dowpdesktop")) {
  } else {
    allDrowpDown.forEach((e) => {
      e.children[1].classList.add("hidden");
    });
  }
});

// dowopdesktop

// togle
document.querySelector(".togle").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.remove("hidden");
  document.querySelector(".nav-mobile .overlay").classList.remove("hidden");
});

document.querySelector(".close-mobile-nav").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.add("hidden");
  document.querySelector(".nav-mobile .overlay").classList.add("hidden");
});

document.querySelector(".nav-mobile .overlay").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.add("hidden");
  document.querySelector(".nav-mobile .overlay").classList.add("hidden");
});

// navbar
let allDrop = Array.from(document.querySelectorAll(".dropdown"));
allDrop.forEach((e) => {
  e.addEventListener("click", () => {
    e.children[1].classList.toggle("hidden");
  });
});

//select box
// section-videos
const allPlayerVaideos = Array.from(document.querySelectorAll(".video-player"));
allPlayerVaideos.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.parentElement.children[0].style.zIndex = `5`;
    e.parentElement.parentElement.remove();
  });
});
// section-videos

// handle To up Btn

const toUp = document.querySelector(".toUp");
toUp.onclick = () => {
  window.scrollTo(0, 0);
};
window.onscroll = () => {
  if (scrollY < 250) {
    toUp.classList.add("hidden");
  } else {
    toUp.classList.remove("hidden");
  }
};
// handle To up Btn

// public settings

// lazy loead
const imgElements = document.querySelectorAll("[data-src]");
const lazyLoadingImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
      observer.unobserve(entry.target);
    });
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0.9,
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));
// lazy loead

// video-player

const playVedios = document.querySelector(".play-youtuobe") ;
playVedios.addEventListener("click" , function(tr) {
  let src = "https://www.youtube.com/embed/2D9br1kUS0M"
  let iframe = document.createElement("iframe") ; 
  let parintElement = document.querySelector(".cover .content .left .imges") ; 
  let overlay = document.querySelector(".cover .content .left .imges .overlay")
  let img = document.querySelector(".cover .content .left .imges img ")
  iframe.src = src ; 
  iframe.className = `w-[65%] maxmd:w-full` ; 
  iframe.style.aspectRatio = `16 / 9` ; 
  iframe.setAttribute("frameborder" , "0")
  iframe.setAttribute("allow" , "accelerometer")
  iframe.setAttribute("allowfullscreen" , "")
  iframe.setAttribute("gyroscope" , "picture-in-picture")
  overlay.remove()
  img.remove()
  parintElement.appendChild(iframe)
  
})

// video-player

//swiper
var swiper = new Swiper(".mySwiper55", {
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides  :true ,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});


var swiper = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: true,
  slidesPerView: 2.5,
  spaceBetween: 0,
centeredSlides : true ,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
  breakpoints: {
      640: {
          slidesPerView: 2.5,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 0,
      },
      1024: {
          slidesPerView: 5,
          spaceBetween: 0,
      },
  },

});


var swiper = new Swiper(".mySwiperse93", {
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop :true ,
  breakpoints: {
    400 : {
      slidesPerView: 1,
      spaceBetween: 20,
    } , 
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    
  },
});


//swiper

// after && before img

// function resize(sec) {
//   if(document.querySelector("html").getAttribute("dir") == "rtl") {
//     sec.children[1].style.clipPath = `inset(0 ${sec.children[3].value}% 0 0)`;
//     // console.log(sec)
//   } else {
//     console.log(sec.children[2])
//     sec.children[2].style.clipPath = `inset(0 0 0 ${sec.children[3].value}%)`;
//   }
// }
// allInputRange[0].addEventListener("input", () => {
//   resize(allInputRange[0]);
// });
// allInputRange[1].addEventListener("input", () => {
//   resize(allInputRange[1]);
// });
// allInputRange[2].addEventListener("input", () => {
//   resize(allInputRange[2]);
// });
// allInputRange[3].addEventListener("input", () => {
//   resize(allInputRange[3]);
// });
// after && before img

// dalete last card in section OUR_PLASTIC
// const ourPlastic = Array.from(document.querySelectorAll(".OUR_PLASTIC .cards .card")) ; 
// if(window.screen.width < 767 ) {
//   ourPlastic[ourPlastic.length - 1].remove() ;
// }



function resize2(sec) {
  if(document.querySelector("html").getAttribute("dir") == "rtl") {
    sec.children[1].children[0].style.clipPath = `inset(0 ${sec.children[1].children[2].value}% 0 0)`;
   
  } else {
    sec.children[1].children[1].style.clipPath = `inset(0 0 0 ${sec.children[1].children[2].value}%)`;

  }
}


allInputRange[0].addEventListener("input", () => {
  resize2(allInputRange[0]);
});
allInputRange[1].addEventListener("input", () => {
  resize2(allInputRange[1]);
});
allInputRange[2].addEventListener("input", () => {
  resize2(allInputRange[2]);
});
allInputRange[3].addEventListener("input", () => {
  resize2(allInputRange[3]);
});
// dalete last card in section OUR_PLASTIC


