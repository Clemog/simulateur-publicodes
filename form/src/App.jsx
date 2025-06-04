// src/App.jsx
import Engine, { formatValue } from "publicodes";
import { FormBuilder } from "@publicodes/forms";
import { useState } from "react";
import rules from "./rules";
import Input from "./Input";

// Initialiser le moteur Publicodes
const engine = new Engine(rules);
// La règle cible pour le calcul
const TARGET = "rémunération nette";
// Form Builder pour gérer le formulaire
const formBuilder = new FormBuilder({ engine });
// Initialiser l'état du formulaire
const initialState = formBuilder.start(FormBuilder.newState(), TARGET);

export default function App() {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (id, value) => {
    const newState = formBuilder.handleInputChange(formState, id, value);
    setFormState(newState);
  };

  return (
    <>
      <h1>Simulateur de TJM pour freelance</h1>
      <form>
        {formBuilder.currentPage(formState).map((element) => (
          <Input key={element.id} element={element} onChange={handleChange} />
        ))}
      </form>
      <section>
        <h2>Résultats</h2>
        Rémunération nette : {formatValue(engine.evaluate(TARGET))}
      </section>
    </>
  );
}
