import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>🦷 歯科情報サイトへようこそ</h1>
          <p className="hero-subtitle">
            あなたの歯の悩みを解決するための総合情報サイト
          </p>
          <div className="hero-description">
            <p>
              このサイトは、歯の症状と治療期間、歯医者に行くべき判断基準、
              そして信頼できる歯医者の情報を、わかりやすくまとめた総合ガイドです。
            </p>
            <p>
              あなたの歯と口の健康を保つために必要な情報をすべて揃えています。
            </p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>主な機能</h2>
        <div className="features-grid">
          <Link to="/symptoms" className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>症状別治療期間ガイド</h3>
            <p>
              虫歯、歯周病、口内炎など、様々な症状に対する治療期間の目安をご紹介します。
            </p>
          </Link>

          <Link to="/when-to-visit" className="feature-card">
            <div className="feature-icon">🏥</div>
            <h3>歯医者に行くべき判断基準</h3>
            <p>
              症状別に、歯科医院を受診すべき時期と受診の必要性をまとめました。
            </p>
          </Link>

          <Link to="/search" className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>近所の歯医者検索</h3>
            <p>
              名前や住所で検索したり、専門分野で絞り込んだりできます。
            </p>
          </Link>

          <Link to="/recommended" className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>おすすめの歯医者</h3>
            <p>
              評価が高く、信頼できる歯医者をおすすめ順にご紹介します。
            </p>
          </Link>
        </div>
      </section>

      <section className="quick-tips-section">
        <h2>💡 歯の健康のための10のヒント</h2>
        <div className="tips-container">
          <div className="tip">
            <span className="tip-number">1</span>
            <p><strong>毎日2回歯磨きをする</strong> - 朝と夜に必ず歯磨きをしましょう</p>
          </div>
          <div className="tip">
            <span className="tip-number">2</span>
            <p><strong>歯間をきれいにする</strong> - フロスで歯の間もしっかり清掃</p>
          </div>
          <div className="tip">
            <span className="tip-number">3</span>
            <p><strong>定期診察を受ける</strong> - 6ヶ月ごとの定期検診でトラブル予防</p>
          </div>
          <div className="tip">
            <span className="tip-number">4</span>
            <p><strong>砂糖を控える</strong> - 虫歯の最大の敵は砂糖です</p>
          </div>
          <div className="tip">
            <span className="tip-number">5</span>
            <p><strong>適切な歯磨き方法</strong> - 柔らかい歯ブラシで優しく磨く</p>
          </div>
          <div className="tip">
            <span className="tip-number">6</span>
            <p><strong>水を飲む</strong> - 食後に水を口にすることで、口内を浄化</p>
          </div>
          <div className="tip">
            <span className="tip-number">7</span>
            <p><strong>タバコを避ける</strong> - 喫煙は歯周病のリスク</p>
          </div>
          <div className="tip">
            <span className="tip-number">8</span>
            <p><strong>バランスの取れた食事</strong> - 栄養バランスが歯の健康を支える</p>
          </div>
          <div className="tip">
            <span className="tip-number">9</span>
            <p><strong>ストレス管理</strong> - ストレスは歯ぎしりの原因に</p>
          </div>
          <div className="tip">
            <span className="tip-number">10</span>
            <p><strong>寝る前の歯磨き</strong> - 就寝前の歯磨きが最も重要</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>今すぐ始めましょう</h2>
        <p>
          歯の問題に直面していますか？それとも予防をしたいですか？
        </p>
        <div className="cta-buttons">
          <Link to="/symptoms" className="cta-button primary">
            症状を確認する →
          </Link>
          <Link to="/search" className="cta-button secondary">
            歯医者を探す →
          </Link>
        </div>
      </section>
    </div>
  );
}
