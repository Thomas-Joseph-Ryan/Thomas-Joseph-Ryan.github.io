class CopyOnClick {
    constructor(elementId, text) {
        this.element = document.getElementById(elementId);
        this.text = text;

        this.element.addEventListener('click', () => {
            this.copyToClipboard();
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
}

export default CopyOnClick