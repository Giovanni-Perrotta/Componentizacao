class TituloPrincipal extends HTMLElement {
    constructor() {
    super();


    const shadow = this.attachShadow({mode: "open"});
    shadow.innerHTML = "<h1>Oi</h1>";

    }
}

customElements.define('titulo-principal', TituloPrincipal)
