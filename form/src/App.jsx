import Engine, { formatValue } from "publicodes";
import rules from "./rules";

// Initialiser le moteur Publicodes
const engine = new Engine(rules);
// La règle cible pour le calcul
const TARGET = "rémunération nette";

// Modifier la situation initiale
engine.setSituation({
  "nb jours": 15,
  TJM: 500,
  "charges fixes": 500,
});

export default function App() {
  return (
    <>
      <h1>Simulateur de TJM pour freelance</h1>

      <section>
        <h2>Résultats</h2>
        Rémunération nette : {formatValue(engine.evaluate(TARGET))}
      </section>
    </>
  );
}
