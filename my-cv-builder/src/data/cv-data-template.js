import { Mail, Globe } from "lucide-react";

export const cvData = {
    name: "Your Name",
  title: "Senior Front-End Developer",
summary:
    "A brief, impactful summary about your professional self. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

contact: [
    {
      id: "email",
      label: "your.email@example.com",
      href: "mailto:your.email@example.com",
      icon: <Mail size={14} />,
      tags: ["all"],
    },
    {
      id: "website",
      label: "your-portfolio.com",
      href: "https://your-portfolio.com",
      icon: <Globe size={14} />,
      tags: ["all"],
    },
    {
      id: "linkedin",
      label: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      icon: <Linkedin size={14} />,
      tags: ["all", "management", "frontend"],
    },
    {
      id: "dribbble",
      label: "dribbble.com/yourprofile",
      href: "https://dribbble.com/yourprofile",
      icon: <Dribbble size={14} />,
      tags: ["design"],
    },
    // Example with no icon
    {
      id: "phone",
      label: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      icon: null, // It's just null
      tags: ["all"],
    },
  ],

  skills: [
    { name: "Next.js 15", tags: ["all", "frontend"] },
    { name: "Tailwind CSS v4", tags: ["all", "frontend", "design"] },
    { name: "React", tags: ["all", "frontend"] },
    { name: "TypeScript", tags: ["all", "frontend"] },
    { name: "Figma", tags: ["design"] },
    { name: "Project Management", tags: ["management"] },
    { name: "Team Leadership", tags: ["management"] },
  ],

  experience: [
    {
      id: 1,
      role: "Lead Developer",
      company: "Tech Corp",
      dates: "Jan 2022 - Present",
      description: [
        "Led the migration to Next.js 15 and the App Router.",
        "Implemented a new design system using Tailwind CSS v4.",
        "Mentored junior developers and performed code reviews.",
      ],
      tags: ["all", "frontend", "management"], // Relevant for these presets
    },
    {
      id: 2,
      role: "UX/UI Designer (Freelance)",
      company: "Self-Employed",
      dates: "Apr 2021 - Present",
      description: [
        "Designed and prototyped user interfaces in Figma.",
        "Conducted user research and usability testing.",
      ],
      tags: ["design"], // Only show this for the 'design' preset
    },
    {
      id: 3,
      role: "Mid-Level Developer",
      company: "Web Solutions",
      dates: "Jun 2019 - Dec 2021",
      description: [
        "Built responsive user interfaces with React and CSS-in-JS.",
        "Worked with product managers to define feature requirements.",
      ],
      tags: ["all", "frontend"],
    },
  ],
  education: {
    degree: "B.S. in Computer Science",
    school: "University of Technology",
    dates: "2015 - 2019",
  },
};