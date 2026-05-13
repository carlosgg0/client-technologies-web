import { useState } from "react";

export default function Chat() {

    const [to, setTo] = useState(contacts[0]);
    const [drafts, setDrafts] = useState(contacts.map(c => ''));

    return (
        <div>
            <ContactList
                contacts={contacts}
                setTo={setTo}
            />
            <ContactChat
                contact={to}
                drafts={drafts}
                setDrafts={setDrafts}
            />
        </div>
    );
}

function ContactList({ 
    contacts, 
    setTo 
}) {
    return (
        <ul>
            {contacts.map(c => (
                <li key={c.id}>
                    <button onClick={() => setTo(contacts[c.id])}>
                        {c.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

function ContactChat({ 
    contact, 
    drafts,  
    setDrafts 
}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <textarea
                placeholder={`Chat to ${contact.name}`}
                value={drafts[contact.id]}
                onChange={e => {
                    const newDrafts= [...drafts];
                    newDrafts[contact.id] = e.target.value;
                    setDrafts(newDrafts);
                }}
            />
            <br />
            <button>Send to {contact.email}</button>
        </form>
    );
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];