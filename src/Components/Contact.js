import React from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

export default function NameForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Prénom:</label>
      <input
        defaultValue={intialValues.prenom}
        name="prenom"
        ref={register({ required: true })}
      />
      {errors.prenom && <p>Veuillez remplir ce champ</p>}
      <label>Nom:</label>
      <input
        defaultValue={intialValues.nom}
        name="nom"
        ref={register({ required: true })}
      />
      {errors.nom && <p>Veuillez remplir ce champ</p>}
      <label>email:</label>
      <input
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
      <label>Sujet:</label>
      <input
        defaultValue={intialValues.sujet}
        name="sujet"
        ref={register({ required: true })}
      />
      {errors.sujet && <p>Veuillez remplir ce champ</p>}
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
      <input type="submit" />
    </form>
  );
}
