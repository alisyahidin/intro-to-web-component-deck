import '@spectrum-web-components/switch/sp-switch.js';

import './styles/tokens/spectrum/medium-vars.css';
import './styles/tokens/spectrum/global-vars.css';
import './styles/tokens/global-vars.css';
import './styles/tokens/medium-vars.css';
import './styles/tokens/light-vars.css';

document.documentElement.classList.add('spectrum', 'spectrum--light', 'spectrum--medium')

// Sample for Slide Shadow DOM

class FancyButton extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow root to <fancy-button>.
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <!-- styles are scoped to fancy-button! -->
      <style>#fancy-button {
        background-color: pink;
        border: none;
        padding: 4px 8px;
        font-size: 18px;
      }</style>
      <button id="fancy-button">Test</button>
    `;
  }
};

window.customElements.define('fancy-button', FancyButton);

// Demonstrate Arcade Button

const color = {
  variant: {
    purchasing: '#EF6000',
    'non-purchasing': '#307FE2',
  }
}

class ArcadeButton extends HTMLElement {
  constructor() {
    super();

    // render the element
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = `
      <!-- styles are scoped to arcade-button! -->
      <style>
        :host([variant='purchasing']) #arcade-button {
          background-color: ${color.variant.purchasing};
        }
        :host([variant='non-purchasing']) #arcade-button {
          background-color: ${color.variant['non-purchasing']};
        }
        #arcade-button {
          border: none;
          padding: 4px 8px;
          font-size: 18px;
          color: white;
          padding: 8px 20px;
          border-radius: 8px;
        }
      </style>
      <button id="arcade-button">
        <slot></slot>
      </button>
    `;
  }
};

window.customElements.define('arcade-button', ArcadeButton);