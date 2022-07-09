import { nanoid } from "nanoid";
import { ProjectItem } from "./ProjectItem";
import { projects } from "../data/projects";

export const Projects = () => {
  const projectsMapped = projects.map((project) => {
    return (
      <ProjectItem
        key={nanoid()}
        title={project.title}
        description={project.description}
        stack={project.stack}
        live={project.live}
        repo={project.repo}
      />
    );
  });
  return (
    <section className="p-4">
      <h1 className="font-mono text-2xl font-bold text-purple-600">Projects</h1>

      <br />

      <div className="grid gap-8 md:grid-cols-2">{projectsMapped}</div>

      <br />

      <div className="flex justify-center">
        <a
          className="rounded bg-neutral-600 py-2 px-4 font-bold text-neutral-300 underline-offset-2 "
          href="https://github.com/YinChuRijnaard"
          target="_blank"
          rel="noreferrer"
        >
          Click to see more projects
        </a>
      </div>
    </section>
  );
};
