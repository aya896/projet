function addTabFocus() {
  console.log("Page loaded. Adding tabindex to all images.");

  const images = document.querySelectorAll("figure img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", i + 1);

    // Mouse events
    images[i].addEventListener("mouseover", highlight);
    images[i].addEventListener("mouseleave", removeHighlight);

    // Keyboard focus events
    images[i].addEventListener("focus", highlight);
    images[i].addEventListener("blur", removeHighlight);
  }
}

function highlight(event) {
  event.target.style.border = "3px solid blue";
}

function removeHighlight(event) {
  event.target.style.border = "none";
}
