addEventListener("DOMContentLoaded", () => checkIntersect());
addEventListener("scroll", () => checkIntersect());
addEventListener("mousemove", () => checkIntersect(event));
addEventListener("resize", () => checkIntersect());

function checkIntersect(event) {
    let image = document.querySelector(".slide-bg");
    let imageCoords = imagePosition();
    let imageDimension = imageDimensions();
    let mouseCoords;
    if (event !== undefined) {
        mouseCoords = mousePosition(event);
    } else {
        mouseCoords = [0, 0];
    }
    if (mouseCoords !== undefined
        && mouseCoords[1] >= imageCoords[1]
        && mouseCoords[1] <= imageCoords[1] + imageDimension[1]
        && mouseCoords[0] >= imageCoords[0]
        && mouseCoords[0] <= imageCoords[0] + imageDimension[0]) {
        let mouseInImage = mouseCoords[0] - imageCoords[0];
        image.style.setProperty('--mouseover-y', mouseInImage + 3 + 'px');
    }
}

function mousePosition(event) {
    let x = event.clientX;
    let y = event.clientY;
    return [x, y];
}

function imagePosition() {
    let image = document.querySelector(".slide-bg");
    let imageRect = image.getBoundingClientRect();
    let imageRectLeft = imageRect.left;
    let imageRectTop = imageRect.top;
    return [imageRectLeft, imageRectTop];
}

function imageDimensions() {
    let image = document.querySelector(".slide-bg");
    image.style.setProperty('--bg-size', image.offsetWidth + 'px');
    return [image.offsetWidth, image.offsetHeight]
}
