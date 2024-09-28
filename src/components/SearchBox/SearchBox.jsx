import { Formik, Form, Field } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={() => {}}
    >
      {({ values, handleChange }) => (
        <Form className={s.form}>
          <Field
            name="search"
            typr="text"
            className={s.input}
            value={values.search}
            onChange={(e) => {
              handleChange(e);
              onSearch(e.target.value);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
