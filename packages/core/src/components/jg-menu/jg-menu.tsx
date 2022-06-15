import { Component, Element, h, Host, Prop } from "@stencil/core";

import { createPopper } from "@popperjs/core";

@Component({
  tag: "jg-menu",
  styleUrl: "jg-menu.css",
  shadow: true
})

export class Menu {
  @Element() host: HTMLJgMenuElement;

  @Prop() anchor: HTMLElement;

  @Prop() value: string;

  componentDidRender(): void {
    createPopper(this.anchor, this.host, {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "flip",
          options: {
            allowedAutoPlacements: ["top", "bottom"],
            rootBoundary: "viewport"
          }
        }
      ]
    })
  }

  render() {
    return (
      <Host>
        <ul class="menu-wrapper">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </Host>
    )
  }
}
