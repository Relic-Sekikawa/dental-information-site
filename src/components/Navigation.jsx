import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🦷 歯科情報サイト
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">ホーム</Link>
          </li>
          <li className="nav-item">
            <Link to="/symptoms" className="nav-link">症状別治療期間</Link>
          </li>
          <li className="nav-item">
            <Link to="/when-to-visit" className="nav-link">診察判断基準</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">歯医者検索</Link>
          </li>
          <li className="nav-item">
            <Link to="/recommended" className="nav-link">おすすめ歯医者</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
