import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <div>
    <h1>Binding in Angular</h1>
    <h2>Title : {{ title }}</h2>
    <h2>Length of Ttile : {{ title.length }}</h2>
    <fieldset>
      <legend>
        <h3>Attribute Binding</h3>
      </legend>
      <h2 [innerHTML]="title"></h2>
      <h2 [textContent]="title"></h2>
      <h2 [innerText]="title"></h2>
      <h2 innerText="{{ title }}"></h2>
    </fieldset>
    <fieldset>
      <legend>
        <h3>Property Binding</h3>
      </legend>
      <h2 bind-innerHTML="title"></h2>
      <h2 bind-textContent="title"></h2>
      <h2 bind-innerText="title"></h2>
      <h2 innerText="{{ title }}"></h2>
    </fieldset>
    <fieldset>
      <legend>
        <h3>Value Binding</h3>
      </legend>
      <input type="text" [value]="title">
      <input [type]="type">
    </fieldset>
    <fieldset>
      <legend>
        <h3>Event Binding</h3>
      </legend>
      <input #ti type="text">
      <button (click)="clickHandler(ti.value)">Click Me</button>
      <hr>
      <input #numip type="number" [value]="count" (input)="count = numip.value">
      <br>
      <input type="number" [(ngModel)]="count">
      <h4>Count is : {{ count }} </h4>
    </fieldset>
  </div>
  `
})
export class AppComponent {
  title = 'welcome to your life';
  type="color";
  count:any = 5;
  clickHandler(message:string){
    alert(message)
  }
}
