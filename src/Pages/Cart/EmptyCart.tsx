import { Link } from "react-router-dom";

export const EmptyCart = ({ onNavigate }: { onNavigate?: () => void }) => (
  <div className="empty-cart">
    <p className="empty-cart__line">Your cart is empty. Start with one of our best sellers:</p>
    <ul className="empty-cart__links">
      <li>
        <Link to="/card-stands" className="btn btn-secondary" onClick={onNavigate}>
          Card stands
        </Link>
      </li>
      <li>
        <Link to="/stadiums" className="btn btn-secondary" onClick={onNavigate}>
          Stadiums
        </Link>
      </li>
    </ul>
  </div>
);
