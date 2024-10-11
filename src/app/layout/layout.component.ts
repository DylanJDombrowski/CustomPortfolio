import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" id="left-column">
            <div class="sticky">
              <app-header></app-header>
            </div>
            <div class="sticky" id="social-icons">
              <!-- Add social icons here -->
            </div>
          </div>
          <div class="col-lg-6" id="right-column">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
