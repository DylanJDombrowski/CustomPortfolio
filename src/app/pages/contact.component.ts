// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faUtensils,
  faCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-[#fff5f5] to-white py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-5xl mb-4 font-display text-red-900">
            Let's Create Together
          </h1>
          <p class="font-sans text-xl text-gray-700 max-w-2xl mx-auto">
            From code to cuisine, bringing your ideas to life
          </p>
        </div>

        <!-- Contact Cards -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="contact-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faCode" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">
              Development
            </h3>
            <p class="font-mono text-gray-600">
              Full-stack solutions tailored to your needs
            </p>
          </div>

          <div class="contact-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faUtensils" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">Culinary</h3>
            <p class="font-mono text-gray-600">
              Custom meal prep and dining experiences
            </p>
          </div>

          <div class="contact-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faServer" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-subheading text-2xl mb-3 text-red-900">
              IT Solutions
            </h3>
            <p class="font-mono text-gray-600">
              Infrastructure and database management
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
          <div
            class="bg-white rounded-xl shadow-xl p-8 border-2 border-red-100"
          >
            <h2 class="font-display text-3xl mb-8 text-center text-red-900">
              Get in Touch
            </h2>

            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="space-y-8"
            >
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Name Input -->
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <div class="relative">
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
                </div>

                <!-- Email Input -->
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <div class="relative">
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
              </div>

              <!-- Service Type Select -->
              <div class="form-group">
                <label class="form-label">I'm interested in...</label>
                <select formControlName="inquiryType" class="form-select">
                  <option value="development">Web Development</option>
                  <option value="mealPrep">Meal Prep Services</option>
                  <option value="itSolutions">IT Solutions</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message Textarea -->
              <div class="form-group">
                <label class="form-label">Tell me about your project</label>
                <textarea
                  formControlName="message"
                  rows="4"
                  class="form-textarea"
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
                  Please describe your project (minimum 10 characters)
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                [disabled]="!contactForm.valid"
                class="submit-button"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Social Links -->
          <div class="mt-12 text-center">
            <h3 class="font-subheading text-2xl mb-6 text-red-900">
              Connect With Me
            </h3>
            <div class="flex justify-center space-x-8">
              <a href="#" class="social-link">
                <fa-icon [icon]="faGithub" size="2x"></fa-icon>
              </a>
              <a href="#" class="social-link">
                <fa-icon [icon]="faLinkedin" size="2x"></fa-icon>
              </a>
              <a href="#" class="social-link">
                <fa-icon [icon]="faInstagram" size="2x"></fa-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      // Add form animations
      .form-group {
        &.focused {
          label {
            @apply text-primary transform -translate-y-6 scale-75;
          }
        }
      }

      .social-links {
        a {
          @apply transition-transform duration-300;

          &:hover {
            transform: translateY(-5px) rotate(8deg);
          }
        }
      }

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

      .contact-card {
        @apply p-8 bg-white rounded-xl shadow-md border-2 border-red-50 hover:border-red-200 transition-all duration-300;
        transform: translateY(0);
        &:hover {
          transform: translateY(-4px);
        }
      }

      .icon-circle {
        @apply w-12 h-12 rounded-full bg-red-100 text-red-900 flex items-center justify-center mb-4;
        transition: all 0.3s ease;
        .group:hover & {
          @apply bg-red-900 text-white;
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
        @apply w-full px-4 py-2 font-mono border-2 border-red-100 rounded-lg focus:outline-none focus:border-red-300 transition-colors;
        &.error {
          @apply border-red-500;
        }
      }

      .form-error {
        @apply absolute text-xs text-red-500 mt-1 font-mono;
      }

      .submit-button {
        @apply w-full py-3 px-6 bg-red-900 text-white font-subheading rounded-lg 
             hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 
             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300;
      }

      .social-link {
        @apply text-red-900 hover:text-red-700 transform hover:-translate-y-1 transition-all duration-300;
      }
    `,
  ],
})
export class ContactComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUtensils = faUtensils;
  faCode = faCode;
  faServer = faServer;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      inquiryType: ['development', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Implement your form submission logic here
    }
  }
}
