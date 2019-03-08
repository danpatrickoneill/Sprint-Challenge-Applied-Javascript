class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = carousel.querySelector(".left-button");
    this.rightButton = carousel.querySelector(".right-button");
    this.images = carousel.querySelectorAll("img");

    this.index = 0;

    // Display current image
    console.log(this.images[this.index]);
    this.images[this.index].style.display = "block";

    // Button event handlers
    this.rightButton.addEventListener("click", () => this.nextImage());
    this.leftButton.addEventListener('click', () => this.previousImage())
  }

  nextImage() {
    if (this.index < this.images.length - 1) {
      this.index++;
      this.images[this.index - 1].style.display = "none";
      this.images[this.index].style.display = "block";
    }
  }
  previousImage() {
    if (this.index > 0) {
      this.index--;
      this.images[this.index + 1].style.display = "none";
      this.images[this.index].style.display = "block";
    }
  }
}
let carousel = document.querySelector(".carousel");
new Carousel(carousel);
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
2. You will need to grab a reference to all of the images
3. Create a current index
4. Those buttons are gonna need some click handlers.
5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
6. Have fun!
*/
