class Teste extends HTMLElement {
    constructor() {
    super();


    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("imgSrc")


        const text = document.createElement("div");
        text.setAttribute("class", "text");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("titulo")
        link.href = this.getAttribute("urlLink")

        const texto = document.createElement("p");
        texto.textContent = this.getAttribute("texto")

        text.appendChild(autor);
        text.appendChild(link);
        text.appendChild(texto);

        componentRoot.appendChild(text);
        componentRoot.appendChild(imagem);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            display: flex;
            align-items: center;
            height: 300px;
            padding: 15px;
            margin-top: 5px;
            -webkit-box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
            -moz-box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
            box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
        }
        .text{
            display: flex;
            flex-direction: column;
        }
        img {
            margin-left: 10px;
            width: 500px;
            height: 250px;
            background: transparent;
        }
        a{
            text-decoration: none;
            font-weight: bold;
            font-size: 30px;
            color: #000;
        }
        `

        return style;
    }
}

customElements.define('teste-novo', Teste)
