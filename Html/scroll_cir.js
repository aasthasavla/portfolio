window.onscroll = function () {
  handleScrollEffects();
};

function handleScrollEffects() {
  const imageToRotate = document.getElementById("reload");
  const elementToTranslate = document.getElementById("text");

  // Apply rotation effect (if element exists)
  if (imageToRotate) {
    imageToRotate.style.transform = "rotate(" + window.pageYOffset / 19.5 + "deg)";
  }

  // Apply translation effect (if element exists)
  if (elementToTranslate) {
    elementToTranslate.style.transform = "translateX(" + -window.pageYOffset / 1 + "px)";
  }
}
