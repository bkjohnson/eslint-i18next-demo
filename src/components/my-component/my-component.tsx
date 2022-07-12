import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    // No linting warnings on this ternary
    const foo = this.first === "John" ? "bar" : "baz";
    // Linting warnings on this ternary
    const foo2 = this.first === "John" ? "bar" : undefined;
    return (
      <div>
        <div>Hello, World! I'm {this.getText()}</div>
        <div>{foo} {foo2}</div>
      </div>
    );
  }
}
