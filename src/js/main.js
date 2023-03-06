// function changeMan() {
//     const men = document.querySelectorAll(".men img");
//     console.log(men);
//     for (const iterator of men) {
//         iterator.addEventListener("mouseover", manHover(iterator));
//         iterator.addEventListener("mouseout", manUnhover(iterator));
//     }
// }

// changeMan();

function manHover(element) {
    element.setAttribute("src", "/img/man_filled.png");
    console.log("hover");
}

function manUnhover(element) {
    element.setAttribute("src", "/img/man_empty.png");
}
