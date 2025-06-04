// src/Input.jsx
export default function Input({ element, onChange }) {
  return (
    <div>
      <label htmlFor={element.id}>{element.label}</label>
      <br />
      <input
        id={element.id}
        type="number"
        value={element.value ?? ""}
        onChange={(e) => onChange(element.id, e.target.value)}
      />
      {element.unit && <span>{element.unit}</span>}
    </div>
  );
}
