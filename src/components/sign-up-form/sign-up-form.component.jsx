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

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          value={displayName}
        />
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={email}
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          required
          type="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          onChange={handleChange}
          required
          type="password"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
