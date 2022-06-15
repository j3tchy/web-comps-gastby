import { Component, h, Host, Prop, Watch } from "@stencil/core";
import searchIcon from "../assets/magnify.svg";

@Component({
  tag: "jg-search-bar",
  styleUrl: "jg-search-bar.css",
  shadow: true
})

export class SearchBar {
  @Prop() label: string;
  @Prop({ reflect: true, mutable: true }) value: string = "";

  private anchor: HTMLElement;
  private inputEl: HTMLJgTextfieldElement;

  // private onInput = (e: Event) => {
  //   console.log(e);
  // }

  @Watch("value")
  watchValue(newValue: string): void {
    if (this.inputEl && this.inputEl.value) {
      this.inputEl.value = newValue
    }
  }

  private onInput = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
  }

  componentDidLoad(): void {
    this.anchor = this.inputEl.shadowRoot.querySelector('jg-input-container');
  }

  render() {
    return (
      <Host aria-describedby="hint">
        <jg-textfield
          ref={(el) => this.inputEl = el}
          onInput={(e) => this.onInput(e)}
          value={this.value}
          aria-label="Hello"
          aria-describedby="hint"
        >
          <jg-button innerHTML={searchIcon} slot="search-submit-button" id="search-submit-button"></jg-button>
          <div slot="tester-slot">Content from Search Bar</div>
        </jg-textfield>
        {this.value && (
          <jg-menu
            anchor={this.anchor}
            slot="menu"
            value={this.value}
          ></jg-menu>
        )}
        <div id="hint" style={{"display": "none"}}>This is a test</div>
      </Host>
    )
  }
}
