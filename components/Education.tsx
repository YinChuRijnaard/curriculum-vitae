// Dependency imports
import { nanoid } from "nanoid";

// Component imports
import { EducationItem } from "./EducationItem";

// Data imports
import { education } from "../data/education";

export const Education = () => {
  const educationMapped = education.map((edu) => {
    return (
      <EducationItem
        key={nanoid()}
        degree={edu.degree}
        school={edu.school}
        city={edu.city}
        country={edu.country}
        start={edu.start}
        end={edu.end}
      />
    );
  });

  return (
    <section className="p-4">
      <h1 className="font-mono text-2xl font-bold text-purple-600">
        Education
      </h1>

      <br />

      <div className="grid gap-8 md:grid-cols-2">{educationMapped}</div>
    </section>
  );
};
