let links = Array.from(document.getElementsByClassName("link"))
let prevBtn = document.querySelector(".btn1");
let nextBtn = document.querySelector(".btn2");
let currenVal = 1;


function activeLink(event) {
    links.forEach(link =>
        link.classList.remove("active"));
    event.target.classList.add("active");
    currenVal = parseInt(event.target.getAttribute("value"));
}


function backBtnFunc() {
    if (currenVal > 1) {
        currenVal--;
        updateActiveLink();
    }

}

function nextBtnFnc() {
    if (currenVal < links.length) {

        currenVal++;
        updateActiveLink();
    }
}

function updateActiveLink() {
    links.forEach(link => link.classList.remove("active"));
    links[currenVal - 1].classList.add("active");
}

links.forEach(link => link.addEventListener("click", activeLink));
prevBtn.addEventListener("click", backBtnFunc)
nextBtn.addEventListener("click", nextBtnFnc)

