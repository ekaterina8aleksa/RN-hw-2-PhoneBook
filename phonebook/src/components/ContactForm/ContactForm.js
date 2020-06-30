import React, { Component } from "react";
import styles from "../Phonebook.module.css";

class ContactForm extends Component {
  state = {
    name: " ",
    number: " ",
  };

  handelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              //required="required"
              placeholder="Enter name..."
              value={this.state.name}
              onChange={this.handelChange}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Phone Number
            <input
              type="tel"
              name="number"
              //required="required"
              placeholder="Enter number..."
              value={this.state.number}
              onChange={this.handelChange}
              className={styles.input}
            />
          </label>

          <lable>
            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </lable>
        </form>
      </>
    );
  }
}

export default ContactForm;
