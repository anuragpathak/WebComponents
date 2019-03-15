let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>
    :host { 
        display: block; 
    }

    button.primary-style {
        background-color: #368ec4;
        color: white;
        border: 1px solid #368ec4;
    }

    .button {
        font-size: var(--font-size, 12px);
        height: var(--height);
        width: var(--width);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        text-align: center;
        font-family: Arial;
        white-space: nowrap;
        user-select: none;
        background-color: #f1f1f1;
        border: 1px solid #b4b6ba;
        color: #3d3d3d;
        border-radius: 4px;
        padding-left: 14px;
        padding-right: 14px;
        min-height: 22px;
        line-height: 20px;
        min-width: 65px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    
  </style>
  <button class="button"><slot></slot></button>
`;


class SPButton extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._$button = null;
    }
}

customElements.define('sp-button', SPButton);
