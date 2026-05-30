import styles from "./Footer.module.css";

function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">Mindemy</a>
          <a href="#">Ensine na Mindemy</a>
          <a href="#">Baixe o aplicativo</a>
          <a href="#">Quem somos</a>
          <a href="#">Fale conosco</a>
        </div>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>MINDEMY</span>
          <br></br>
          <span className={styles.footerSub}>INVISTA NO SEU SUCESSO</span>
        </div>
      </footer>
  );
}

export default Footer;