import React from "react";
import { useNavigate } from "react-router-dom"; // ← importe o hook
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.page}>
      {/* Topo direito: logo + link */}
      <div className={styles.topBar}>
        <img 
          src={logo} 
          alt="Mindemy" 
          className={styles.logo} 
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <a href="#" className={styles.signupLink}>cadastre-se agora</a>
      </div>

      {/* Título e subtítulo fora da caixa */}
      <div className={styles.headerText}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>
          Digite o endereço de e-mail e a senha da sua conta Mindemy.
        </p>
      </div>

      {/* Card central – apenas o formulário e ajuda */}
      <div className={styles.card}>
        <form className={styles.form}>
          <label className={styles.label}>Endereço de e-mail</label>
          <input type="email" className={styles.input} />

          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input} />

          <a href="#" className={styles.forgotLink}>Esqueceu a senha?</a>

          <button type="submit" className={styles.button}>Entrar</button>
        </form>

        <p className={styles.helpText}>Precisa de ajuda para entrar?</p>
      </div>
    </div>
  );
};

export default Login;