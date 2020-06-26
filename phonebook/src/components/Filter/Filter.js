import React from "react";
import styles from "../Phonebook.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.finder}>
    Finder
    <input
      type="text"
      value={value}
      placeholder="Search for..."
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

export default Filter;
