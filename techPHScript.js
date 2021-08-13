// JavaScript source code

//slider

let slideslist = document.querySelector('.gadget-list').children;
let clickright = document.querySelector(".gadget-right");
let clickleft = document.querySelector(".gadget-left");
let slidestotal = slideslist.length;

let currentslide = 0;

clickright.onclick = function () {
    next("next");
}
clickleft.onclick = function () {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        currentslide++;
        if (currentslide == slidestotal) {
            currentslide = 0;
        }
    }
    else {
        if (currentslide == 0) {
            currentslide = slidestotal - 1;
        }
        else {
            currentslide--;
        }
    }

    for (i = 0; i < slideslist.length; i++) {
        slideslist[i].classList.remove("active");
    }
    slideslist[currentslide].classList.add("active");

}


//back to top

let getbuttonclass = document.querySelector(".top") 
let htmlelement = document.documentElement //returns html content
console.log(htmlelement.scrollHeight);

function handleScroll() {
    let scrollposition = htmlelement.scrollHeight - htmlelement.clientHeight
    if ((htmlelement.scrollTop / scrollposition) > 0.50) {
        // Show 
        getbuttonclass.classList.add("appear")
    } else {
        // Hide 
        getbuttonclass.classList.remove("appear")
    }
}

function gototop() { //going back to top
    htmlelement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
getbuttonclass.addEventListener("click", gototop)
document.addEventListener("scroll", handleScroll)

