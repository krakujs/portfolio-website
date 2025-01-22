import { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Calendar, 
  Award, 
  Book, 
  Trophy, 
  Code,
  Globe,
  User
} from 'lucide-react';

const PortfolioWebsite = () => {
  // Add custom styles for backface visibility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .backface-hidden {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    `;
    document.head.appendChild(style);
  }, []);
  const timelineEvents = [
    {
      year: 2019,
      title: "Bachelor's in Computer Science",
      subtitle: "JK Lakshmipat University",
      type: "education",
      details: []
    },
    {
      year: 2021,
      title: "Founder & Technical Director",
      subtitle: "Griiken Pvt. Ltd.",
      type: "work",
      details: [
        "Engineered a B2B SaaS platform on GCP serving educational institutions",
        "Led an engineering team of 8, implementing SRE practices with 99.95% uptime",
        "Architected microservices infrastructure reducing deployment time by 85%",
        "Reduced infrastructure costs by 40% through optimization",
        "Established DevOps best practices fostering collaboration",
        "Built cloud-native product using Spring Boot, Node.js, Flutter on GCP Kubernetes"
      ]
    },
    {
      year: 2023,
      title: "Cloud/DevOps Engineer",
      subtitle: "Scoobe3d Gmbh",
      type: "work",
      details: [
        "Designed hybrid clusters on GKE scaling ML processing capacity by 5x",
        "Developed data ingestion workflows reducing processing time by 25%",
        "Implemented GitOps with ArgoCD automating 90% of deployments",
        "Optimized cloud infrastructure costs reducing monthly spend by 35%"
      ]
    },
    {
      year: 2023,
      title: "Master's in Computer Science",
      subtitle: "EPITA School of Computer Science",
      type: "education",
      details: []
    },
    {
      year: 2024,
      title: "SaaS Implementation Engineer",
      subtitle: "Opensee.io",
      type: "work",
      details: [
        "Reduced service deployment time by 40% through automation",
        "Implemented automated service deployments with 99.99% reliability",
        "Built backup automation framework improving frequency by 400%",
        "Enhanced monitoring stack reducing incident response time by 25%"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Bash", "Java", "JavaScript", "Python", "Shell Scripting", "SQL"],
    "DevOps Tools": ["Ansible", "ArgoCD", "AWS", "Docker", "ELK", "GCP", "GitLab", "Grafana", "Kubernetes", "PostgreSQL", "Terraform"],
    "Frameworks/Methodologies": ["Agile/Scrum", "DevSecOps", "GitOps", "Linux Administration", "SRE Practices"],
    "Languages": ["English: C1", "French: B1"]
  };

  const projects = [
    {
      title: "DeAudi - Blockchain Based Music System",
      organization: "EPITA",
      description: [
        "Written smart contracts for user profiles and music track management using Solidity, enabling automated royalty distribution and transparent ownership tracking",
        "Developed responsive React frontend with Web3 integration, supporting music playback, profiles, and wallet connectivity",
        "Implemented decentralized file storage using IPFS/NFT.Storage, ensuring permanent availability of music files",
        "Built real-time search functionality and profile management system integrated with Ethereum smart contracts"
      ],
      tech: ["Solidity", "React", "Web3", "IPFS", "Ethereum", "Smart Contracts"]
    },
    {
      title: "Eventure - FullStack Event Management",
      organization: "EPITA",
      description: [
        "Spearheaded development of a scalable event management platform using Spring Boot microservices and React",
        "Implemented enterprise-grade security using Okta OIDC and JWT, achieving SOC2 compliance requirements",
        "Engineered real-time notification system using WebSocket/STOMP, reducing event coordination overhead by 40%",
        "Designed role-based access control system integrated with MongoDB, managing complex hierarchical permissions for events and tasks"
      ],
      tech: ["Spring Boot", "React", "MongoDB", "WebSocket", "STOMP", "JWT", "Okta OIDC"]
    }
  ];

  const certifications = [
    {
      title: "Google Associate Cloud Engineer",
      issuer: "Google LLC",
      date: "09/2022",
      badge: "GCP",
      description: "Expertise in designing, developing, and managing scalable solutions using Google Cloud.",
      skills: ["Cloud Architecture", "GCP Services", "Security & Compliance"]
    },
    {
      title: "ArgoCD GitOps at Scale",
      issuer: "CodeFresh",
      date: "11/2023",
      badge: "GitOps",
      description: "Advanced knowledge in implementing GitOps practices using ArgoCD for large-scale deployments.",
      skills: ["GitOps", "CI/CD", "Kubernetes"]
    },
    {
      title: "AWS Professional DevOps",
      issuer: "AWS",
      date: "11/2024 - Present",
      badge: "AWS",
      description: "Professional-level expertise in AWS DevOps practices and tools.",
      skills: ["AWS Services", "DevOps", "Cloud Architecture"]
    },
    {
      title: "Architecting With Google Compute Engine",
      issuer: "Google, Coursera",
      date: "05/2022",
      badge: "GCP",
      description: "Deep understanding of GCP compute services and infrastructure design.",
      skills: ["GCE", "Cloud Design", "Performance"]
    },
    {
      title: "DevOps, Cloud, and Agile Foundations",
      issuer: "IBM, Coursera",
      date: "07/2023",
      badge: "DevOps",
      description: "Comprehensive understanding of DevOps principles and cloud-native practices.",
      skills: ["Agile", "DevOps", "Cloud Native"]
    }
  ];

  const achievements = [
    {
      title: "Circular Cities Asia, Singapore",
      date: "07/2021 - 03/2022",
      description: "Led the winning team of 4 in an international event promoting sustainable tech providing the base funding to our startup."
    },
    {
      title: "Github Hackathon",
      date: "06/2020 - 07/2020",
      description: "Secured third place among 100+ teams in GitHub's COVID-19 Innovation Challenge."
    }
  ];

  // Scroll animation
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render animation classes based on scroll position
  const getAnimationClass = (index) => {
    const baseDelay = index * 100;
    return `transform opacity-0 translate-y-4 transition-all duration-700 delay-${baseDelay} 
            ${scrollY > 100 ? 'opacity-100 translate-y-0' : ''}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Compact Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-lg sticky top-0 z-50 border-b border-purple-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-transparent bg-clip-text">
              Ujjwal Solanki
            </h1>
            <div className="flex items-center gap-4">
              <a href="mailto:ujjwalsolanki2001@gmail.com" 
                 className="flex items-center gap-2 text-sm hover:text-purple-600 transition-colors">
                <Mail size={16} />
                <span className="hidden md:inline">Email</span>
              </a>
              <a href="https://linkedin.com/in/ujjwalsolanki" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
                <Linkedin size={16} />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Bio Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-full">
                <div className="bg-white p-1 rounded-full">
                  <User size={64} className="text-purple-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">DevOps/SRE Engineer</h2>
                <p className="text-gray-600 leading-relaxed">
                  DevOps/SRE Engineer based in Paris with Masters in Software Engineering and 4 years of hands-on experience 
                  in cloud infrastructure and site reliability. Successfully implemented and managed large-scale deployments 
                  using GCP, AWS, Kubernetes, Terraform, and ArgoCD, while optimizing monitoring systems with Prometheus and 
                  Grafana, achieving 99.95% service uptime and up to 40% cost reduction.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Timeline Section */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
    Experience & Education
  </h2>
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-indigo-200"></div>

    <div className="space-y-16">
      {timelineEvents.map((event, index) => (
        <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
            <div className="w-8 h-8 bg-white rounded-full shadow-md border-2 border-purple-400 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-400"></div>
            </div>
          </div>
          
          {/* Content card */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
            <div className="group relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 transition-all duration-300 hover:shadow-xl">
                {/* Year badge */}
                <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-purple-600 bg-purple-50 mb-4">
                  {event.year}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.subtitle}</p>
                
                {/* Type badge */}
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${
                  event.type === 'education' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'bg-pink-50 text-pink-600'
                }`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </div>

                {/* Details section */}
                {event.details && event.details.length > 0 && (
                  <div className="mt-4 space-y-2 pt-4 border-t border-gray-100">
                    {event.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Projects Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Featured Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600">{project.organization}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Certifications Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 ${
                  getAnimationClass(index)
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        {cert.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 mt-2">{cert.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                    <p className="text-gray-600 mt-2">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="mt-24 mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Publications
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Automation of Alumni Directory using RPA: An Application
                </h3>
                <p className="text-gray-600 mb-4">IEEE, 2024 3rd International Conference, Thailand</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Published: August 2024</span>
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/10638399" 
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-white bg-opacity-90 border-t border-purple-100 py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:ujjwalsolanki2001@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
                <a href="https://linkedin.com/in/ujjwalsolanki" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Location</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Paris, France</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe size={16} />
                  <span>English (C1)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe size={16} />
                  <span>French (B1)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 mt-8">
            <p>© 2024 Ujjwal Solanki. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
