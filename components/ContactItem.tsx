type ContactItemProps = {
  cta: string;
  href: string;
  link: string;
};

export const ContactItem = (props: ContactItemProps) => {
  return (
    <li>
      {props.cta} 👉 &nbsp;
      <a
        className="underline decoration-neutral-600 underline-offset-2"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.link}
      </a>
    </li>
  );
};
