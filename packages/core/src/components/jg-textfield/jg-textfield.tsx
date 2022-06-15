import { Component, h, Host, Prop, Element } from "@stencil/core";
import { inheritAriaAttributes, INHERITATTRIBUTES } from "../../utils/utils";

@Component({
  tag: "jg-textfield",
  styleUrl: "jg-textfield.css",
  shadow: true
})

export class TextField {7
  @Element() el: HTMLInputElement;

  @Prop({ reflect: true, mutable: true }) value: string = "";

  private inheritedAttributes: { [key: string]: any } = {}

  private onInput = (e) => {
    this.value = (e.target as HTMLInputElement).value;
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el, [...INHERITATTRIBUTES]);
  }

  render() {
    return (
      <Host
        class={{
          ["ic-textfield"]: true
        }}
      >
        <jg-input-container>
          <input
            type="text"
            value={this.value}
            onInput={(e) => this.onInput(e)}
            {...this.inheritedAttributes}
          />
          <slot name="search-submit-button"></slot>
          <div class="link">Link</div>
        </jg-input-container>
        <slot name="menu"></slot>
        <slot name="tester-slot">Tester Slot</slot>
        <a class="link">Textfield Link</a>
        <p>Paragraph
          <span>Span</span>
        </p>
      </Host>
    )
  }
}
