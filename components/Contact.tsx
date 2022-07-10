// Component imports
import { ContactItem } from "./ContactItem";

// Data imports
import { contact } from "../data/contact";

export const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="font-mono text-2xl font-bold text-purple-600">Contact</h1>

      <br />

      <ul className="list-disc pl-4">
        <ContactItem
          cta={"Prefer typing?"}
          href={`mailto:${contact.email}`}
          link={contact.email}
        />
        <ContactItem
          cta={"Prefer chatting?"}
          href={`tel:${contact.telephone}`}
          link={contact.telephone}
        />
        <ContactItem
          cta={"Prefer looking around?"}
          href={contact.website}
          link={contact.website}
        />
      </ul>
    </div>
  );
};
