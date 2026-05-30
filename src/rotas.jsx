import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suporte from "./pages/Suporte/Suporte";
import Login from "./pages/Login/Login";
import Cursos from "./pages/Cursos/Cursos";
import ChatFab from "./components/ChatFab/ChatFab"; 

// dentro de <Routes>:
<Route path="/cursos" element={<Cursos />} />

function AppRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
      <ChatFab />
    </BrowserRouter>
  );
}

export default AppRotas;