// loead
const divLoad = document.querySelector(".loead") ; 
const seletCode2 = document.querySelector("#code") ; 
let inputHidd = document.querySelector("#countercode") ; 
window.onload = () => {
    divLoad.style.display = `none` ;
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
  

  var swiper2 = new Swiper(".mySwiper2", {
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


  
  var swiper3 = new Swiper(".mySwiper3", {
    // centeredSlides:true ,
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
let allIcons = document.querySelector(".icons") ; 
// console.log(iconsSochil.clientHeight);

function handleNav (num) {
  if(scrollY > window.screen.availWidth - num) {
    nav.classList.remove("absolute")
    nav.classList.add("fixed")
    nav.classList.add("bg-white")
    navUl.classList.remove("text-white")
    navUl.classList.add("color2")
    navLogo.src = "img/footer-logo.svg"
    chnageLang[0].src = "img/languageblack.svg"
    chnageLang[1].src = "img/languageblack.svg"
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
    navLogo.src = "img/new-logo.svg"
    chnageLang[0].src = "img/language.svg"
    chnageLang[1].src = "img/language.svg"
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
        // allIcons.classList.remove("bottom-0")
    } 
    else {
        iconsSochil.classList.add("text-white")
        iconsSochil.classList.remove("text-[#131B39]")
    }

   handleNav(1000)
 

})

} else if(window.innerWidth < 767){
  window.addEventListener("scroll" , (ev) =>{
    handleNav(0)
    // allIcons.classList.add("bottom-0")
  })
}


togleBtn.addEventListener("click" , () => {
  if(document.querySelector("html").getAttribute("dir") == "rtl") {
    mobileManue.style.left = "0px"
  } 
  else {
    mobileManue.style.right = "0px"

  }
})

closeManueMobile.addEventListener("click" , () => {
  if (document.querySelector("html").getAttribute("dir") == "rtl") {
    mobileManue.style.left = "-200%";
  } else {
    mobileManue.style.right = "-200%";
  }
})



let allBtnPlay = document.querySelectorAll(".videos-slider i") ; 
allBtnPlay.forEach(e=> {
  e.addEventListener("click" , () => {
    let ifrem = document.createElement("iframe") ; 
    ifrem.style.width = "100%";
    ifrem.style.height = "100%" ; 
    ifrem.setAttribute("allow", "autoplay")
    // console.log();
    ifrem.src = e.parentElement.parentElement.parentElement.getAttribute("src") ; 
    e.parentElement.parentElement.children[0].style.display = "none" ;
    e.parentElement.parentElement.children[1].style.display = "none" ;
    e.parentElement.parentElement.appendChild(ifrem)
  })
})

swiper2.on("slideChange", function (tr) {
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
// handle dorp down 


