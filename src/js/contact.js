class CopyOnClick {
    constructor(elementId, text) {
        this.element = document.getElementById(elementId);
        this.text = text;
        this.emailIcon = document.getElementById('email-icon');
        this.emailMessage = document.getElementById('email-message');

        this.element.addEventListener('click', () => {
            this.copyToClipboard();
            this.hideEmailIcon();
            setTimeout(() => {
                this.showEmailIcon();
            }, 4000);
        });
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.text)
            .then(() => {
                console.log('Copied to clipboard: ' + this.text);
            })
            .catch((error) => {
                console.error('Failed to copy to clipboard: ' + error);
            });
    }

    hideEmailIcon() {
        this.emailIcon.style.opacity = 0;
        this.emailMessage.style.opacity = 1;
    }
    
    showEmailIcon() {
        this.emailIcon.style.opacity = 1;
        this.emailMessage.style.opacity = 0;
    }
}

export default CopyOnClick
