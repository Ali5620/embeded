import { useState } from "react";
import "../styles/login.css"
import { loginSchema } from "../validators/loginSchema";
import type { LoginFormData } from "../validators/loginSchema";

const Login = () => {
  

    const[formData,setFormData] = useState<LoginFormData>({
        email:"",
        password:"",
    })

    const[error,setError] = useState("");

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if(!result.success){
        setError(result.error.issues[0].message);
        return;
    }
    setError("");
    alert("Login successful");
  }

  return (
    <div className="auth-page">
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
   </div>
  );
};

export default Login;
