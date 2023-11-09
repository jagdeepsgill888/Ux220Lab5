class JagElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Jag was here";
    }
}

customElements.define("x-jag", JagElement);