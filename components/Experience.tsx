// Dependency imports
import { nanoid } from "nanoid";

// Component
import { ExperienceItem } from "./ExperienceItem";

// Data imports
import { experience } from "../data/experience";

export const Experience = () => {
  const experienceMapped = experience.map((job) => {
    return (
      <ExperienceItem
        key={nanoid()}
        job={job.job}
        company={job.company}
        start={job.start}
        end={job.end}
        city={job.city}
        country={job.country}
      />
    );
  });

  return (
    <section className="p-4">
      <h1 className="font-mono text-2xl font-bold text-purple-600">
        Experience
      </h1>

      <br />

      <div className="grid gap-8 md:grid-cols-2">{experienceMapped}</div>
    </section>
  );
};
