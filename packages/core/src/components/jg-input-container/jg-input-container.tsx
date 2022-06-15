import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "jg-input-container",
  styleUrl: "jg-input-container.css",
})

export class InputContainer {
  render() {
    return (
      <Host>
          <div class="focus-indicator">
            <slot></slot>
          </div>
      </Host>
    )
  }
}
