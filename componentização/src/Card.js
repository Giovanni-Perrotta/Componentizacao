class Card extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});

        const card = document.createElement('div');
        card.textContent = ''

        const style = document.createElement("style");
        style.textContent = `
        div {
            display: flex;
            align-items: center;
            height: 300px;
            padding: 15px;
            margin-top: 5px;
            -webkit-box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
            -moz-box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
            box-shadow: -5px 6px 5px 0px rgba(0,0,0,0.59);
        }
        `
        shadow.appendChild(card);
        shadow.appendChild(style);

    }
}

customElements.define('card-dinamico', Card)