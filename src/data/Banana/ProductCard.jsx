import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div>
      <img src={product.src} />
      <h3>{product.name}</h3>
      <p>{product.price} br/kg</p>

      <button onClick={() => navigate(`/product/${product.id}`)}>
        View Product
      </button>
    </div>
  );
}
