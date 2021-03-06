class GridTemplate extends HTMLElement {
  connectedCallback() {
    const style = `
      slot {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: minmax(44px, auto);
        grid-gap: var(--grid-gap);

        justify-items: stretch;
        align-items: stretch;
        margin: 0 var(--grid-gap) var(--grid-gap) var(--grid-gap);
      }

      ::slotted(.header) {
        background-color: var(--color-blue);
        color: var(--color-white);
       
        font-size: var(--font-size-small);
        font-style: italic;
        font-weight: var(--font-weight-bold);
        text-transform: uppercase;

        grid-column: 1 / -1;
        padding: 0 var(--grid-panel-padding);
        margin: 0 var(--grid-gap-negative);
      }

      ::slotted(header.red) {
        background-color: var(--color-red);
      }

    `;

    const html = `
    <slot></slot>`;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define("grid-template", GridTemplate);
