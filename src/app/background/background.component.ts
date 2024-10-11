import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  template: '<div class="background"></div>',
  styles: [
    `
      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    `,
  ],
})
export class BackgroundComponent {}
