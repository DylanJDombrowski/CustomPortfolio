import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faServer,
  faDatabase,
  faArrowRight,
  faLink,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faAngular,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  featured: boolean;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <!-- Hero Section -->
      <div class="bg-blue-900 text-white py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="font-display text-5xl mb-6">
              Tech Solutions & Development
            </h1>
            <p class="font-heading text-xl text-blue-200 mb-8">
              Bridging the gap between imagination and pixels, offering
              accessible products for the web and beyond.
            </p>
            <div class="flex justify-center space-x-4">
              <button class="primary-button">
                View Projects
                <fa-icon [icon]="faArrowRight" class="ml-2"></fa-icon>
              </button>
              <button class="outline-button">
                Get in Touch
                <fa-icon [icon]="faArrowRight" class="ml-2"></fa-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="container mx-auto px-4 py-20">
        <h2 class="font-display text-3xl text-center mb-16 text-blue-900">
          Services & Expertise
        </h2>

        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <div class="service-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faCode" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-heading text-xl mb-4 text-blue-900">
              Web Development
            </h3>
            <ul class="space-y-2 text-gray-600 font-mono text-sm">
              <li>• React & Angular Applications</li>
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• Modern UI/UX Implementation</li>
            </ul>
          </div>

          <div class="service-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faServer" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-heading text-xl mb-4 text-blue-900">
              IT Solutions
            </h3>
            <ul class="space-y-2 text-gray-600 font-mono text-sm">
              <li>• Infrastructure Setup</li>
              <li>• System Integration</li>
              <li>• Technical Consulting</li>
              <li>• Security Implementation</li>
            </ul>
          </div>

          <div class="service-card group">
            <div class="icon-circle">
              <fa-icon [icon]="faDatabase" class="text-2xl"></fa-icon>
            </div>
            <h3 class="font-heading text-xl mb-4 text-blue-900">
              Database Solutions
            </h3>
            <ul class="space-y-2 text-gray-600 font-mono text-sm">
              <li>• DynamoDB Implementation</li>
              <li>• SQL Database Design</li>
              <li>• Data Migration</li>
              <li>• Performance Tuning</li>
            </ul>
          </div>
        </div>

        <!-- Portfolio Section -->
        <h2 class="font-display text-3xl text-center mb-16 text-blue-900">
          Featured Projects
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <div
            *ngFor="let project of featuredProjects"
            class="project-card group"
          >
            <div class="relative overflow-hidden rounded-t-lg">
              <img
                [src]="'/api/placeholder/600/400'"
                [alt]="project.title"
                class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div class="space-x-4">
                  <a
                    *ngIf="project.links.demo"
                    [href]="project.links.demo"
                    class="project-link"
                  >
                    <fa-icon [icon]="faLink"></fa-icon>
                    Demo
                  </a>
                  <a
                    *ngIf="project.links.github"
                    [href]="project.links.github"
                    class="project-link"
                  >
                    <fa-icon [icon]="faGithub"></fa-icon>
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-heading text-xl mb-2 text-blue-900">
                {{ project.title }}
              </h3>
              <p class="font-mono text-sm text-gray-600 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tag of project.tags" class="tech-tag">{{
                  tag
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div class="stats-card">
            <fa-icon
              [icon]="faChartLine"
              class="text-3xl text-blue-500 mb-4"
            ></fa-icon>
            <h4 class="font-heading text-2xl text-blue-900 mb-2">40%</h4>
            <p class="font-mono text-sm text-gray-600">IT Requests Handled</p>
          </div>
          <!-- Add more stats cards as needed -->
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-blue-900 text-white py-16 mt-20">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p class="font-heading text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with modern
            technology and proven solutions.
          </p>
          <button class="outline-button-light">
            Get in Touch
            <fa-icon [icon]="faArrowRight" class="ml-2"></fa-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      // Component-specific styles
      .service-card {
        @apply p-8 bg-white rounded-xl shadow-md border-2 border-blue-100 
             hover:border-blue-200 transition-all duration-300;
        transform: translateY(0);
        &:hover {
          transform: translateY(-4px);
        }
      }

      .icon-circle {
        @apply w-14 h-14 rounded-full bg-blue-100 text-blue-900 
             flex items-center justify-center mb-6;
        transition: all 0.3s ease;
        .group:hover & {
          @apply bg-blue-900 text-white;
          transform: scale(1.1);
        }
      }

      .project-card {
        @apply bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-50
             hover:border-blue-200 transition-all duration-300;
      }

      .project-link {
        @apply inline-flex items-center px-4 py-2 bg-white text-blue-900 rounded-lg
             hover:bg-blue-50 transition-all duration-300 space-x-2 text-sm font-heading;
      }

      .tech-tag {
        @apply px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-mono;
      }

      .stats-card {
        @apply p-6 bg-white rounded-lg shadow-md border-2 border-blue-50;
      }

      .primary-button {
        @apply inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
             hover:bg-blue-700 transition-all duration-300 font-heading;
      }

      .outline-button {
        @apply inline-flex items-center px-6 py-3 border-2 border-blue-200 text-blue-200
             rounded-lg hover:bg-blue-800 transition-all duration-300 font-heading;
      }

      .outline-button-light {
        @apply inline-flex items-center px-6 py-3 border-2 border-white text-white
             rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-heading;
      }

      // Add to project cards
      .project-card {
        &:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          @apply absolute inset-0 flex items-center justify-center
           bg-gradient-to-t from-black/80 to-transparent
           opacity-0 transition-opacity duration-300;

          &:hover {
            opacity: 1;
          }
        }
      }

      // Add stats animation
      .stats-number {
        @apply font-display text-4xl;
        animation: countUp 2s ease-out;
      }
    `,
  ],
})
export class WorkComponent implements OnInit {
  // FontAwesome icons
  faCode = faCode;
  faServer = faServer;
  faDatabase = faDatabase;
  faArrowRight = faArrowRight;
  faLink = faLink;
  faGithub = faGithub;
  faChartLine = faChartLine;

  featuredProjects: Project[] = [
    {
      title: 'Random Quote Generator',
      description:
        'Interactive quote generator showcasing React state management and API integration.',
      image: 'quote-generator.jpg',
      tags: ['React', 'API', 'CSS'],
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
    {
      title: 'Markdown Previewer',
      description:
        'Real-time Markdown rendering application with instant preview functionality.',
      image: 'markdown-previewer.jpg',
      tags: ['React', 'Markdown', 'JavaScript'],
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
    {
      title: 'AI Text Summarizer',
      description:
        'Full-stack application integrating modern web development with AI technologies.',
      image: 'ai-summarizer.jpg',
      tags: ['Node.js', 'API', 'AI'],
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
    {
      title: 'Calculator App',
      description:
        'Interactive calculator with responsive design and comprehensive testing.',
      image: 'calculator.jpg',
      tags: ['JavaScript', 'HTML', 'CSS'],
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
