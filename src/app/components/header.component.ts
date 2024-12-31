// header.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  faCode,
  faUtensils,
  faEnvelope,
  faUser,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  path: string;
  label: string;
  icon: any;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
  ],
  template: `
    <header
      class="fixed w-full z-50 transition-all duration-300"
      [ngClass]="{
        'bg-white/90 backdrop-blur-sm shadow-md': isScrolled,
        'bg-transparent': !isScrolled
      }"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <!-- Logo/Name -->
          <a routerLink="/" class="flex items-center space-x-2">
            <span
              class="font-display text-2xl bg-gradient-to-r from-red-900 to-blue-900 bg-clip-text text-transparent"
            >
              Dylan D.
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1">
            <a
              *ngFor="let item of navItems"
              [routerLink]="item.path"
              routerLinkActive="text-gray-900"
              class="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div class="flex items-center space-x-2">
                <fa-icon [icon]="item.icon" size="sm"></fa-icon>
                <span class="font-subheading">{{ item.label }}</span>
              </div>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-900 to-blue-900 
                       scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></div>
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <fa-icon
              [icon]="isMobileMenuOpen ? faXmark : faBars"
              size="lg"
            ></fa-icon>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          *ngIf="isMobileMenuOpen"
          [@slideDown]
          class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t"
        >
          <div class="container mx-auto px-4 py-4">
            <a
              *ngFor="let item of navItems"
              [routerLink]="item.path"
              routerLinkActive="bg-gray-50 text-gray-900"
              (click)="closeMobileMenu()"
              class="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <fa-icon [icon]="item.icon" size="sm"></fa-icon>
              <span class="font-subheading">{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .font-display {
        font-family: 'Abril Fatface', serif;
      }

      .font-subheading {
        font-family: 'Raleway', sans-serif;
      }

      .nav-link {
        @apply relative overflow-hidden;

        &::after {
          content: '';
          @apply absolute bottom-0 left-0 w-full h-0.5 
           transform scale-x-0 transition-transform duration-300;
          background-image: var(--gradient-blend);
        }

        &:hover::after,
        &.active::after {
          transform: scaleX(1);
        }
      }

      // Add scroll-triggered animations
      .header-scrolled {
        @apply backdrop-blur-md bg-white/90;
        animation: slideDown 0.3s ease-out;
      }
    `,
  ],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-10px)', opacity: 0 }),
        animate(
          '200ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ transform: 'translateY(-10px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  faCode = faCode;
  faUtensils = faUtensils;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faBars = faBars;
  faXmark = faXmark;

  isScrolled = false;
  isMobileMenuOpen = false;

  navItems: NavItem[] = [
    { path: '/about', label: 'About', icon: this.faUser },
    { path: '/work', label: 'Work', icon: this.faCode },
    { path: '/diner', label: 'Diner', icon: this.faUtensils },
    { path: '/contact', label: 'Contact', icon: this.faEnvelope },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
