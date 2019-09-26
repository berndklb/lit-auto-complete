import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class AutoCompleteLit extends LitElement {

    static get properties() {
        return {
            readmorecaption: { type: String },
            readlesscaption: {type: String},
            contentheight: { type: Number },
            expanded: {type: Boolean},
            isInitialOverflow: {type: Boolean},
            buttonCaption : {type: String},
        };
    }
    constructor() {
        super();
        
    }

    firstUpdated(changedProperties) {
        
    }
      

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <div id='test'>TEST1</div>
    `;
  }

  static get styles() {
    return css`
    `;
  }
}
// Register the new element with the browser.
customElements.define('auto-complete-lit', AutoCompleteLit);