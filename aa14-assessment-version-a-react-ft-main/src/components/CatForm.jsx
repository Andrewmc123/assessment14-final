import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COLORS = ['red', 'blue', 'green', 'orange', 'white', 'black', 'brown'];

function CatForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0); // Initialize as number 0
  const [color, setColor] = useState('orange');
  const [errors, setErrors] = useState({ 
    name: 'Name field is required', 
    age: '' 
  });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors(prev => ({
      ...prev,
      name: !value.trim() 
        ? 'Name field is required' 
        : value.length > 30 
          ? 'Name must be fewer than 30 characters' 
          : ''
    }));
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    setErrors(prev => ({
      ...prev,
      age: value === '' 
        ? 'Age field is required'
        : isNaN(Number(value)) 
          ? 'Age must be a number'
          : Number(value) < 0 || Number(value) > 30 
            ? 'Age must be between 0 and 30' 
            : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.age) {
      console.log({ 
        name, 
        age: Number(age), // Ensure age is logged as number
        color 
      });
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Create a Cat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            data-testid="name-input"
          />
          {errors.name && <p className="errors" data-testid="name-error">{errors.name}</p>}
        </label>

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            data-testid="age-input"
          />
          {errors.age && <p className="errors" data-testid="age-error">{errors.age}</p>}
        </label>

        <label>
          Color:
          <select 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            data-testid="color-select"
          >
            {COLORS.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <button 
          type="submit" 
          disabled={!!errors.name || !!errors.age}
          data-testid="submit-button"
        >
          Create Cat
        </button>
      </form>
    </div>
  );
}

export default CatForm;