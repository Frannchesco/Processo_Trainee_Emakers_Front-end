import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Cursos.module.css";
import imagemCurso1 from "../../assets/imagemCurso1.png";
import imagemCurso2 from "../../assets/imagemCurso2.png";
import imagemCurso3 from "../../assets/imagemCurso3.png";
import imagemCurso4 from "../../assets/imagemCurso4.png";
import imagemCurso5 from "../../assets/imagemCurso5.png";
import imagemCurso6 from "../../assets/imagemCurso6.png";
import imagemMedalha from "../../assets/imagemMedalha.png";

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description:
      "Aprenda a criar sites e aplicativos modernos com as principais tecnologias do mercado. Domine HTML, CSS, JavaScript e frameworks como React e Vue.js, além de aprender a desenvolver backends robustos com Node.js e APIs.\nNosso curso é focado em práticas reais para o mercado, com projetos que você pode incluir no portfólio e suporte de especialistas para tirar todas as suas dúvidas. Ao final, você terá um certificado reconhecido e estará pronto para atuar como Desenvolvedor Web.",
    price: "R$ 49,90",
    oldPrice: "R$ 154,90",
    rating: 4.7,
    reviews: 512,
    imageLeft: true,
    imageSrc: imagemCurso1,
  },
  {
    id: 2,
    title: "Marketing Digital",
    description:
      "Domine as estratégias que impulsionam marcas e negócios na internet e destaque-se no mercado. Aprenda a criar campanhas eficazes, gerenciar redes sociais, produzir conteúdos impactantes, e atrair mais clientes. Desenvolva habilidades em SEO para aumentar a visibilidade online, anúncios no Google e Facebook Ads, e e-mail marketing para converter leads em clientes.\nCom aulas práticas e um certificado reconhecido, você estará pronto para crescer na carreira ou alavancar seu próprio negócio.",
    price: "R$ 24,90",
    oldPrice: "R$ 97,90",
    rating: 4.5,
    reviews: 311,
    imageLeft: false,
    imageSrc: imagemCurso2,
  },
  {
    id: 3,
    title: "Ciência de Dados",
    description:
      "Descubra como transformar informações em insights valiosos e conquistar o mercado com habilidades em alta demanda. Aprenda análise de dados, estatística, visualização, machine learning e ferramentas como Python, R e SQL.\nCom aulas práticas e projetos reais, você estará preparado para atuar como cientista de dados em empresas de todos os setores. Receba um certificado reconhecido e destaque-se em uma das áreas mais promissoras do mercado.",
    price: "R$ 97,90",
    oldPrice: "R$ 189,90",
    rating: 4.9,
    reviews: 135,
    imageLeft: true,
    imageSrc: imagemCurso3,
  },
  {
    id: 4,
    title: "Design Gráfico",
    description:
      "Aprenda a criar designs incríveis com as principais ferramentas e técnicas do mercado. Domine o uso de softwares como Adobe Photoshop, Illustrator e InDesign, além de trabalhar com tipografia, paleta de cores e composição visual.\nO curso foca em práticas reais, com projetos que podem ser incluídos no seu portfólio, e oferece suporte de especialistas. Ao final, você receberá um certificado reconhecido e estará preparado para atuar como Designer Gráfico.",
    price: "R$ 24,90",
    oldPrice: "R$ 85,90",
    rating: 4.9,
    reviews: 87,
    imageLeft: false,
    imageSrc: imagemCurso4,
  },
  {
    id: 5,
    title: "Gestão de Projetos",
    description:
      "Torne-se um líder eficaz com este curso de gestão de projetos. Aprenda métodos como Scrum, Agile e Kanban. Desde o planejamento até a execução, você será capaz de gerenciar, otimizar e entregar projetos com sucesso.\nO curso aborda também a comunicação eficaz, gestão de prazos e orçamentos, preparando você para liderar equipes multidisciplinares. Ao final, você terá as habilidades necessárias para se destacar no mercado.",
    price: "R$ 197,90",
    oldPrice: "R$ 244,90",
    rating: 4.7,
    reviews: 462,
    imageLeft: true,
    imageSrc: imagemCurso5,
    badgeImg: imagemMedalha,   // ← imagem da medalha
  },
  {
    id: 6,
    title: "SEO (Search Engine Optimization)",
    description:
      "Aprenda as técnicas para colocar sites no topo do Google! Este curso ensina tudo sobre palavras-chave, otimização on-page e off-page, backlinks e ferramentas como Google Analytics. Além disso, você aprenderá a analisar métricas, melhorar a experiência do usuário e desenvolver estratégias para alcançar melhores resultados em busca orgânica.\nAo final, você estará preparado para otimizar sites e gerar tráfego qualificado.",
    price: "R$ 54,80",
    oldPrice: "R$ 119,90",
    rating: 4.5,
    reviews: 244,
    imageLeft: false,
    imageSrc: imagemCurso6,
  },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full)           return <span key={i} className={styles.starFull}>★</span>;
        if (i === full && half) return <span key={i} className={styles.starHalf}>★</span>;
        return                         <span key={i} className={styles.starEmpty}>★</span>;
      })}
    </span>
  );
}

function CourseStripe({ course }) {
  const { title, description, price, oldPrice, rating, reviews, imageLeft, imageSrc, badgeImg } = course;

  const imgBlock = (
    <div className={styles.stripeImage}>
      <img src={imageSrc} alt={title} className={styles.stripeImg} />
    </div>
  );

  const textBlock = (
    <div className={styles.stripeText}>
      {badgeImg && <img src={badgeImg} alt="medalha" className={styles.stripeBadgeImg} />}
      <h2 className={styles.stripeTitle}>{title}</h2>
      <p className={styles.stripeDesc}>{description}</p>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        <span className={styles.oldPrice}>{oldPrice}</span>
        <a href="#" className={styles.verCurso}>Ver Curso →</a>
      </div>
    </div>
  );

  const stripeClass = `${styles.courseStripe} ${imageLeft ? styles.imageLeft : styles.imageRight}`;

  return (
    <div className={styles.courseBlock}>
      <div className={stripeClass}>
        {imageLeft ? <>{imgBlock}{textBlock}</> : <>{textBlock}{imgBlock}</>}
      </div>

      <div className={`${styles.ratingRow} ${imageLeft ? styles.ratingLeft : styles.ratingRight}`}>
        <span className={styles.ratingNum}>{rating}</span>
        <StarRating rating={rating} />
        <span className={styles.reviewCount}>({reviews})</span>
      </div>
    </div>
  );
}

function Cursos() {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />

      <section className={styles.pageHero}>
        <h1 className={styles.pageTitle}>Cursos Mindemy</h1>
        <p className={styles.pageSubtitle}>
          Aprenda habilidades práticas, domine novas tecnologias e abra as portas para um futuro de
          sucesso. Explore nossos cursos e comece hoje mesmo. Invista no seu sucesso!
        </p>
      </section>

      <main>
        {courses.map((course) => (
          <CourseStripe key={course.id} course={course} />
        ))}
      </main>

      <Footer />

      <button className={styles.chatFab} aria-label="Abrir chat">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}

export default Cursos;