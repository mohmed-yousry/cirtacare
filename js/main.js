// handle onload function
const divLoad = document.querySelector(".loead") ;
const seletCode2 = document.querySelector("#code") ;
let inputHidd = document.querySelector("#countercode") ;
let mobileManue = document.querySelector(".mobile-manue");
let closeManueMobile = document.querySelector(".mobile-manue .closeBtn i ") ;
let overlayManueMobile = document.querySelector(".mobile-manue .overlay ") ;
let selectContryLanding  = document.querySelector(".selected-contry") ; 
// console.log(window.screen.width);
let togleBtn = document.querySelector("nav .togle i") ;
window.onload = () => {
  getcounttry()
  if(document.querySelector(".slide-number") != null) {
      document.querySelector(".slide-number").innerHTML = swiperHome.realIndex + 1 ;
  }
  if(divLoad != null) {
    divLoad.style.display = `none` ;
  }
}


// handle onload function

// contact page
// contact
// const seletCode = document.querySelector("#code") ; 
const form = document.querySelector(".contactus-form") ; 
function getcounttry () {
  if(selectContryLanding == null) {
    fetch(`./code.json`).then((data) => data.json()).then((allData)=> {
        allData.forEach(element => {
            let option = document.createElement("option") ; 
            option.setAttribute("contry" , element.name) ;
            if(option.getAttribute("contry") == inputHidd.value) {
              option.setAttribute("selected" , "")
            }
            option.value = element.dialCode ; 
            option.innerHTML = `
            <p class="text-gray-900 leading-none text-xs">${element.isoCode} (${element.dialCode}) </p>
            `
            seletCode2.appendChild(option)
            
        });
    })

  } else {
    let allcontry2 = document.querySelector(".allcontry2") ; 
    let imgActive = document.querySelector(".contry-img")
    let input2  =document.querySelector(".input-contry-2")
    let inputLoction = document.querySelector(".input-gps") ; 
    fetch("./code.json").then((getdata) => getdata.json()).then((data) => {
      data.forEach(e=> {
         // console.log(e);
         let div = document.createElement("div") ; 
         div.className = `flex contry p-3 cursor-pointer`
         div.innerHTML = `
         <img class="w-6 h-6" src="${e.flag}" alt="alt" style = "width : 1.5rem ; height : 1.5rem ;">
         <p> ${e.name} </p>
         <p> (${e.dialCode}) </p>
         `
         allcontry2.appendChild(div)
         // console.log(e.name);
   
           if(inputHidd.value == e.name) {
             // console.log(e.name);
           imgActive.src = `${e.flag}` ; 
           input2.value = `${e.dialCode.replace("+" , "0")}`
           inputLoction.value = `${e.name}`
           
          }
       //  })
        })
        
   
        let allcontry22 = Array.from(document.querySelectorAll(".contry")) ; 
        allcontry22.forEach(e=> {
         e.addEventListener("click" , (tr) => {
          allcontry2.classList.add("hidden")
         inputLoction.value = `${e.children[1].innerHTML}`
          imgActive.src = `${e.children[0].getAttribute("src")}`
             input2.value = e.children[2].innerHTML.trim().replace("(" , "").replace(")" , "").replace("+" , "0") ;; 
         })
        })
      })
      selectContryLanding.addEventListener("click" , () => {
       allcontry2.classList.toggle("hidden")
      })
  }
}

// index home page



if(document.querySelector(".mySwiper99")) {
  let mySwiper99 = new Swiper(".mySwiper99", {
    loop : true ,
    noSwiping: true,
  noSwipingClass: 'swiper-slide',
  
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  
}
if(document.querySelector(".swiperHome")) {
  var swiperHome = new Swiper(".swiperHome", {
      direction: "vertical",
      loop : true ,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    swiperHome.on("slideChange", function (tr) {
      document.querySelector(".slide-number").innerHTML = tr.realIndex + 1;
    });

}

 // index home page

//  service page
if(document.querySelector(".service-swiper")) {
  let serviceSwiper = new Swiper(".service-swiper", {
      loop : true ,
      breakpoints: {
        350: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

}


  const serviceTwoPlay = document.querySelector(".service2 i") ;
  if(serviceTwoPlay != null) {
      serviceTwoPlay.addEventListener("click" , () => {
        let ifrem = document.createElement("iframe") ;
        ifrem.src = serviceTwoPlay.parentElement.parentElement.parentElement.getAttribute("src") ;
        serviceTwoPlay.parentElement.parentElement.appendChild(ifrem)
        ifrem.width = "100%" ;
        ifrem.height = "100%" ;
        serviceTwoPlay.parentElement.parentElement.children[1].remove() ;
        serviceTwoPlay.parentElement.remove() ; 
        
      })

  }

//  service page




// handle nav
let navStatus = document.querySelector("nav.absolute") ;
// console.log(navStatus);
if(navStatus != null) {
  let nav = document.querySelector("nav") ;
  let navUl = document.querySelector("nav ul") ;
  let iconsSochil = document.querySelector(".icons-sochil") ;
  let height = window.screen.availWidth ;
  let navLogo = document.querySelector("nav .logo img") ;
  let navActiveItem = document.querySelector("nav .active-nav") ;
  let togleBtn = document.querySelector("nav .togle i") ;
  let mobileManue = document.querySelector(".mobile-manue");
  let closeManueMobile = document.querySelector(".mobile-manue .closeBtn i ") ;
  let chnageLang = Array.from(document.querySelectorAll("nav .changeleng")) ;
  let header = document.querySelector("header") ;
    // console.log(iconsSochil.clientHeight);
    function handleNav (num) {
      if(scrollY > window.screen.availWidth - num) {
        nav.classList.remove("absolute")
        nav.classList.add("fixed")
        nav.classList.add("bg-white")
        navUl.classList.remove("text-white")
        navUl.classList.add("color2")
        navLogo.src = "https://cirtacare.com/website/img/footer-logo.svg"
        chnageLang[0].src = "https://cirtacare.com/website/img/languageblack.svg"
        chnageLang[1].src = "https://cirtacare.com/website/img/languageblack.svg"
        navLogo.width = "68"
        navLogo.height = "50"
        navActiveItem.classList.remove("active-nav")
        navActiveItem.classList.add("active-nav2")
        togleBtn.classList.remove("text-white")
        togleBtn.classList.add("active-nav2")
      } else {
        nav.classList.add("absolute")
        nav.classList.remove("fixed")
        nav.classList.remove("bg-white")
        navUl.classList.add("text-white")
        navUl.classList.remove("color2")
        navLogo.src = "https://cirtacare.com/website/img/new-logo.svg"
        chnageLang[0].src = "https://cirtacare.com/website/img/language.svg"
        chnageLang[1].src = "https://cirtacare.com/website/img/language.svg"
        navLogo.width = "68"
        navLogo.height = "50"
        navActiveItem.classList.add("active-nav")
        navActiveItem.classList.remove("active-nav2")
        togleBtn.classList.add("text-white")
        togleBtn.classList.remove("active-nav2")
      }
    }


    if(window.innerWidth > 768) {

    window.addEventListener("scroll" , (ev) =>{
      if(scrollY >= iconsSochil.clientHeight * 1.2) {
            iconsSochil.classList.remove("text-white")
            iconsSochil.classList.add("text-[#131B39]")
        }
        else {
            iconsSochil.classList.add("text-white")
            iconsSochil.classList.remove("text-[#131B39]")
        }

       handleNav(1000)
    })

    } else if(window.innerWidth < 767){
      // console.log();
      
      if(window.navigator.userAgent.includes("iPhone")) {
        nav.classList.replace("absolute" , "fixed") ;
        // nav.style.height = "70px"
        nav.classList.add("bg-white") ;
        nav.classList.add("top-0") ;
        navUl.classList.remove("text-white") ;
        navUl.classList.add("color2") ;
        navLogo.src = "https://cirtacare.com/website/img/footer-logo.svg" ;
        chnageLang[0].src = "https://cirtacare.com/website/img/languageblack.svg" ;
        chnageLang[1].src = "https://cirtacare.com/website/img/languageblack.svg" ;
        navLogo.width = "68" ;
        navLogo.height = "50" ;
        navActiveItem.classList.remove("active-nav") ;
        navActiveItem.classList.add("active-nav2") ;
        togleBtn.classList.remove("text-white") ;
        togleBtn.classList.add("active-nav2") ;
        header.style.marginTop = "75px" ;
        
      } else {
        window.addEventListener("scroll" , (ev) =>{
          handleNav(0)
        })

      }
    }
} 
// handle nav


// handle videos

if(document.querySelector(".videos-slider") ) {
    let videosSwiper = new Swiper(".mySwiper2", {
        effect: "cards",
        cardsEffect : {
          slideShadows : false ,
          perSlideOffset : 8 ,
          perSlideRotate : 2 ,
          transformEl : false ,
        } ,
        loop :true ,
        grabCursor: true,
      });

      let allBtnPlay = document.querySelectorAll(".videos-slider .play-videos") ;
          allBtnPlay.forEach(e=> {
              e.addEventListener("click" , () => {
                let ifrem = document.createElement("iframe") ;
                ifrem.style.width = "100%";
                ifrem.style.height = "100%" ;
                ifrem.setAttribute("allow", "autoplay")
                const src =e.parentElement.parentElement.getAttribute("src").replace("watch?v=" , "embed/")+"?autoplay=1" ;
                ifrem.src = src ;
                e.parentElement.children[0].style.display = "none" ;
                e.parentElement.children[1].style.display = "none" ;
                e.parentElement.appendChild(ifrem)
              })
            })

            videosSwiper.on("slideChange", function (tr) {
              let allAlfream = document.querySelectorAll(".videos-slider iframe") ;
              if(allAlfream.length != 0) {

                allAlfream.forEach (e => {
                  e.parentElement.parentElement.children[0].children[0].style.display = "inherit" ;
                  e.parentElement.parentElement.children[0].children[1].style.display = "flex" ;
                  e.parentElement.parentElement.children[0].style.display = "inherit" ;
                  e.parentElement.parentElement.children[1].style.display = "inherit" ;
                  e.remove()
                }) ;
              }
            });


}
// handle videos

// handle togle mobile
togleBtn.addEventListener("click" , () => {
    if(document.querySelector("html").getAttribute("dir") == "rtl") {
      mobileManue.style.right = "0px"
    }
    else {
      mobileManue.style.left = "0px"

    }
  })

  function closeMobile () {
    if (document.querySelector("html").getAttribute("dir") == "rtl") {
      mobileManue.style.right = "-200%";
    } else {
      mobileManue.style.left = "-200%";
    }
  }
  closeManueMobile.addEventListener("click" , closeMobile)
  overlayManueMobile.addEventListener("click" , closeMobile)

// handle togle mobile
// handle dorp down
const downDownBtn = document.querySelector(".drop-down") ;
const menue  = document.querySelector(".dorp-menue") ;
downDownBtn.addEventListener("click" , (tr) => {
  menue.classList.toggle("hidden")
})

window.addEventListener("click" , (tr) => {
  if(tr.target.classList.contains("fa-chevron-down") || tr.target.classList.contains("drop-link") ) {
  } else {
    menue.classList.add("hidden")
  }
})



// handle partines

if(document.querySelector(".parints-swiper")) {
    let parintsSwiper = new Swiper(".parints-swiper", {
        loop : true ,
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
}
  // handle partines
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
// handle dorp down
// landing
if(document.querySelector(".mySwiperse93") != null) {
  let swiper99 = new Swiper(".mySwiperse93", {
    
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

}

// swiper


const playVedios = document.querySelector(".play-youtuobe") ;
if(playVedios != null) {
  playVedios.addEventListener("click" , function(tr) {
    let src = "https://www.youtube.com/embed/0FOtRnqG1kU"
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
}


// after && before img

let allInputRange = Array.from(document.querySelectorAll(".container-imgs"));

function resize2(sec) {
  if(document.querySelector("html").getAttribute("dir") == "rtl") {
    sec.children[1].children[0].style.clipPath = `inset(0 ${sec.children[1].children[2].value}% 0 0)`;
   
  } else {
    sec.children[1].children[1].style.clipPath = `inset(0 0 0 ${sec.children[1].children[2].value}%)`;

  }
}

if (allInputRange.length > 0) {
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
  
}
// landing

