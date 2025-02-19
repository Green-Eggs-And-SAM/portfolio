// let prevX , prevY;
// let start = false;
// document.addEventListener("mousemove", function (event) {
//     let x = event.screenX;
//     let y = event.screenY;
//     if(start == false){
//         start = true;
//         prevX =
//     }

//     console.log("x: " + x + "y: " + y);
// });

let lastX = 0.0;
let lastY = 0.0;
let lastScrollY = 0.0;
let foreground;
let midground;
let background;
document.addEventListener("DOMContentLoaded", function () {
    foreground = createIMG("./Assets/foreground2.png", -1);
    midground = createIMG("./Assets/midground.png", -2);
    background = createIMG("./Assets/background.png", -3);
    lastX = 0.0;
    lastY = 0.0;
});

function createIMG(source, z) {
    let newIMG = document.createElement("img");
    newIMG.src = source;
    newIMG.style.zIndex = z;
    newIMG.style.rotate = `${z * 90}deg`;
    newIMG.style.position = "fixed";
    newIMG.style.minWidth = `120vw`;
    newIMG.style.minHeight = `120vh`;
    // newIMG.style.backgroundColor = color;

    newIMG.style.top = "-300px";
    newIMG.style.left = "-300px";
    document.body.appendChild(newIMG);
    return newIMG;
}

document.addEventListener("mousemove", function (event) {
    let dX = parseFloat(event.screenX - lastX);
    let dY = parseFloat(event.screenY - lastY);
    lastX = event.screenX;
    lastY = event.screenY;
    moveElement(foreground, dX, dY, 200.0);
    moveElement(midground, dX, dY, 140.0);
    moveElement(background, dX, dY, 80.0);
});

document.addEventListener("scroll", (e) => {
    const scrollTop = window.scrollY; //|| document.documentElement.scrollTop;
    // console.log("Scrolled distance:", scrollTop, "px");
    // elem.style.transform = `translateY(${-dY / coeff}px)`;
    // let dY = parseFloat(event.screenY - lastY);

    let dY = parseFloat(scrollTop - lastScrollY);
    lastScrollY = scrollTop;

    scrollElement(foreground, dY, 6.0);
    scrollElement(midground, dY, 10.0);
    scrollElement(background, dY, 14.0);
});

function moveElement(elem, dX, dY, coeff) {
    let currentLeft = parseFloat(elem.style.left) || 0.0;
    let currentTop = parseFloat(elem.style.top) || 0.0;

    let finalX = currentLeft - dX / coeff;
    let finalY = currentTop - dY / coeff;

    elem.style.left = `${finalX}px`;
    elem.style.top = `${finalY}px`;
}

// function scrollElement(elem, dY, coeff) {

//     elem.style.transform = `translateY(${-dY / coeff}px)`;
// }

function scrollElement(elem, dY, coeff) {
    let currentTop = parseFloat(elem.style.top) || 0.0;
    let finalY = currentTop - dY / coeff;
    elem.style.top = `${finalY}px`;
    console.log(finalY);
}
