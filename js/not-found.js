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