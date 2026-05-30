import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout({ content }) {
  return (
    <>
      <NavBar />
      {content}
      <Footer />
    </>
  );
}

export default Layout;