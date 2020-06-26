import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import styles from "../Phonebook.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <ContactItem
              id={id}
              number={number}
              name={name}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
