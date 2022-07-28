import React from "react";
import { useRef, useState, useEffect } from "react";
import "../styles/components/login.scss";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState(""); // il faut un user
  const [pwd, setPwd] = useState(""); // un mot de pass
  const [errMsg, setErrMsg] = useState(""); // un msg d'erreur
  const [success, setSuccess] = useState(false); // un msg success

  useEffect(() => {
    userRef.current.focus();
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empèche le rechargement de la page
  };

return(
  
  <section className="container">
    
    <div className="form">
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
       type="text" 
       id="username" 
       placeholder="Username"
       ref={userRef}
       autoComplete="off"
       onChange={(e) => setUser(e.target.value)}
       value={user}
       required
       />

       <label htmlFor="password">Password</label>
      <input 
      type="password" 
      id="password" 
      placeholder="Password" 
      onChange={(e) => setUser(e.target.value)}
      value={pwd}
      required
      
      />
      <button type="submit" className="btn">Login</button>
      <p className="message">New User? <a href="#">Create an account</a></p>
  </form>


    <form className="register-form">
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="password" placeholder="Password" />
      <button type="submit" className="btn">Submit</button>
      
    </form> 
  </div>
  </section>
  
)
    
}




export default Login;
