<!-- section-title: How to create web component -->

## Let's Demonstrate!

We will try to create our arcade button component using web component with property 2 variant only:

<div style={{ height: 24 }} />

<!-- block-start -->

purchasing: <span style={{ backgroundColor: '#EF6000', color: 'white' }}>#EF6000</span>

non-purchasing: <span style={{ backgroundColor: '#307FE2', color: 'white' }}>#307FE2</span>

<!-- block-end -->

---

<!-- classes: demonstration -->

#### The Code

```javascript
const color = {
  purchasing: '#EF6000',
  'non-purchasing': '#307FE2',
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
          background-color: ${color.purchasing};
        }
        :host([variant='non-purchasing']) #arcade-button {
          background-color: ${color['non-purchasing']};
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
```

---

#### The Result

```html
<arcade-button variant="purchasing">Purchasing Variant</arcade-button>
<arcade-button variant="non-purchasing">Non-Purchasing Variant</arcade-button>
```

<div style={{ height: 24 }} />

<arcade-button variant="purchasing">Purchasing Variant</arcade-button>
<arcade-button variant="non-purchasing">Non-Purchasing Variant</arcade-button>