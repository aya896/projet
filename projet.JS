function upDate(previewPic) {
    // 1. Debugging: check the image that triggered the event
    console.log(previewPic.src);
    console.log(previewPic.alt);

    // 2. Update the text in the div with id="image"
    document.getElementById('image').innerHTML = previewPic.alt;

    // 3. Update the background image of the div
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}
function undo() {
    // 1. Reset the text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

    // 2. Reset the background image
    document.getElementById('image').style.backgroundImage = "url('')";
}
