type SkillItemProps = {
  skill: string;
};

export const SkillItem = (props: SkillItemProps) => {
  return (
    <p className="mx-2 my-1 rounded border border-neutral-600 px-4 py-2">
      {props.skill}
    </p>
  );
};
