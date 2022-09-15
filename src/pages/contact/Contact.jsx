import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import contactStyles from "../contact/contact.module.scss";
const Contact = () => {
  return (
    <div className={contactStyles.container}>
      <section className={contactStyles.section}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/omer-yagci"
        >
          <AiFillGithub
            className={`${contactStyles.icon} ${contactStyles.black}`}
          />
        </a>
      </section>
      <section className={contactStyles.section}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/omer-kagan-yagci/"
        >
          <AiFillLinkedin className={contactStyles.icon} />
        </a>
      </section>
    </div>
  );
};

export default Contact;
