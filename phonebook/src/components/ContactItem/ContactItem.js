import React from "react";
import PropTypes from "prop-types";
import styles from "../Phonebook.module.css";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      {name}: {number}
      <button type="button" className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
