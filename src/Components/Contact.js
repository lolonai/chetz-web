import React from "react";
import { useInput } from "./Hooks/input-hook";
import * as emailjs from "emailjs-com";

export default function NameForm(props) {
  const { value: sujet, bind: bindSujet, reset: resetSujet } = useInput("");
  const { value: prenom, bind: bindPrenom, reset: resetPrenom } = useInput("");
  const { value: nom, bind: bindNom, reset: resetNom } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Message envoyé, nous vous recontacterons à cet adressse: ${email}`);
    let templateParams = {
      expediteur: email,
      to_name: process.env.REACT_APP_EMAILJS_DESTINATAIRE_KEY,
      prenom: prenom,
      nom: nom,
      sujet: sujet,
      message: message,
    };
    emailjs.send(
      process.env.REACT_APP_EMAILJS_1,
      process.env.REACT_APP_EMAILJS_2,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER
    );
    resetSujet();
    resetPrenom();
    resetNom();
    resetEmail();
    resetMessage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prénom:
        <input type="text" {...bindPrenom} />
      </label>
      <label>
        Nom:
        <input type="text" {...bindNom} />
      </label>
      <label>
        email:
        <input type="text" {...bindEmail} />
      </label>
      <label>
        Sujet:
        <input type="text" {...bindSujet} />
      </label>
      <label>
        Message:
        <textarea type="text" {...bindMessage} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
