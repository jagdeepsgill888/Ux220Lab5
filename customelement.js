class JagElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Jag was here";
    }
}

customElements.define("x-jag", JagElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyyear", YearElement);

class BackgroundElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="background-color:lightblue">${this.innerHTML}</div>
        `;
    }
}

customElements.define("x-background", BackgroundElement);