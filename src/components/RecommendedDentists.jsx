import { dentists } from '../data/dentists';
import '../styles/RecommendedDentists.css';

export default function RecommendedDentists() {
  // 推奨される歯医者を取得
  const recommendedDentists = dentists.filter((d) => d.recommended);

  return (
    <div className="recommended-container">
      <h1>⭐ おすすめの歯医者</h1>
      <p className="intro-text">
        当サイトが厳選した、評価が高く信頼できる歯医者をご紹介します。
      </p>

      <div className="recommendation-criteria">
        <h3>選定基準</h3>
        <ul>
          <li>評価が高い（4.5以上）</li>
          <li>口コミレビューが十分にある</li>
          <li>広い診療科目を提供している</li>
          <li>患者からの信頼が厚い</li>
        </ul>
      </div>

      <div className="recommended-grid">
        {recommendedDentists.map((dentist, index) => (
          <div key={dentist.id} className="recommended-card featured">
            <div className="ranking-badge">
              {index === 0 ? '🥇 1位' : index === 1 ? '🥈 2位' : index === 2 ? '🥉 3位' : index + 1}
            </div>

            <div className="card-header">
              <h2>{dentist.name}</h2>
              <div className="rating-section">
                <div className="stars">
                  {'⭐'.repeat(Math.floor(dentist.rating))}
                  {dentist.rating % 1 !== 0 && '✨'}
                </div>
                <div className="rating-text">
                  {dentist.rating} / 5.0
                </div>
                <div className="review-count">
                  {dentist.reviews} 件のレビュー
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="detail-section">
                <h4>📍 アクセス</h4>
                <p className="address">{dentist.address}</p>
                <p className="distance">距離: {dentist.distance}</p>
              </div>

              <div className="detail-section">
                <h4>⏰ 診療時間</h4>
                <p>{dentist.hours}</p>
              </div>

              <div className="detail-section">
                <h4>📞 お問い合わせ</h4>
                <p>{dentist.phone}</p>
              </div>

              <div className="specialties-section">
                <h4>🔧 専門分野</h4>
                <div className="specialties-list">
                  {dentist.specialties.map((specialty) => (
                    <span key={specialty} className="specialty-badge">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="features">
                <h4>✨ おすすめポイント</h4>
                <ul>
                  <li>高い評価と多くの口コミで信頼性が確認できます</li>
                  <li>複数の診療科目に対応しているため、さまざまなニーズに対応可能です</li>
                  <li>診療時間が長いため、通いやすいです</li>
                </ul>
              </div>

              <button className="call-button">📞 電話で予約</button>
            </div>
          </div>
        ))}
      </div>

      {recommendedDentists.length === 0 && (
        <div className="no-recommended">
          現在、おすすめできる歯医者がありません。
        </div>
      )}

      <div className="search-suggestion">
        <h3>📍 他の歯医者を探す</h3>
        <p>
          上記のおすすめ以外の歯医者も多くあります。
          <a href="/search">検索ページ</a>で、あなたの条件に合った歯医者を見つけてください。
        </p>
      </div>
    </div>
  );
}
