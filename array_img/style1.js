var myImage = document.getElementById('mainImage');
var imageArray = ["11.png", "44.png", "55.png", "3.png"];
var imageIndex = 1;

function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex > 3) {imageIndex = 0;}
}