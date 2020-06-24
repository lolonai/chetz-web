import React from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    alert(`Message envoyé, nous vous recontacterons au plus vite`);
    let templateParams = {
      expediteur: data.email,
      to_name: process.env.REACT_APP_DESTINATAIRE,
      prenom: data.prenom,
      nom: data.nom,
      sujet: data.sujet,
      message: data.message,
    };
    emailjs.send(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      templateParams,
      process.env.REACT_APP_USER
    );
  };

  const intialValues = {
    prenom: "",
    nom: "",
    email: "",
    sujet: "",
    message: "",
  };

  return (
    <div className="login-box">
      <h6>
        Contactez nous:
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inline-input">
          <div className="user-box">
            <input
              placeholder=" "
              defaultValue={intialValues.prenom}
              name="prenom"
              ref={register({ required: true })}
            />
            {errors.prenom && <p>Veuillez remplir ce champ</p>}
            <label>Prénom:</label>
          </div>
          <div className="user-box">
            <input
              placeholder=" "
              defaultValue={intialValues.nom}
              name="nom"
              ref={register({ required: true })}
            />
            {errors.nom && <p>Veuillez remplir ce champ</p>}
            <label>Nom:</label>
          </div>
        </div>
        <div className="inline-input">
          <div className="user-box w100">
            <input
              placeholder=" "
              defaultValue={intialValues.email}
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p>Veuillez remplir ce champ</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p>Veuillez entrer une adresse email valide</p>
            )}
            <label>email:</label>
          </div>
        </div>
        <div className="inline-input">
          <div className="user-box w100">
            <input
              placeholder=" "
              defaultValue={intialValues.sujet}
              name="sujet"
              ref={register({ required: true, maxLength: 70 })}
            />
            {errors.sujet && <p>Veuillez remplir ce champ</p>}
            <label>Sujet:</label>
          </div>
        </div>
        <div className="inline-input textBox">
          <div className="use-box">
            <label>Message:</label>
            <textarea
              defaultValue={intialValues.message}
              name="message"
              ref={register({ required: true, minLength: 20 })}
            />
            {errors.message && errors.message.type === "required" && (
              <p>Veuillez remplir ce champ</p>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <p>Minimum 20 caractères</p>
            )}
          </div>
        </div>
        <div className="submitFlex">
          <a href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit">Envoyer</button>
          </a>
        </div>
      </form>
    </div>
  );
}
