class Navigation {
    constructor() {
        this.leftNav = document.getElementById("left-nav");
        this.centerNav = document.getElementById("center-nav");
        this.rightNav = document.getElementById("right-nav");
        this.launching = true;

        this.initialize();
    }

    initialize() {
        const activateAnimation = sessionStorage.getItem("activateAnimation");
        console.log(window.location.pathname);
        if (activateAnimation === null) {
            // If it's the first visit, run the animation and set the session storage variable
            sessionStorage.setItem("activateAnimation", "true");

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
                document.getElementById("name-wrapper").dataset.status = "activated";
            };

            // add an event listener to the beforeunload event to remove the sessionStorage item on page unload
            window.addEventListener("beforeunload", () => {
                if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) {
                    sessionStorage.removeItem("activateAnimation");
                }
            });
        } else {
            // If it's not the first visit, skip the animation and set the dataset status to "activated"
            this.leftNav.dataset.status = "activated";
            this.centerNav.dataset.status = "activated";
            this.rightNav.dataset.status = "activated";
            document.getElementById("name-wrapper").dataset.status = "activated";
        }
    }

    destroy() {
        window.removeEventListener("load", () => {
            console.log("first time on page, doing whole animation");
            this.leftNav.dataset.status = "waiting";
            this.centerNav.dataset.status = "waiting";
            this.rightNav.dataset.status = "waiting";
        });

        window.removeEventListener("beforeunload", () => {
            if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) {
                sessionStorage.removeItem("activateAnimation");
            }
        });

        this.rightNav.onanimationend = null;
        document.getElementById("right-nav-right-box").onanimationend = null;

        this.leftNav.dataset.status = "";
        this.centerNav.dataset.status = "";
        this.rightNav.dataset.status = "";
    }
}

export default Navigation;