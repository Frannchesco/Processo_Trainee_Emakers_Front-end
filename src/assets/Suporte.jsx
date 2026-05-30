import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Suporte.module.css";

const Suporte = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Como podemos ajudar?</h1>

        <div className={styles.exampleBox}>
          <span className={styles.qIcon}>Q</span>
          <p>Exemplo: Como saber o curso ideal para mim?</p>
        </div>

        <div className={styles.popular}>
          <strong>Popular:</strong> Como ver os meus cursos. Como acessar meus certificados. Sistema de reembolso.
        </div>

        <h2 className={styles.subtitle}>Assuntos</h2>

        <div className={styles.grid}>
          {/* Cada caixa branca representa um grupo de assuntos */}
          <div className={styles.card}>
            <div className={styles.emojiSpace}>{/* espaço para imagem do emoji */}</div>
            <ul>
              <li>Fale com nosso suporte</li>
              <li>Fale com nossos professores</li>
              <li>Dúvidas frequentes</li>
              <li>SAC</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.emojiSpace}></div>
            <ul>
              <li>Adquirir novos cursos</li>
              <li>Meu carrinho</li>
              <li>Ver meus cursos</li>
              <li>Meus Certificados</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.emojiSpace}></div>
            <ul>
              <li>Falar com professores</li>
              <li>Materiais gratuitos</li>
              <li>Biblioteca Mindemy®</li>
              <li>Quero ser um professor</li>
              <li>Avaliações acadêmicas</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.emojiSpace}></div>
            <ul>
              <li>Avaliar um curso</li>
              <li>Minhas avaliações</li>
              <li>Avaliações da comunidade</li>
              <li>Cursos mais avaliados</li>
            </ul>
          </div>
        </div>

        <div className={styles.quickLinks}>
          <span>Mindemy</span>
          <span>Ensine na Mindemy</span>
          <span>Baixe o aplicativo</span>
          <span>Quem somos</span>
          <span>Fale conosco</span>
        </div>

        <div className={styles.slogan}>
          <span className={styles.sloganLogo}>MINDEMY</span>
          <span>Investe no seu sucesso</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Suporte;