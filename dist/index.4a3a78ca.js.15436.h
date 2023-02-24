const leftNav = document.getElementById("left-nav");
const centerNav = document.getElementById("center-nav");
const rightNav = document.getElementById("right-nav");
let launching = true;
//Use local storage, on load clear it. After intro then do the thing
// This happens when you first open the page
window.addEventListener("load", function() {
    console.log("first time on page, doing whole animation");
    leftNav.dataset.status = "waiting";
    centerNav.dataset.status = "waiting";
    rightNav.dataset.status = "waiting";
});
rightNav.onanimationend = function() {
    if (launching) {
        leftNav.dataset.status = "activating";
        centerNav.dataset.status = "activating";
        rightNav.dataset.status = "activating";
        console.log("status changed to activating");
        launching = false;
    }
};
document.getElementById("right-nav-right-box").onanimationend = function() {
    console.log("Intro animations completed");
    leftNav.dataset.status = "activated";
    centerNav.dataset.status = "activated";
    rightNav.dataset.status = "activated";
};
leftNav.onclick = function() {
    console.log("left nav clicked");
};

//# sourceMappingURL=index.4a3a78ca.js.map
