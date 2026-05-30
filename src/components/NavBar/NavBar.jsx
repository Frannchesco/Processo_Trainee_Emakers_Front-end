import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate()
  return (
    <nav className={style.navbar}>
      {/* Esquerda: Logo */}
      <div className={style.logoArea} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/src/assets/Logo.png" alt="Logo Mindemy" className={style.logoImage} />
      </div>

      {/* Centro: Nome com fonte Arimo */}
      <div className={style.brand} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        MINDEMY
      </div>

      {/* Direita: Barra de pesquisa + carrinho + usuário */}
      <div className={style.rightArea}>
        <div className={style.searchWrapper}>
          <FaSearch className={style.searchIconLeft} />
          <input type="text" placeholder="Pesquisar por algum curso" className={style.searchInput} />
        </div>
        <FaShoppingCart className={style.cartIcon} />
        <FaUserCircle className={style.userIcon} onClick={() => navigate("/login")} style={{ cursor: "pointer" } }/>
      </div>
    </nav>
  );
}

export default NavBar;