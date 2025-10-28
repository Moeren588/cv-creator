import Image from "next/image";
import Link from "next/link";
import React from "react";
 
import { cvData } from "@/data/cv-data";
import PrintButton from "@/components/PrintButton";

function SkillTag({ skill }) {
  return (
    <span className="inline-block rounded-full bg-(--skill-tag-bg) px-3 py-1 text-sm font-medium text-(--skill-tag-text)">
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

function SectionHeader ({ title }) {
  return(
    <h2 className="mb-4 border-b-2 border-blue-600 pb-1 text-xl font-bold tracking-wide text-(--foreground)">
      {title}
    </h2>
  )
}

export default function CVPage({ searchParams }) {
  const resolvedSearchParams = React.use(searchParams)
  const preset = resolvedSearchParams.preset || "all";

  const { 
    name, 
    title, 
    summary,
    contact,
    skills,
    experience,
    education,
    languages,
    awards,
    certifications,
    presets,
  } = cvData;

  const filterByPreset = (item) => 
    preset === "all" ||
    item.tags.includes("all") ||
    item.tags.includes(preset);

  const filteredContact = contact.filter(filterByPreset);
  const filteredSkills = skills.filter(filterByPreset);
  const filteredExperience = experience.filter(filterByPreset);
  const filteredEducation = education.filter(filterByPreset);
  const filteredLanguages = languages.filter(filterByPreset);
  const filteredAwards = awards.filter(filterByPreset);
  const filteredCerts = certifications.filter(filterByPreset);

  return (
    <main className="relative mx-auto my-12 max-w-4xl bg-(--background) p-12 shadow-lg print:my-0 print:p-8 print:shadow-none">
      {/* --- CONTROLS (Print Hidden) --- */ }
      <div className="absolute right-12 top-12 flex gap-2 print:hidden">
        <div className="flex items-center gap-2 rounded-md border border-(--border-color) bg-(--background) p-2 shadow-sm">
          <span className="text-sm font-medium text-(--text-color-subtle)">Presets:</span>
          {presets.map((p) => (
            <Link
              key={p.tag}
              href={p.tag === "all" ? "/" : `/?preset=${p.tag}`}
              className= {`rounded px-2.5 py-1 text-sm ${
                preset === p.tag
                  ? "bg-(--preset-button-color-active) text-(--foreground)"
                  : "bg-(--preset-button-color)"
              }`}
            >
              {p.label}
            </Link>
          ))}
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
          {filteredExperience.map((job) => (
            <JobEntry key={job.id} job={job} />
          ))}
        </section>
        
        { /* Right Column (Skills, Education, etc) */ }  
        <aside className="col-span-1">
          <SectionHeader title="Skills" />
          <div className="mb-8 flex flex-wrap gap-2">
            {filteredSkills.map((skill) => (
              <SkillTag key={skill.name} skill={skill} />
            ))}
          </div>

          <SectionHeader title="Education" />
          <div className="mb-8 space-y-4">
            {filteredEducation.map((edu) => (
              <div key={edu.id}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-md font-medium text-gray-700">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-600">{edu.dates}</p>
              </div>
            ))}
          </div>
          { /* Certifications */ }
          {filteredCerts.length > 0 && (
            <>
              <SectionHeader title="Certifications" />
              <ul className="mb-8 list-inside list-disc space-y-1 text-gray-700">
                {filteredCerts.map((cert) => (
                  <li key={cert.id}>{cert.name}</li>
                ))}    
              </ul>
            </>
          )}
          { /* Awards */ }
          {filteredAwards.length > 0 && (
            <>
              <SectionHeader title="Honors & Awards" />
              <ul className="mb-8 list-inside list-disc space-y-1 text-gray-700">
                {filteredAwards.map((award) => (
                  <li key={award.id}>
                    {award.title}
                    {award.issuer && (
                      <span className="text-sm text-gray-500">
                        {" "}
                        - {award.issuer}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          { /* Languages */ }
          {filteredLanguages.length > 0 && (
            <>
              <SectionHeader title="Languages" />
              <ul className="mb-8 space-y-1 text-gray-700">
                {filteredLanguages.map((lang) => (
                  <li key={lang.id} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
