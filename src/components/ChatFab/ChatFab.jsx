import { useNavigate } from "react-router-dom";
import styles from "./ChatFab.module.css";

function ChatFab() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.chatFab}
      onClick={() => navigate("/suporte")}
      aria-label="Abrir chat"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}

export default ChatFab;