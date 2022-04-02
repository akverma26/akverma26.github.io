import ProfileData from "../ProfileData";

export default function ContactsPage() {
    const contacts = ProfileData.contactsSection;
    return (
        <div className="contacts-container">
            <div className="email-container">
                <span>Drop me a mail @ </span>
                {contacts
                    .filter((c) => c.type === "email")
                    .map((contact, index) => (
                        <a
                            href={`mailto:${contact.contact}?Subject=Mail from Portfolio`}
                            key={index}
                            className="email"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {contact.contact}
                        </a>
                    ))}
            </div>
            <div className="social-handles">
                <span>or you can connect with me @ </span>
                {contacts
                    .filter((c) => c.type !== "email")
                    .map((contact, index) => (
                        <a
                            key={index}
                            href={contact.contact}
                            className="handle"
                            rel="noreferrer"
                            target="_blank"
                        >
                            [{contact.type}]
                        </a>
                    ))}
            </div>
        </div>
    );
}
