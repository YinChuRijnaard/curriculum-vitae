// Framework imports
import { nanoid } from "nanoid";

// Component imports
import { SkillItem } from "./SkillItem";

// Data imports
import { skills } from "../data/skills";

export const Skills = () => {
  const skillsMapped = skills.map((skill) => {
    return <SkillItem key={nanoid()} skill={skill} />;
  });

  return (
    <section className="p-4">
      <h1 className="font-mono text-2xl font-bold text-purple-600">Skills</h1>

      <br />

      <div className="-mx-2 -my-1 flex flex-wrap justify-start">
        {skillsMapped}
      </div>
    </section>
  );
};
