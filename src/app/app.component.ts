import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let v of list">
      {{ foobar }}
    </div>
  `
})
export class AppComponent {
  list = [1, 2, 3, 4];
}
