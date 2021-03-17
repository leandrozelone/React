import "./styles.css";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div>
      <button
        onClick={() => {
          window.alert("Clicou!");
        }}
      >
        Clicar
      </button>

      <hr />

      <Welcome gender="male" name="Leandro Zelone" />
      <Welcome gender="fame" name="Fernadna Zelone" />
    </div>
  );
}
