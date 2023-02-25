class Navigation {
    constructor() {
        this.leftNav = document.getElementById("left-nav");
        this.centerNav = document.getElementById("center-nav");
        this.rightNav = document.getElementById("right-nav");
        this.launching = true;
        this.initialize();
    }

    initialize() {
        window.addEventListener("load", () => {
            console.log("first time on page, doing whole animation");
            this.leftNav.dataset.status = "waiting";
            this.centerNav.dataset.status = "waiting";
            this.rightNav.dataset.status = "waiting";
        });

        this.rightNav.onanimationend = () => {
            if (this.launching) {
                this.leftNav.dataset.status = "activating";
                this.centerNav.dataset.status = "activating";
                this.rightNav.dataset.status = "activating";
                console.log("status changed to activating");
                this.launching = false;
            }
        };

        document.getElementById("right-nav-right-box").onanimationend = () => {
            console.log("Intro animations completed");
            this.leftNav.dataset.status = "activated";
            this.centerNav.dataset.status = "activated";
            this.rightNav.dataset.status = "activated";
        };

        this.leftNav.onclick = () => {
            console.log("left nav clicked");
        };
    }
}

export default Navigation;