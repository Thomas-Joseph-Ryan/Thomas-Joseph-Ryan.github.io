class BorderGenerator {
    constructor() {
      this.cards = document.querySelectorAll(`.card`);
      this.generateTails();
      this.setRandomColors();
      setInterval(() => {
        this.setRandomColors();
      }, 7000);
    }
  
    generateTails() {
      this.cards.forEach((card) => {
        [
          `top`,
          `right`,
          `bottom`,
          `left`,
        ].forEach((side) => {
          const tail = document.createElement(`div`);
          tail.classList.add(`tail`, side);
          card.appendChild(tail);
        });
      });
    }
  
    setRandomColors() {
      this.cards.forEach((card) => {
        if (!card.style.getPropertyValue(`--color1`)) {
          card.style.setProperty(`--color1`, `hsl(${Math.random() * 360}, 100%, 50%)`);
          card.style.setProperty(`--color2`, `hsl(${Math.random() * 360}, 100%, 50%)`);
        }
      });
    }
  }
  
  const borderGenerator = new BorderGenerator();
  