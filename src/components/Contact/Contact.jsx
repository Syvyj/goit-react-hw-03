import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.info}>
        <span>{name}:</span>
        <span>{number}</span>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
