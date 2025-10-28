import Image from "next/image";
import Link from "next/link";
import React from "react";
 
import { cvData } from "@/data/cv-data";
import PrintButton from "@/components/PrintButton";

function SkillTag({ skill }) {
  return (
    <span className="inlince-block rounded-full bg-(--skill-tag-bg) px-3 py-1 text-sm font-medium text-(--skill-tag-text)">
      {skill.name}
    </span>
  );
}

function JobEntry({ job }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-(--text-color)">{job.role}</h3>
      <p className="text-md font-medium text-(--text-color-subtle)">
        {job.company} | {job.dates}
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-(--text-color-subtle)">
        {job.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

function ContactLink({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      className="flex items-center gap-1.5"
    >
      {item.icon}
      {item.label}
    </a>
  )
}

export default function CVPage({ searchParams }) {
  const resolvedSearchParams = React.use(searchParams)
  const preset = resolvedSearchParams.preset || "all";

  const { name, title, summary, education } = cvData;

  const filterByPreset = (item) => item.tags.includes(preset);

  const filteredContact = cvData.contact.filter(filterByPreset);
  const filteredSkills = cvData.skills.filter(filterByPreset);
  const filteredExperience = cvData.experience.filter(filterByPreset);


  return (
    <main className="relative mx-auto my-12 max-w-4xl bg-(--background) p-12 shadow-lg print:my-0 print:p-8 print:shadow-none">
      {/* --- CONTROLS (Print Hidden) --- */ }
      <div className="absolute right-12 top-12 flex gap-2 print:hidden">
        <div className="flex items-center gap-2 rounded-md border border-(--border-color) bg-(--background) p-2 shadow-sm">
          <span className="text-sm font-medium text-(--text-color-subtle)">Presets:</span>
          <Link
            href="/"
            className={`rounded px-2.5 py-1 text-sm ${preset === "all" ? "bg-(--preset-button-color-active) text-(--foreground)" : "bg-(--preset-button-color)"}`}
          >
            All
          </Link>
                    <Link
            href="/?preset=management"
            className={`rounded px-2.5 py-1 text-sm ${preset === "management" ? "bg-(--preset-button-color-active) text-(--foreground)" : "bg-(--preset-button-color)"}`}
          >
            Management
          </Link>
          <Link
            href="/?preset=frontend"
            className={`rounded px-2.5 py-1 text-sm ${preset === "frontend" ? "bg-(--preset-button-color-active) text-(--foreground)" : "bg-(--preset-button-color)"}`}
          >
            Frontend
          </Link>
                    <Link
            href="/?preset=design"
            className={`rounded px-2.5 py-1 text-sm ${preset === "design" ? "bg-(--preset-button-color-active) text-(--foreground)" : "bg-(--preset-button-color)"}`}
          >
            Design
          </Link>
        </div>
        <PrintButton />
      </div>
{/* --- HEADER --- */}
      <header className="border-b border-gray-200 pb-6 pt-16 print:pt-0">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          {name}
        </h1>
        <h2 className="text-2xl font-medium text-blue-600">{title}</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          {/* 3. Render the FILTERED contact info */}
          {filteredContact.map((item) => (
            <ContactLink key={item.id} item={item} />
          ))}
        </div>
      </header>

      {/* --- MAIN BODY --- */}
      <div className="mt-8 grid grid-cols-3 gap-x-12">
        <section className="col-span-2">
          <h2 className="mb-4 border-b-2 border-blue-600 pb-1 text-xl font-bold tracking-wide text-gray-800">
            Summary
          </h2>
          <p className="mb-8 text-gray-700">{summary}</p>

          <h2 className="mb-4 border-b-2 border-blue-600 pb-1 text-xl font-bold tracking-wide text-gray-800">
            Experience
          </h2>
          {/* 4. Render the FILTERED experience */}
          {filteredExperience.map((job) => (
            <JobEntry key={job.id} job={job} />
          ))}
        </section>

        <aside className="col-span-1">
          <h2 className="mb-4 border-b-2 border-blue-600 pb-1 text-xl font-bold tracking-wide text-gray-800">
            Skills
          </h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {/* 5. Render the FILTERED skills */}
            {filteredSkills.map((skill) => (
              <SkillTag key={skill.name} skill={skill} />
            ))}
          </div>

          <h2 className="mb-4 border-b-2 border-blue-600 pb-1 text-xl font-bold tracking-wide text-gray-800">
            Education
          </h2>
          {/* (Education is not tagged in this example, so it always shows) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {education.degree}
            </h3>
            <p className="text-md font-medium text-gray-700">
              {education.school}
            </p>
            <p className="text-sm text-gray-600">{education.dates}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
