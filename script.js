let slideIndex = [1,9];
let slideId = [
    "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8",
    "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15", "mySlides16",
    "mySlides17", "mySlides18"
]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 2) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[no]-1].style.display = "block";
}