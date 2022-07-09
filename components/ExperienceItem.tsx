type ExperienceItemProps = {
  job: string;
  company: string;
  start: string;
  end: string;
  city: string;
  country: string;
};

export const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">
        {props.company}&nbsp;•&nbsp;{props.job}
      </h1>
      <p>
        {props.start}&nbsp;-&nbsp;{props.end}
      </p>
      <p>
        {props.city},&nbsp;{props.country}
      </p>
    </div>
  );
};
