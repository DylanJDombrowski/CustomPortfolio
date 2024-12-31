import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faUtensils,
  faGraduationCap,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
}

interface Course {
  title: string;
  code: string;
  description: string;
  link?: string;
  bullets?: string[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <!-- Hero Section with Split Design -->
    <div class="min-h-screen">
      <!-- Split Background -->
      <div class="relative h-screen overflow-hidden">
        <!-- Left Side (Tech) -->
        <div
          class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-900 to-blue-700 transform skew-x-6"
        ></div>

        <!-- Right Side (Culinary) -->
        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-900 to-red-700 transform -skew-x-6"
        ></div>

        <!-- Content Overlay -->
        <div class="relative z-10 flex items-center justify-center h-full">
          <div class="text-center text-white px-4">
            <h1 class="font-display text-6xl mb-4 animate-fadeIn">
              Dylan J. Dombrowski
            </h1>
            <h2 class="font-subheading text-2xl mb-6 animate-slideUp">
              Full Stack Developer / IT Professional
            </h2>
            <p
              class="font-mono text-lg max-w-2xl mx-auto animate-slideUp delay-200"
            >
              Bridging the gap between imagination and pixels, offering
              accessible products for the web and beyond.
            </p>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="container mx-auto px-4 py-20">
        <div class="max-w-4xl mx-auto">
          <h2
            class="font-display text-4xl mb-12 text-center bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent"
          >
            About Me
          </h2>

          <div class="prose prose-lg mx-auto font-mono">
            <p class="mb-6">
              Growing up in the bustling atmosphere of a family-run pizza
              kitchen, I was immersed in a world where precision, creativity,
              and teamwork were paramount. Majoring in Computer Information
              Systems, I discovered how these principles could be applied to
              technology.
            </p>

            <div class="tech-highlights mb-8">
              <p class="font-subheading text-lg mb-4 text-blue-900">
                Technical Expertise:
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tech-tag">JavaScript (React, Angular, Node)</span>
                <span class="tech-tag">HTML & CSS</span>
                <span class="tech-tag">DynamoDB</span>
                <span class="tech-tag">SQL</span>
              </div>
            </div>

            <p class="mb-6">
              I learned that no matter your path, your obstacles are made of the
              same stuff. The passion, determination, and resilience needed to
              run a marathon are the same qualities that can propel you to land
              on the moon.
            </p>

            <p class="mb-6 font-bold text-gradient">
              Likewise, my appetite for success in tech was fueled by the same
              love for cooking and creating I had already. I was hooked.
            </p>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl mb-12 text-center text-gradient">
            Experiences
          </h2>

          <div class="max-w-4xl mx-auto">
            <div class="relative">
              <!-- Timeline Line -->
              <div
                class="absolute left-0 w-0.5 h-full bg-gradient-to-b from-blue-900 to-red-900"
              ></div>

              <!-- Experience Cards -->
              <div class="space-y-12">
                <div
                  *ngFor="let experience of experiences"
                  class="experience-card"
                >
                  <div class="timeline-dot"></div>
                  <div class="ml-8">
                    <span class="text-sm font-mono text-gray-500">{{
                      experience.period
                    }}</span>
                    <h3 class="font-subheading text-xl mt-1 mb-2">
                      {{ experience.title }} • {{ experience.company }}
                    </h3>
                    <p class="font-mono text-gray-600 mb-4">
                      {{ experience.description }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span *ngFor="let tag of experience.tags" class="tag">{{
                        tag
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section with Expandable Course Cards -->
      <div class="container mx-auto px-4 py-20">
        <h2 class="font-display text-4xl mb-12 text-center text-gradient">
          Education
        </h2>

        <div class="max-w-4xl mx-auto grid gap-6">
          <div *ngFor="let course of courses" class="course-card group">
            <div
              class="flex justify-between items-center cursor-pointer p-6"
              (click)="course.isExpanded = !course.isExpanded"
            >
              <div>
                <h3 class="font-subheading text-xl mb-1">{{ course.title }}</h3>
                <p class="font-mono text-sm text-gray-500">{{ course.code }}</p>
              </div>
              <fa-icon
                [icon]="faChevronRight"
                class="transform transition-transform duration-300"
                [class.rotate-90]="course.isExpanded"
              >
              </fa-icon>
            </div>

            <div
              class="overflow-hidden transition-all duration-300"
              [class.h-0]="!course.isExpanded"
              [class.h-auto]="course.isExpanded"
            >
              <div class="p-6 pt-0 font-mono">
                <p class="text-gray-600 mb-4">{{ course.description }}</p>
                <ul
                  *ngIf="course.bullets"
                  class="list-disc list-inside space-y-2"
                >
                  <li *ngFor="let bullet of course.bullets">{{ bullet }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="relative overflow-hidden py-20">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-900 to-red-900 opacity-90"
        ></div>
        <div
          class="relative z-10 container mx-auto px-4 text-center text-white"
        >
          <h2 class="font-display text-4xl mb-6">
            Let's Create Something Amazing
          </h2>
          <p class="font-mono text-lg mb-8 max-w-2xl mx-auto">
            Whether you're interested in tech solutions or culinary creations,
            I'm always excited to collaborate on new projects.
          </p>
          <div class="flex justify-center space-x-4">
            <button class="cta-button-light">View Projects</button>
            <button class="cta-button-outline">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      // Component-specific styles
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }

      .animate-slideUp {
        animation: slideUp 1s ease-out;
      }

      .delay-200 {
        animation-delay: 200ms;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .text-gradient {
        @apply bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent;
      }

      .tech-tag {
        @apply px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm;
      }

      .tag {
        @apply px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs;
      }

      .experience-card {
        @apply relative pl-8;

        .timeline-dot {
          @apply absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-900 to-red-900
             transform -translate-x-1.5 mt-2;
        }
      }

      .course-card {
        @apply bg-white rounded-lg shadow-md border-2 border-gray-100
           hover:border-gray-200 transition-all duration-300;
      }

      .cta-button-light {
        @apply px-6 py-3 bg-white text-blue-900 rounded-lg font-subheading
           hover:bg-blue-50 transition-all duration-300;
      }

      .cta-button-outline {
        @apply px-6 py-3 border-2 border-white text-white rounded-lg font-subheading
           hover:bg-white hover:text-blue-900 transition-all duration-300;
      }

      // Add to timeline
      .timeline-item {
        @apply relative pl-8;

        &::before {
          content: '';
          @apply absolute left-0 top-0 w-1 h-full;
          background-image: var(--gradient-blend);
        }

        .timeline-dot {
          @apply absolute left-0 w-4 h-4 rounded-full
           transform -translate-x-1.5;
          background-image: var(--gradient-blend);
        }
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  faCode = faCode;
  faUtensils = faUtensils;
  faGraduationCap = faGraduationCap;
  faChevronRight = faChevronRight;

  experiences: Experience[] = [
    {
      period: 'FEB 2023 - PRESENT',
      title: 'IT Student Assistant',
      company: "University of Louisville; President's Office",
      description:
        'As part of a three-person IT team, I handled 40% of all IT requests, managed web-related requests for seven university departments, and developed a custom FileMaker solution for biannual commencement ceremonies that reduced the administrative workload by 50%. I also developed a faculty salary app, showcasing my versatility and technical acumen.',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Graph API',
        'Rest API',
        'CMS',
        'Drupal',
        'Plone',
      ],
    },
    {
      period: 'JAN 2024 - PRESENT',
      title: 'Web Developer & Marketing Specialist',
      company: 'Spin For Steven Foundation',
      description:
        'Spin For Steven Foundation in Louisville, KY improved outreach and engagement by implementing web analytics, redesigning their website, and optimizing online ad campaigns. This resulted in increased effectiveness and engagement rates.',
      tags: [
        'Analytics',
        'Marketing',
        'Project Management',
        'Wix CMS',
        'SEO',
        'Digital Marketing',
        'Google Ads',
      ],
      link: 'https://www.stevenvanover.org/',
    },
    {
      period: 'APR 2023 - PRESENT',
      title: 'Web Developer',
      company: 'Miami Valley Xpress',
      description:
        'I developed a new website with modern design and SEO integration. This increased organic search rankings by 60% in the first year. Analytics tools were implemented to track website performance and user engagement. I also created a new slogan to enhance brand identity and ethos.',
      tags: [
        'HTML',
        'CSS',
        'Project Management',
        'WordPress CMS',
        'SEO',
        'UI/UX',
        'Branding',
      ],
      link: 'https://www.miamivalleyxpress.com/',
    },
    {
      period: 'MAR 2023 - PRESENT',
      title: 'Founder & Lead Developer',
      company: 'Vettras Solutions',
      description:
        'Created Vettras Solutions to expand my freelance work and provide clients with comprehensive support. Dedicate free time to building the business and delivering value to local clients.',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Project Management',
        'SEO',
        'Client Relations',
      ],
      link: 'https://www.vettras.com/',
    },
  ];

  courses: Course[] = [
    {
      title: 'CIS 420 Capstone Development Project',
      code: 'CIS 420',
      description:
        'A continuation of CIS 320, this course focuses on the detailed design and implementation phases of the system development life cycle, including user acceptance testing, test planning, design reviews, and change procedures. Specifications created in CIS 320 are used to implement, test, and install a working version of an information system. System deployment emphasizes a web-based architecture. A prototyping approach is taken to develop and test the system in an iterative manner. Students are grouped into project teams, and each team member accepts task assignments necessary to deliver the information system prototype.',
      link: 'https://www.blueridgeanimalrescueandsanctuary.com/',
    },
    {
      title: 'Systems Analysis and Design',
      code: 'CIS 320',
      description:
        'This course introduces the fundamentals of object-oriented analysis and design, including experience with a CASE tool. Topics include requirements determination, feasibility analysis, modeling with Unified Modeling Language (UML) and data dictionary construction, data modeling and normalization, user interface requirements specification, and information security procedures. Development of problem and design specifications for an information systems project is required. Develops team skills, written and oral communication skills.',
    },
    {
      title: 'Management of Information Systems',
      code: 'CIS 410',
      description:
        'Explores strategic development of information technology; value chain analysis and its application to information resource management; information systems planning; organizing, staffing, and controlling the deployment of information technology; the development of an IT platform and architecture consistent with organizational structure.',
    },
    {
      title: 'Software Development I & II',
      code: 'CIS 199 & 200',
      description:
        'This course emphasizes object-oriented software development. Students study the object model and apply it to systems development problems. Topics include polymorphism, inheritance, and object interaction. Event-driven programming of graphical user interfaces is introduced. Application areas may include data structures, searching, sorting, and databases. Extensive programming assignments are required.',
      bullets: [
        'Big-O notation',
        'Searching and sorting algorithms',
        'LINQ query syntax',
      ],
    },
    {
      title: 'Introduction to Information Security',
      code: 'CIS 481',
      description:
        'This course covers the basic notions of confidentiality, integrity, availability, authentication models, protection models, security kernels, audit, intrusion detection, operational security issues, physical security issues, security system life cycle management, personnel security, policy formation, and enforcement, trust modeling, risks and vulnerabilities assessment, basic issues of law and privacy, trade secrets, employee covenants, copyright, database protection, software, and hardware validation, verification, and certification.',
    },
    {
      title: 'Database Design',
      code: 'CIS 310',
      description:
        'This course will provide a solid and practical foundation for the design and implementation of database systems. Emphasis will be on relational database models, with significant coverage of basic relational database concepts, normalization, E-R modeling, locking, SQL, and distributed databases. Additional topics include web databases, database security, access control policies and procedures, risk management, and ethical aspects of information handling. Course software includes current database tools such as SQL server.',
    },
    {
      title: 'Infrastructure Technologies',
      code: 'CIS 350',
      description:
        'This course provides an introduction to IT infrastructure issues and covers topics related to computer and systems architecture and communication networks, with an overall focus on the services and capabilities that IT infrastructure solutions enable in an organizational context. It imparted the knowledge and skills I would need for communicating effectively with professionals whose special focus is on hardware and systems software technology and for designing processes and solutions that require an in-depth understanding of the IT infrastructure capabilities and limitations. It also prepared me for interaction with external vendors of IT infrastructure components and solutions.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
