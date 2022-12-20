// loead
const divLoad = document.querySelector(".loead") ; 
const seletCode2 = document.querySelector("#code") ; 
let inputHidd = document.querySelector("#countercode") ; 
let allInputRange = Array.from(document.querySelectorAll(".container-imgs"));
window.onload = () => {
 let allcontry2 = document.querySelector(".allcontry2") ; 
 let imgActive = document.querySelector(".contry-img")
 let input2  =document.querySelector(".input-contry-2")
 let inputLoction = document.querySelector(".input-gps") ; 
 let conuntryName = document.querySelector("#country_name").value  ; 
 let selectContry  = document.querySelector(".selected-contry") ; 
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

        if("Egypt" == e.name) {
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
   selectContry.addEventListener("click" , () => {
    allcontry2.classList.toggle("hidden")
   })
   if (divLoad != null) {
    divLoad.style.display = `none`
    
    }
  }
  // handle contry2

// loaed

// public settings

// img.setAttribute("loading", "lazy");
let allImg = Array.from(document.querySelectorAll("img")) ; 
// navbar


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


const playVedios = document.querySelector(".play-youtuobe") ;
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

// swiper

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

// swiper

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
    // navActiveItem.classList.remove("active-nav")
    // navActiveItem.classList.add("active-nav2")
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
    // navActiveItem.classList.add("active-nav")
    // navActiveItem.classList.remove("active-nav2")
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



// after && before img



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
  // dalete last card in section OUR_PLASTIC
  