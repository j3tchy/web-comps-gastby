import {
  h,
  Component,
  Host,
  Prop
} from "@stencil/core";

@Component({
  tag: "jg-banner",
  styleUrl: "jg-banner.css",
  shadow: true
})

export class Banner {
  @Prop() message: string;

  @Prop() variant: "blue" | "red" = "blue";

  render() {
    return (
      <Host class={{
        "banner": true,
        [`${this.variant}`]: true
      }}>
        <div>
          {this.message}
        </div>
      </Host>
    )
  }
}
