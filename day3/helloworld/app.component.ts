import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 2px solid red;">
      <h1>Welcome to your life</h1>
      <hr>
      <vijay-comp></vijay-comp>
    </div>
  `,
})
export class AppComponent {
  title = 'helloworld';
}
