import { useParams } from 'react-router-dom';

function CatShow({ cats }) {
  const { catId } = useParams();
  const cat = cats.find((cat) => cat.id === Number(catId));

  if (!cat) return null;

  return (
    <div>
      <h2>{cat.name}</h2>
      <p>Color: {cat.color}</p>
      <p>Age: {cat.age}</p>
    </div>
  );
}

export default CatShow;