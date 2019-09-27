class CheckButtonState {
    constructor(text, initActive) {
        this.text = text;
        this.checked = initActive;
        this.bgColor = this.bgColor.bind(this);
        this.txtColor = this.txtColor.bind(this);
    }

    bgColor() {
        return this.checked ? "#9BE564" : "#621708";
    }

    txtColor() {
        return this.checked ? "#1c2833" : "#c8f7c5";
    }
}
export default CheckButtonState;