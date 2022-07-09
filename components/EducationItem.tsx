type ExperienceItemProps = {
  degree: string;
  school: string;
  city: string;
  country: string;
  start: string;
  end: string;
};

export const EducationItem = (props: ExperienceItemProps) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">{props.degree}</h1>
      <p>{props.school}</p>
      <p>
        {props.start}&nbsp;-&nbsp;{props.end}
      </p>
      <p>
        {props.city},&nbsp;{props.country}
      </p>
    </div>
  );
};
