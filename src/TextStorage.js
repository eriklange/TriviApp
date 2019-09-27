class TextStorage {
    constructor(text, subtext) {
      this.text = text;
      this.subtext = subtext;
    }
  
    static default(){
      return new TextStorage("Select a type of joke!", null)
    }
  }
  
  export default TextStorage;