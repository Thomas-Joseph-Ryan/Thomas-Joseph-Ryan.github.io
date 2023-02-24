// Get all the images with the class "photo"
const row = document.querySelector(".row");
const images = document.querySelectorAll(".photo");
let focusedIndex = null;
let intervalId;
let isPaused = false;
// function to select and focus a random image
function focusRandomImage() {
    // If there is a currently focused image, remove the "focused" class
    if (focusedIndex !== null) images[focusedIndex].classList.remove("focused");
    // Generate a random index between 0 and the length of the images array, excluding the previously focused index
    let index;
    do index = Math.floor(Math.random() * images.length);
    while (index === focusedIndex);
    // Apply the "focused" class to the image at the random index
    images[index].classList.add("focused");
    // Set the focusedIndex to the new index
    focusedIndex = index;
}
// event listener for the toggle button
const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", ()=>{
    if (isPaused) {
        // resume the function
        intervalId = setInterval(()=>{
            focusRandomImage();
        }, 3000);
        toggleButton.textContent = "Pause Animation";
        isPaused = false;
    } else {
        // pause the function
        clearInterval(intervalId);
        if (focusedIndex !== null) images[focusedIndex].classList.remove("focused");
        toggleButton.textContent = "Resume Animation";
        isPaused = true;
    }
});
// event listeners for the mouseenter and mouseleave events
row.addEventListener("mouseenter", ()=>{
    clearInterval(intervalId);
    if (focusedIndex !== null) images[focusedIndex].classList.remove("focused");
});
row.addEventListener("mouseleave", ()=>{
    if (!isPaused) intervalId = setInterval(()=>{
        focusRandomImage();
    }, 3000);
});
// initial call to start the function
intervalId = setInterval(()=>{
    focusRandomImage();
}, 3000);

//# sourceMappingURL=about-me.5f77961c.js.map
