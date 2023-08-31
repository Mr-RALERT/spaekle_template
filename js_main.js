

let cansel = document.querySelector(".cansel");
let links = document.querySelector(".linksUl").style.width ; "50px" ;
let bars = document.getElementById("bar")


bars.onclick = function () {
    document.getElementById("myUl").style.right = "0";
    
}

cansel.onclick = function () {
    document.getElementById("myUl").style.right = "-150%";
}

