class BorderGenerator {
  constructor() {
    this.projects = document.querySelectorAll(`.project`);
    this.generateTails();
    console.log("BorderGenerator generated")
  }

  generateTails() {
    this.projects.forEach((project) => {
      [
        `top`,
        `right`,
        `bottom`,
        `left`,
      ].forEach((side) => {
        const tail = document.createElement(`div`);
        tail.classList.add(`tail`, side);
        project.appendChild(tail);
      });
    });
  }

}

export default BorderGenerator;