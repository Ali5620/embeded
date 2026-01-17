import { useState } from "react";
import "../styles/login.css"; // reuse same styles
import  type { RegisterFormData } from "../validators/registerSchema";
import { registerSchema } from "../validators/registerSchema";


const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    username: "",
    email: "",
    address: "",
    Phoneno:"",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if(!result.success){
      setError(result.error.issues[0].message)
    }

    setError("")
    alert("Registration Successful");
   
  };

  return (
    <div className="auth-page">
    <div className="auth-container">
      <h2>Register</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="Phoneno" placeholder="Mobile no." onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
        

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
