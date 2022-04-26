
const ContactListItem = ({ contacts, onDelete, deleting }) => {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id}>
          {`${contact.name} ${contact.phone}`}{' '}
          <button onClick={() => onDelete(contact.id)}>
            {deleting ? 'Видалення...' : 'Видалити'}
          </button>{' '}
        </li>
      ))}
    </>
  );
};

export default ContactListItem;