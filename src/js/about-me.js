class RandomImageFocus {
  constructor() {
    this.row = document.querySelector('.row');
    this.images = document.querySelectorAll('.photo');
    this.focusedIndex = null;
    this.intervalId = null;
    this.isPaused = false;

    this.focusRandomImage = this.focusRandomImage.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.initialize();
  }

  focusRandomImage() {
    if (this.focusedIndex !== null) {
      this.images[this.focusedIndex].classList.remove('focused');
    }

    let index;
    do {
      index = Math.floor(Math.random() * this.images.length);
    } while (index === this.focusedIndex);

    this.images[index].classList.add('focused');

    this.focusedIndex = index;
  }

  toggleAnimation() {
    if (this.isPaused) {
      this.intervalId = setInterval(this.focusRandomImage, 3000);
      this.toggleButton.textContent = 'Pause Animation';
      this.isPaused = false;
    } else {
      clearInterval(this.intervalId);

      if (this.focusedIndex !== null) {
        this.images[this.focusedIndex].classList.remove('focused');
      }

      this.toggleButton.textContent = 'Resume Animation';
      this.isPaused = true;
    }
  }

  handleMouseEnter() {
    clearInterval(this.intervalId);

    if (this.focusedIndex !== null) {
      this.images[this.focusedIndex].classList.remove('focused');
    }
  }

  handleMouseLeave() {
    if (!this.isPaused) {
      this.intervalId = setInterval(this.focusRandomImage, 3000);
    }
  }

  initialize() {
    // this.toggleButton = document.querySelector('#toggle-button');
    // this.toggleButton.addEventListener('click', this.toggleAnimation);

    this.row.addEventListener('mouseenter', this.handleMouseEnter);
    this.row.addEventListener('mouseleave', this.handleMouseLeave);

    this.intervalId = setInterval(this.focusRandomImage, 3000);
  }

  destroy() {
    clearInterval(this.intervalId);
    // this.toggleButton.removeEventListener('click', this.toggleAnimation);
    this.row.removeEventListener('mouseenter', this.pauseAnimation);
    this.row.removeEventListener('mouseleave', this.resumeAnimation);
  }
}

export default RandomImageFocus;