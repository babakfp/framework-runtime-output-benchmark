import { LitElement, html } from "lit"

export class MyCounter extends LitElement {
    static get properties() {
        return {
            count: { type: Number },
        }
    }

    constructor() {
        super()
        this.count = 0
    }

    render() {
        return html`
            <button @click=${() => (this.count += 1)} part="button">
                count is ${this.count}
            </button>
        `
    }
}

window.customElements.define("my-element", MyCounter)
