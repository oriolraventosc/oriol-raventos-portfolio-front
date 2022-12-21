import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useContact from "../../utils/FormFetch/baseFetch";
import ContactFormStyled from "./ContactFormStyled";

const ContactForm = () => {
  const [alert, setAlert] = useState({
    error: false,
    message:
      "Try submiting the form again with the needed information (name, email and message)",
  });
  const intialFormData = {
    name: "",
    email: "",
    telephone: 34,
    message: "",
  };
  const { register, watch } = useForm();
  const watchValues = watch(["name", "email"]);
  const [initialForm, setData] = useState(intialFormData);
  const { addContact } = useContact();
  const { error } = alert;
  const handleFormChange = (event) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let formDataToSubmit = {
      name: initialForm.name,
      email: initialForm.email,
      telephone: initialForm.telephone,
      message: initialForm.message,
    };

    if (
      formDataToSubmit.name === "" ||
      formDataToSubmit.email === "" ||
      formDataToSubmit.message === ""
    ) {
      setAlert({ ...alert, error: true });
    } else {
      addContact(formDataToSubmit);
      setAlert({ ...alert, error: false });
      event.target.reset();
      initialForm.name = "";
      initialForm.email = "";
      initialForm.telephone = 34;
      initialForm.message = "";
    }
  };
  return (
    <ContactFormStyled id="contact">
      <h2>
        contact <strong>me</strong>
      </h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            {...register("name", {
              minLength: 1,
            })}
            autoComplete="off"
            placeholder="name"
            onChange={handleFormChange}
          />
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", {
              minLength: 1,
            })}
            autoComplete="off"
            placeholder="e-mail"
            onChange={handleFormChange}
          />
          {watchValues && watchValues["email"] === "" ? (
            <span>Remember to type your email</span>
          ) : (
            <></>
          )}
        </div>
        <div>
          <input
            id="telephone"
            name="telephone"
            type="number"
            {...register("telephone")}
            autoComplete="off"
            placeholder="telephone"
            onChange={handleFormChange}
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            {...register("message")}
            autoComplete="off"
            placeholder="message"
            onChange={handleFormChange}
          ></textarea>
        </div>
        <button type="submit">SUBMIT</button>
        {error === true && (
          <div className="alert">
            <p>{alert.message}</p>
          </div>
        )}
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
