import { useState } from "react";
<<<<<<< HEAD
import "../styles/register.css"; // reuse same styles




const Register = () => {
  const [form, setForm] = useState({
=======
import "../styles/login.css"; // reuse same styles
import  type { RegisterFormData } from "../validators/registerSchema";
import { registerSchema } from "../validators/registerSchema";


const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
>>>>>>> f64b38e (login and register form added with client side validation using zod)
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
<<<<<<< HEAD
    setForm({ ...form, [e.target.name]: e.target.value });
=======
    setFormData({ ...formData, [e.target.name]: e.target.value });
>>>>>>> f64b38e (login and register form added with client side validation using zod)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

<<<<<<< HEAD
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }
    if(form.username.length < 8){
        setError("Invalid Username");
        return;
    }
    if(form.Phoneno.length < 10){
        setError("Invalid Mobile number");
        return;
    }

    if (!form.email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Registration successful ");
=======
    const result = registerSchema.safeParse(formData);

    if(!result.success){
      setError(result.error.issues[0].message)
    }

    setError("")
    alert("Registration Successful");
   
>>>>>>> f64b38e (login and register form added with client side validation using zod)
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
<<<<<<< HEAD
        <input name="address" placeholder="Name" onChange={handleChange} />
=======
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="Phoneno" placeholder="Mobile no." onChange={handleChange} />
>>>>>>> f64b38e (login and register form added with client side validation using zod)
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
        

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
