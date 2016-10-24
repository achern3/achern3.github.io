var isLeft = true;

function shiftImage(image) {
  if (isLeft) {
    image.style.float = "right";
    isLeft = false;
  } else {
    image.style.float = "left";
    isLeft = true;
  }
}
