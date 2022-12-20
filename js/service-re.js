let togleBtn = document.querySelector("nav .togle i") ; 
let mobileManue = document.querySelector(".mobile-manue"); 
let closeManueMobile = document.querySelector(".mobile-manue .closeBtn i ") ; 
const divLoad = document.querySelector(".loead") ; 

window.onload = () => {
  divLoad.style.display = `none` ;
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



// swiepr 


let serviceSwiper = new Swiper(".serviceSwiper", {
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


// handle videos section
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


const serviceTwoPlay = document.querySelector(".service2 i") ; 
serviceTwoPlay.addEventListener("click" , () => {
  let ifrem = document.createElement("iframe") ; 
  ifrem.src = serviceTwoPlay.parentElement.parentElement.parentElement.getAttribute("src") ; 
  serviceTwoPlay.parentElement.parentElement.appendChild(ifrem)
  ifrem.width = "100%" ;
  ifrem.height = "100%" ;
  serviceTwoPlay.parentElement.parentElement.children[1].remove() ;
  serviceTwoPlay.parentElement.remove() ;
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