import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log({ ...formFields });

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    // obj square bracket notation
    // objName[propertyName]

    // console.log(name, value);
    // console.log({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={() => {}}>
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
