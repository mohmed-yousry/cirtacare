// loead
const divLoad = document.querySelector(".loead") ; 
const seletCode2 = document.querySelector("#code") ; 
let inputHidd = document.querySelector("#countercode") ; 
window.onload = () => {
    divLoad.style.display = `none`
    if(location.href.includes("contact")) {
        for(let i = 0 ;i<seletCode2.options.length ; i++) {
            if(seletCode2.options[i].getAttribute("code") == inputHidd.value ) {
                    seletCode2.options[i].getAttribute("code") ;
                    seletCode2.options[i].setAttribute("selected" , "" ) ;
                }
            } 

    }

}
// loaed

// public settings

// img.setAttribute("loading", "lazy");
let allImg = Array.from(document.querySelectorAll("img")) ; 
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

document.querySelector("body").addEventListener("click" , (tr) => {
if(tr.target.classList.contains("main-nav")) {
  allDrowpDown.forEach(e=> {
    e.children[1].classList.add("hidden");
  })
} else if(tr.target.classList.contains("dowpdesktop")) {
}else {
  allDrowpDown.forEach(e=> {
    e.children[1].classList.add("hidden");
  })

}
})


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
    e.parentElement.parentElement.parentElement.children[0].style.zIndex = `5` ;
    e.parentElement.parentElement.remove();

  });
});
// section-videos


// contact
const seletCode = document.querySelector("#code") ; 
const form = document.querySelector(".contactUs form") ; 
function getcounttry () {
    fetch(`./code.json`).then((data) => data.json()).then((allData)=> {
        allData.forEach(element => {
            let option = document.createElement("option") ; 
            option.setAttribute("code" , element.isoCode) ;
            option.value = element.dialCode ; 
            option.innerHTML = `
            <p class="text-gray-900 leading-none text-xs">${element.isoCode} (${element.dialCode}) </p>
            `
            seletCode.appendChild(option)
            
        });
    })
}

form.onsubmit = (tr) => {
    getcounttry()
}
getcounttry()

// contact


// handle To up Btn
const toUp = document.querySelector(".toUp") ;
toUp.onclick = () => {
    window.scrollTo(0 ,0)
  }
  window.onscroll = () => {
    if(scrollY < 250) {
      toUp.classList.add("hidden")
  }else {
      toUp.classList.remove("hidden")
  
  }
  }
// handle To up Btn


// public settings


// swiper
var swiper = new Swiper(".mySwiper99", {
    loop : true ,
    noSwiping: true,
  noSwipingClass: 'swiper-slide',
  
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  
  var swiper = new Swiper(".mySwiper2", {
    loop: true,
    centeredSlides: true,
  
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
    // grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0 : {
        slidesPerView: 3,
        spaceBetween: 0,
      } , 
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  
  

  // swiper
  
  
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