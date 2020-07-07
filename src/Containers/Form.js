import React from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.reset();
    alert(`Message envoyé, nous vous recontacterons au plus vite`);
    let templateParams = {
      expediteur: data.email,
      to_name: process.env.REACT_APP_DESTINATAIRE,
      prenom: data.prenom,
      nom: data.nom,
      sujet: data.sujet,
      message: data.message,
      telephone: data.telephone,
      societe: data.societe,
    };
    emailjs.send(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      templateParams,
      process.env.REACT_APP_USER
    );
  };

  const intialValues = {
    sujet: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    societe: "",
    message: "",
  };

  return (
    <div className="login-box">
      <h6>Contactez nous:</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="solo-input">
          <div className="user-box">
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
        <div className="duo-input">
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
        </div>
        <div className="duo-input">
          <div className="user-box">
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
          <div className="user-box">
            <input
              placeholder=" "
              defaultValue={intialValues.telephone}
              name="telephone"
              ref={register({ required: true, maxLength: 17 })}
            />
            {errors.telephone && errors.telephone.type === "required" && (
              <p>Veuillez remplir ce champ</p>
            )}
            {errors.telephone && errors.telephone.type === "maxLength" && (
              <p>Max 17 caractères</p>
            )}
            <label>Téléphone:</label>
          </div>
        </div>
        <div className="solo-input">
          <div className="user-box">
            <input
              placeholder=" "
              defaultValue={intialValues.societe}
              name="societe"
              ref={register({ required: false, maxLength: 35 })}
            />
            {errors.societe && errors.societe.type === "maxLength" && (
              <p>Max 35 caractères</p>
            )}
            <label>Societe:</label>
          </div>
        </div>
        <div className="message-input textBox">
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
