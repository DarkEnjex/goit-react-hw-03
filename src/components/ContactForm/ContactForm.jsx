import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Number too Short!")
    .max(50, "Number too Long!")
    .required("Required!"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    username: "",
    number: "",
  };

  const handleSubmit = (
    values,
    { resetForm }
  ) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.label}>
              <span className={s.span}>Name</span>
              <Field
                name="username"
                placeholder="Please, enter your name..."
                className={s.field}
              />
              <ErrorMessage
                component="div"
                name="username"
                className={s.error}
              />
            </label>
            <label className={s.label}>
              <span className={s.span}>
                Number
              </span>
              <Field
                type="text"
                name="number"
                placeholder="Please, enter your number..."
                className={s.field}
              />
              <ErrorMessage
                name="number"
                component="div"
                className={s.error}
              />
            </label>
            <button
              type="submit"
              className={s.btn}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
