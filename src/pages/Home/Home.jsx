import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import gifHome from "../../assets/gifHome.gif";
import cookie from "../../assets/cookie.png";
import Lorenzo from "../../assets/Lorenzo.png";
import Rodrigo from "../../assets/Rodrigo.png";
import Victor from "../../assets/Victor.png";
import imagemHome1 from "../../assets/imagemHome1.png";
import imagemHome2 from "../../assets/imagemHome2.png";
import imagemHome3 from "../../assets/imagemHome3.png";
import imagemHome4 from "../../assets/imagemHome4.png";
import imagemHome5 from "../../assets/imagemHome5.png";
import imagemHome6 from "../../assets/imagemHome6.png";
import imagemHome7 from "../../assets/imagemHome7.png";
import imagemHome8 from "../../assets/imagemHome8.png";
import imagemMenos from "../../assets/imagemMenos.png";
import imagemX from "../../assets/imagemX.png";
import { useNavigate } from "react-router-dom";

// Dados dos cursos em destaque
const featuredCourses = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description:
      "Aprenda desenvolvimento web do básico ao avançado com HTML, CSS, JavaScript, React e Nodejs, e prepare-se para o mercado.",
    link: "Ver Curso de Desenvolvimento Web",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    image: imagemHome6,
  },
  {
    id: 2,
    title: "Ciência de Dados",
    description:
      "Domine a análise de dados com Python, SQL e machine learning. Transforme dados em decisões estratégicas e prepare-se para uma carreira promissora.",
    link: "Ver Curso de Ciência de Dados",
    bg: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2333 100%)",
    image: imagemHome7,
  },
  {
    id: 3,
    title: "Design Gráfico",
    description:
      "Desperte sua criatividade com este curso! Aprenda a usar ferramentas como Photoshop, Illustrator e Canva para criar designs profissionais, como logotipos, banners e layouts.",
    link: "Ver Curso de Design",
    bg: "linear-gradient(135deg, #1a0533 0%, #2d1b69 60%, #11998e 100%)",
    image: imagemHome8,
  },
];

// Dados das features
const features = [
  {
    icon: imagemHome1,
    title: "Treinamento prático",
    description:
      "Pratique o que você aprendeu, com exercícios, simulados, testes e use a IA para aprender.",
  },
  {
    icon: imagemHome2,
    title: "Certificações Qualificadas",
    description:
      "Prepare-se para receber certificações reconhecidas pelo setor. Impulsione seu currículo!",
  },
  {
    icon: imagemHome3,
    title: "Análises e feedbacks",
    description:
      "Receba insights personalizadas de como está seu aprendizado, te ajudando a resolver seus maiores problemas.",
  },
  {
    icon: imagemHome4,
    title: "Consultas personalizadas",
    description:
      "Tenha trilhas personalizadas para os seus objetivos. Visualize suas metas antes de concluí-las!",
  },
];

// Depoimentos
const testimonials = [
  {
    id: 1,
    text: "A Mindemy foi essencial na minha trajetória até o mercado de trabalho, desde o alinhamento dos meus objetivos à colheita dos frutos. Obrigado a toda a equipe! ",
    name: "Rodrigo Romanhol",
    role: "Designe e CEO da Rod Produções",
    image: Rodrigo,
  },
  {
    id: 2,
    text: "A Mindemy realmente fez diferença no meu trajeto no mundo digital, e foi uma excelente guia para criar a 7even.",
    name: "Victor Cabral",
    role: "CTO da 7even e Gestor de Tráfego",
    image: Victor,
  },
  {
    id: 3,
    text: "A Mindemy me deu as ferramentas necessárias para crescer. Aprendi o que precisava para o mundo real e conquistei uma promoção com confiança no meu conhecimento.",
    name: "Lorenzo Ozório",
    role: "Desenvolvedor Web, Diretor da Usimicro",
    image: Lorenzo,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [cookieVisible, setCookieVisible] = useState(true);
  const [currentCourse, setCurrentCourse] = useState(0);

  const prevCourse = () =>
    setCurrentCourse((p) => (p - 1 + featuredCourses.length) % featuredCourses.length);
  const nextCourse = () =>
    setCurrentCourse((p) => (p + 1) % featuredCourses.length);

  return (
    <div className={styles.pageWrapper}>
      <NavBar />

      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.arrowPrefix}>&gt;&gt; </span>
            <span className={styles.bold1}>Adquira</span>
            <br />
            habilidades práticas e
            <br />
            transforme sua carreira
            <br />
            com cursos que
            <br />
            <span className={styles.bold}>preparam</span> você para o
            <br />
            mercado de trabalho
          </h1>
          <p className={styles.heroSubtitle}>
            Aprenda hoje, conquiste o amanhã!
            <br />
            Invista no seu Sucesso!
          </p>
          <div className={styles.searchBox}>
            <span className={styles.searchEmoji}>🔍</span>
            <input
              type="text"
              placeholder="Pesquisar por algum curso"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img src={gifHome} alt="Estudante estudando online" className={styles.heroGif} />
        </div>
      </section>

      {/* Faixa roxa */}
      <div className={styles.dividerBar} />

      {/* Seção Cursos */}
      <section className={styles.coursesSection}>
        <p className={styles.coursesTagline}>
          Tudo o que você precisa, exatamente onde você precisa.
        </p>
        <div className={styles.coursesHeader}>
          <h2 className={styles.coursesTitle}>Conheça nossos cursos</h2>
        </div>
        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={prevCourse} aria-label="Anterior">
            &#8249;
          </button>
          <div className={styles.cardsRow}>
            {featuredCourses.map((course, idx) => {
              const offset = (idx - currentCourse + featuredCourses.length) % featuredCourses.length;
              return (
                <div
                  key={course.id}
                  className={`${styles.courseCard} ${
                    offset === 0 ? styles.cardActive : offset === 1 ? styles.cardRight : styles.cardLeft
                  }`}
                >
                  <div className={styles.imageWrapper}>
                    <img src={course.image} alt={course.title} className={styles.courseImage} />
                    <div className={styles.playOverlay}>
                      <div className={styles.playBtn}>▶</div>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{course.title}</h3>
                    <p className={styles.cardDesc}>{course.description}</p>
                    <a href="#" className={styles.cardLink}>
                      {course.link} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <button className={styles.carouselArrow} onClick={nextCourse} aria-label="Próximo">
            &#8250;
          </button>
        </div>
        <button className={styles.allCoursesBtn} onClick={() => navigate("/cursos")}>
          TODOS OS CURSOS
        </button>
      </section>

      {/* Seção dividida: features + card de desafio */}
      <div className={styles.splitContainer}>
        {/* Lado esquerdo: features */}
        <div className={styles.leftSide}>
          <h2 className={styles.featuresTitle}>Foque no que realmente importa</h2>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <img src={f.icon} alt={f.title} />
                <div>
                  <h4 className={styles.featureCardTitle}>{f.title}</h4>
                  <p className={styles.featureCardDesc}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado direito: estrutura do desafio (barra + card imagem) */}
        <div className={styles.rightSide}>
          <div className={styles.challengeWrapper}>
            {/* Barra superior branca com ícones */}
            <div className={styles.iconBar}>
              <img src={imagemMenos} alt="menos" />
              <img src={imagemX} alt="fechar" />
            </div>
            {/* Card com imagem de fundo */}
            <div className={styles.challengeCard} style={{ backgroundImage: `url(${imagemHome5})` }}>
              <div className={styles.challengeContent}>
                <div className={styles.challengeText}>
                  <h3>Instruções</h3>
                  <p>Teste seu conhecimento em Front-End</p>
                  <p>
                    Coloque suas habilidades de Front-End à prova! Crie uma página responsiva e interativa
                    usando HTML, CSS e JavaScript. Teste sua criatividade e domínio das tecnologias criando
                    um layout funcional, moderno e compatível com diferentes dispositivos.
                  </p>
                  <button className={styles.challengeButton}>INICIAR DESAFIO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa da marca */}
      <div className={styles.brandBar}>
        <span className={styles.brandBarText}>MINDEMY</span>
      </div>

      {/* Depoimentos */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsTitle}>Veja o que outros alunos estão dizendo</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <span className={styles.quoteIcon}>"</span>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <img src={t.image} alt={t.name} />
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cookie Banner */}
      {cookieVisible && (
        <div className={styles.cookieBanner}>
          <img src={cookie} alt="cookie" />
          <p className={styles.cookieText}>
            Usamos cookies na entrega dos nossos serviços.{" "}
            <a href="#" className={styles.cookieLink}>Saber mais</a>
          </p>
          <button className={styles.btnReject} onClick={() => setCookieVisible(false)}>
            Reject
          </button>
          <button className={styles.btnOk} onClick={() => setCookieVisible(false)}>
            Ok
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;