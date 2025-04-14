// src/components/CatsIndex/CatsIndex.jsx
import { Link } from 'react-router-dom';

function CatsIndex({ cats }) {
  return (
    <div>
      <h2>Cats Index</h2>
      {cats.map((cat) => (
        <Link key={cat.id} to={`/cats/${cat.id}`}>
          {cat.name}
        </Link>
      ))}
    </div>
  );
}

export default CatsIndex;