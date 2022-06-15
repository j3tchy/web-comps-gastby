import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "jg-button",
  styleUrl: "jg-button.css",
  shadow: true
})

export class Button {
  @Prop() label: string;

  render() {
    return (
      <Host>
        <button class="button">
          <slot></slot>
          {this.label}
        </button>
      </Host>
    )
  }
}
