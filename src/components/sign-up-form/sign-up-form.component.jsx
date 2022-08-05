import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";
import { UserContext } from "../../contexts/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists");
      }
      console.log(`user creation encounter an error`, error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          inputOptions={{
            type: "text",
            name: "displayName",
            required: true,
            onChange: changeHandler,
            value: displayName,
          }}
        />

        <FormInput
          label='Email'
          inputOptions={{
            type: "email",
            name: "email",
            required: true,
            onChange: changeHandler,
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: "password",
            name: "password",
            required: true,
            onChange: changeHandler,
            value: password,
          }}
        />

        <FormInput
          label='Confirm Password'
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            required: true,
            onChange: changeHandler,
            value: confirmPassword,
          }}
        />

        <Button buttonType={"inverted"} type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
