class BorderGenerator {
  constructor() {
    this.projects = document.querySelectorAll(`.project`);
    this.generateTails();
    console.log("BorderGenerator generated")

    // Call the method to initialize the collapsible list
    this.initCollapsibleList();
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

  initCollapsibleList() {
    // Get all the collapsible items and loop through them
    const collapsibleItems = document.querySelectorAll('.collapsible');
    collapsibleItems.forEach((item) => {
      // Set the first item to be shown
      const content = item.querySelector('.collapsible-content');
  
      // Add click event listener to toggle the display of additional items
      const toggleButton = item.querySelector('.collapsible-toggle');
      const arrow = item.querySelector('.list-down-arrow');
      const expandSymbol = item.querySelector('.expand-icon');
      const expandText = item.querySelector('.expand-text');
  
      toggleButton.addEventListener('click', () => { 
        if (content.classList.contains("open")) {
          content.classList.remove("open");
          if (arrow) {
            arrow.classList.remove("list-arrow-rotate");
          }
          if (expandSymbol) {
            expandSymbol.classList.remove("expanded-icon");
          }
          if(expandText) {
            expandText.textContent = "See more";
          }
          content.style.maxHeight = null;
        } else {
          content.classList.add("open");
          if (arrow && !expandSymbol) {
            arrow.classList.add('list-arrow-rotate');
          }
          if (expandSymbol) {
            expandSymbol.classList.add('expanded-icon');
          }
          if (expandText) {
            expandText.textContent = "See less";
          }
          // This is a strange line of code. It allows the list to 
          // animate smoothly, but it caps the max height.
          content.style.maxHeight = content.scrollHeight*1.3 + 'px';
        }
        console.log(content.classList.toString());
      });
    });
  }
  
}

export default BorderGenerator;
