type ProjectItemProps = {
  title: string;
  description: string;
  stack: any;
  live: string;
  repo: string;
};

export const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.stack}</p>
      <a
        className="underline decoration-neutral-600 underline-offset-2"
        href={props.live}
        target="_blank"
        rel="noreferrer"
      >
        Live link
      </a>
      <span>&nbsp;•&nbsp;</span>
      <a
        className="underline decoration-neutral-600 underline-offset-2"
        href={props.repo}
        target="_blank"
        rel="noreferrer"
      >
        GitHub repository
      </a>
    </div>
  );
};
