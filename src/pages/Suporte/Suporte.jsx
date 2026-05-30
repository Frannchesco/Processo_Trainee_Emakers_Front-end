import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Suporte.module.css";
import imagemSuporte1 from "../../assets/imagemSuporte1.png";
import imagemSuporte2 from "../../assets/imagemSuporte2.png";
import imagemSuporte3 from "../../assets/imagemSuporte3.png";
import imagemSuporte4 from "../../assets/imagemSuporte4.png";

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
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.emojiSpace}>
              <img src={imagemSuporte1} alt="emoji" />
            </div>
            <ul>
              <li>Fale com nosso suporte</li>
              <li>Fale com nossos professores</li>
              <li>Dúvidas frequentes</li>
              <li>SAC</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.emojiSpace}>
              <img src={imagemSuporte2} alt="emoji" />
            </div>
            <ul>
              <li>Adquirir novos cursos</li>
              <li>Meu carrinho</li>
              <li>Ver meus cursos</li>
              <li>Meus Certificados</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.emojiSpace}>
              <img src={imagemSuporte3} alt="emoji" />
            </div>
            <ul>
              <li>Falar com professores</li>
              <li>Materiais gratuitos</li>
              <li>Biblioteca Mindemy®</li>
              <li>Quero ser um professor</li>
              <li>Avaliações acadêmicas</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.emojiSpace}>
              <img src={imagemSuporte4} alt="emoji" />
            </div>
            <ul>
              <li>Avaliar um curso</li>
              <li>Minhas avaliações</li>
              <li>Avaliações da comunidade</li>
              <li>Cursos mais avaliados</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Suporte;