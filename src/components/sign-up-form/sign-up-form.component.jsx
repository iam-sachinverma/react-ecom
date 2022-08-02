import { useState } from "react";

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Password not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

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
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={submitHandler}>
        <label>Display Name</label>
        <input
          type='text'
          name='displayName'
          required
          onChange={changeHandler}
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          name='email'
          required
          onChange={changeHandler}
          value={email}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          required
          onChange={changeHandler}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          required
          onChange={changeHandler}
          value={confirmPassword}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
