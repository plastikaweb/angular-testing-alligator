import { Component } from '@angular/core';

@Component({
  selector: 'app-set-title',
  template: `
  <h1>{{title}}</h1>
  <button (click)="setTitle()" class="set-title">Set Title</button>
  `
})
export class SetTitleComponent {
  title: string;

  setTitle() {
    new Promise((resolve) => {
      resolve('Crazzy!!!!');
    }).then((val: string) => this.title = val);
  }
}
