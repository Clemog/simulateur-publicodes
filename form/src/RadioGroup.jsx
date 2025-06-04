// src/RadioGroup.jsx
export default function RadioGroup({ element, onChange }) {
  return (
    <fieldset>
      <legend>{element.label}</legend>
      {element.options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={element.id}
            value={option.value}
            checked={element.value === option.value}
            onChange={() => onChange(element.id, option.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
