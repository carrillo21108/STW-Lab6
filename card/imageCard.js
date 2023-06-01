fetch("./card/imageCard.html")
  .then((stream) => stream.text())
  .then((htmlFile) => renderComponent(htmlFile));

function renderComponent(htmlFile) {
  class ImageCard extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: "open" });
      shadowDOM.innerHTML = htmlFile;
      // Import CSS
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "./card/imageCard.css");
      shadowDOM.appendChild(link);
    }

    setDataImage(valor){
      const { shadowRoot, shadowDOM } = this;
      let img1 = shadowRoot.getElementById('image1');
      img1.src = valor;
    }

    getDataImage(){
      return this.getAttribute("data-image");
    }

    setDataTitle(valor){
      const { shadowRoot, shadowDOM } = this;
      let title1 = shadowRoot.getElementById('title');
      title1.innerText = valor;
    }

    getDataTitle(){
      return this.getAttribute("data-title");
    }

    setDataSubtitle(valor){
      const { shadowRoot, shadowDOM } = this;
      let subtitle1 = shadowRoot.getElementById('subtitle');
      subtitle1.innerText = valor;
    }

    getDataSubtitle(){
      return this.getAttribute("data-subtitle");
    }

    setDataDescription(valor){
      const { shadowRoot, shadowDOM } = this;
      let description1 = shadowRoot.getElementById('description');
      description1.innerText = valor;
    }

    getDataDescription(){
      return this.getAttribute("data-description");
    }

    setDataAction1(valor){
      const { shadowRoot, shadowDOM } = this;
      let action_1 = shadowRoot.getElementById('action1');
      action_1.href = valor;
    }

    getDataAction1(){
      return this.getAttribute("data-action1");
    }

    setDataAction1Text(valor){
      const { shadowRoot, shadowDOM } = this;
      let action_1 = shadowRoot.getElementById('action1');
      action_1.innerText = valor;
    }

    getDataAction1Text(){
      return this.getAttribute("data-action1-text");
    }

    setDataAction2(valor){
      const { shadowRoot, shadowDOM } = this;
      let action_2 = shadowRoot.getElementById('action2');
      action_2.href = valor;
    }

    getDataAction2(){
      return this.getAttribute("data-action2");
    }

    setDataAction2Text(valor){
      const { shadowRoot, shadowDOM } = this;
      let action_2 = shadowRoot.getElementById('action2');
      action_2.innerText = valor;
    }

    getDataAction2Text(){
      return this.getAttribute("data-action2-text");
    }

    setDataBackgroundColor(valor){
      const { shadowRoot, shadowDOM } = this;
      shadowRoot.getElementById('card').style.backgroundColor = valor;
    }

    getDataBackgroundColor(){
      return this.getAttribute("data-background-color");
    }

    setCustomCss(valor){
      const { shadowRoot, shadowDOM } = this;
      let style = document.createElement("style");
      style.innerHTML = valor; 
      shadowRoot.appendChild(style);
    }

    getCustomCss(){
      return this.getAttribute("customCss");
    }

    // Callback
    connectedCallback() {
      const { shadowRoot, shadowDOM } = this;
      console.log('Custom component element added to page.');
      // entry parameters
      let image = "https://www.dklo.co/DkLMRsT/cfDftOpaytr?u=EWLlMWiZJGGm";
      let title = "New Title";
      let subtitle = "New Subtitle";
      let description = "New Description for the Image";
      let action1 = "https://www.google.com";
      let action2 = "https://www.google.com";
      let action1Text = "Action 1";
      let action2Text = "Action 2";
      let backgroundColor = "white";

      if (this.hasAttribute("data-image")) {
        image = this.getDataImage();
      }
      if (this.hasAttribute("data-title")) {
        title = this.getDataTitle();
      }
      if (this.hasAttribute("data-subtitle")) {
        subtitle = this.getDataSubtitle();
      }
      if (this.hasAttribute("data-description")) {
        description = this.getDataDescription();
      }
      if (this.hasAttribute("data-action1")) {
        action1 = this.getDataAction1();
      }
      if (this.hasAttribute("data-action1-text")) {
        action1Text = this.getDataAction1Text();
      }
      if (this.hasAttribute("data-action2")) {
        action2 = this.getDataAction2();
      }
      if (this.hasAttribute("data-action2-text")) {
        action2Text = this.getDataAction2Text();
      }
      if (this.hasAttribute("data-background-color")) {
        backgroundColor = this.getDataBackgroundColor();
      }
      if (this.hasAttribute("customCss")) {
        this.setCustomCss(this.getCustomCss());
      }

      this.setDataImage(image);

      this.setDataTitle(title);

      this.setDataSubtitle(subtitle);

      this.setDataDescription(description);

      this.setDataAction1(action1);

      this.setDataAction1Text(action1Text);

      this.setDataAction2(action2);

      this.setDataAction2Text(action2Text);

      this.setDataBackgroundColor(backgroundColor);
    }

    disconnectedCallback() {
      
      console.log("Custom component element removed from page.");

    }

    adoptedCallback() {
      console.log("Custom component element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Custom component element attributes changed.");
      
    }
  }

  customElements.define("image-card", ImageCard);
}
