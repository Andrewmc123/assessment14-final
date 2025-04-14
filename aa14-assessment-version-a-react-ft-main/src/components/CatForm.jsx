import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CatForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [color, setColor] = useState('orange');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const newErrors = {};
    if (!name) newErrors.name = "Name field is required";
    if (name.length > 30) newErrors.name = "Name must be fewer than 30 characters";
    if (age < 0 || age > 30) newErrors.age = "Age must be between 0 and 30";
    setErrors(newErrors);
  }, [name, age]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, color });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="errors">{errors.name}</p>
      </label>

      <label>
        Age
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <p className="errors">{errors.age}</p>
      </label>

      <label>
        Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {COLORS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
}

export default CatForm;