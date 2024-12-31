import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUtensils,
  faCalendar,
  faUser,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-diner',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-[#fff5f5] to-white">
      <!-- Hero Section -->
      <div class="bg-red-50 border-b-4 border-red-900/10 py-12">
        <div class="container mx-auto px-4 text-center">
          <h1 class="font-display text-6xl text-red-900 mb-4">Dylan's Diner</h1>
          <p class="font-subheading text-xl text-red-800/80 max-w-2xl mx-auto">
            Where culinary passion meets modern convenience
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-16">
        <!-- Services Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="menu-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faCalendar" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">
              Weekly Meal Prep
            </h3>
            <p class="font-mono text-gray-700 mb-4">
              Custom-crafted meals tailored to your nutritional needs and taste
              preferences.
            </p>
            <ul class="font-mono text-sm space-y-2 text-gray-600 mb-6">
              <li>• Customizable portions</li>
              <li>• Macro-friendly options</li>
              <li>• Fresh, local ingredients</li>
            </ul>
            <p class="font-display text-xl text-red-900">
              Starting at $12/meal
            </p>
          </div>

          <div class="menu-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faUser" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">
              Private Chef
            </h3>
            <p class="font-mono text-gray-700 mb-4">
              Exclusive dining experiences in your home. Special events and
              intimate gatherings.
            </p>
            <ul class="font-mono text-sm space-y-2 text-gray-600 mb-6">
              <li>• Customized menus</li>
              <li>• Special occasions</li>
              <li>• Wine pairing available</li>
            </ul>
            <p class="font-display text-xl text-red-900">Custom Pricing</p>
          </div>

          <div class="menu-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faStar" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">
              Culinary Consulting
            </h3>
            <p class="font-mono text-gray-700 mb-4">
              Nutrition planning, kitchen organization, and cooking technique
              sessions.
            </p>
            <ul class="font-mono text-sm space-y-2 text-gray-600 mb-6">
              <li>• Technique workshops</li>
              <li>• Kitchen optimization</li>
              <li>• Meal planning</li>
            </ul>
            <p class="font-display text-xl text-red-900">$75/hour</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
          <div
            class="bg-white rounded-xl shadow-xl p-8 border-2 border-red-100"
          >
            <div class="text-center mb-8">
              <h2 class="font-display text-4xl mb-2 text-red-900">
                Place Your Order
              </h2>
              <p class="font-mono text-gray-600">
                Let's create something delicious together
              </p>
            </div>

            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    formControlName="name"
                    class="form-input"
                    [class.error]="
                      contactForm.get('name')?.touched &&
                      contactForm.get('name')?.invalid
                    "
                  />
                  <div
                    class="form-error"
                    *ngIf="
                      contactForm.get('name')?.touched &&
                      contactForm.get('name')?.invalid
                    "
                  >
                    Required field
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    formControlName="email"
                    class="form-input"
                    [class.error]="
                      contactForm.get('email')?.touched &&
                      contactForm.get('email')?.invalid
                    "
                  />
                  <div
                    class="form-error"
                    *ngIf="
                      contactForm.get('email')?.touched &&
                      contactForm.get('email')?.invalid
                    "
                  >
                    Please enter a valid email
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Service Type</label>
                <select formControlName="inquiryType" class="form-select">
                  <option value="mealPrep">Weekly Meal Prep</option>
                  <option value="privateChef">Private Chef Services</option>
                  <option value="consultation">Culinary Consultation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Special Requirements</label>
                <textarea
                  formControlName="message"
                  rows="4"
                  class="form-textarea"
                  placeholder="Dietary restrictions, preferences, or special requests..."
                  [class.error]="
                    contactForm.get('message')?.touched &&
                    contactForm.get('message')?.invalid
                  "
                ></textarea>
                <div
                  class="form-error"
                  *ngIf="
                    contactForm.get('message')?.touched &&
                    contactForm.get('message')?.invalid
                  "
                >
                  Please provide more details (minimum 10 characters)
                </div>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.valid"
                class="submit-button"
              >
                <fa-icon [icon]="faUtensils" class="mr-2"></fa-icon>
                Place Order
              </button>
            </form>
          </div>

          <!-- Social Links -->
          <div class="mt-12 text-center">
            <h3 class="font-subheading text-xl mb-4 text-red-900">
              Follow us for daily specials
            </h3>
            <div class="flex justify-center space-x-8">
              <a href="#" class="social-link">
                <fa-icon [icon]="faInstagram" size="2x"></fa-icon>
              </a>
              <a href="#" class="social-link">
                <fa-icon [icon]="faFacebookF" size="2x"></fa-icon>
              </a>
              <a href="#" class="social-link">
                <fa-icon [icon]="faTiktok" size="2x"></fa-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Raleway:wght@400;500;600&family=Courier+Prime&display=swap');

      :host {
        display: block;
      }

      .font-display {
        font-family: 'Abril Fatface', serif;
      }

      .font-subheading {
        font-family: 'Raleway', sans-serif;
      }

      .font-mono {
        font-family: 'Courier Prime', monospace;
      }

      .menu-card {
        @apply p-8 bg-white rounded-xl shadow-md border-2 border-red-100 
             hover:border-red-200 transition-all duration-300;
        transform: translateY(0);
        &:hover {
          transform: translateY(-4px);
        }
      }

      .icon-circle {
        @apply w-14 h-14 rounded-full bg-red-100 text-red-900 
             flex items-center justify-center mb-6;
        transition: all 0.3s ease;
        .group:hover & {
          @apply bg-red-900 text-white;
          transform: scale(1.1);
        }
      }

      .form-group {
        @apply relative;
      }

      .form-label {
        @apply block font-subheading text-sm font-medium text-red-900 mb-2;
      }

      .form-input,
      .form-select,
      .form-textarea {
        @apply w-full px-4 py-3 font-mono border-2 border-red-100 
             rounded-lg focus:outline-none focus:border-red-300 
             focus:ring-2 focus:ring-red-100 transition-colors;
        &.error {
          @apply border-red-500 focus:border-red-500;
        }
      }

      .form-error {
        @apply absolute text-xs text-red-500 mt-1 font-mono;
      }

      .submit-button {
        @apply w-full py-4 px-6 bg-red-900 text-white font-subheading rounded-lg
             hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
             flex items-center justify-center text-lg;
      }

      .social-link {
        @apply text-red-900 hover:text-red-700 transform hover:-translate-y-1 
             transition-all duration-300;
      }

      // Add to menu cards
      .menu-card {
        @apply relative overflow-hidden;

        &::before {
          content: '';
          @apply absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent
           opacity-0 transition-opacity duration-300;
        }

        &:hover::before {
          opacity: 1;
        }

        .price-tag {
          @apply absolute top-4 right-4 bg-secondary text-white
           px-4 py-2 rounded-full font-mono text-sm
           transform -rotate-12;
        }
      }
    `,
  ],
})
export class DinerComponent {
  // FontAwesome icons
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faTiktok = faTiktok;
  faUtensils = faUtensils;
  faCalendar = faCalendar;
  faUser = faUser;
  faStar = faStar;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      inquiryType: ['mealPrep', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Implement your form submission logic here
    }
  }
}
