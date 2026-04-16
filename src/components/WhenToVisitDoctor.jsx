import { useState } from 'react';
import { whenToVisitDoctor } from '../data/symptoms';
import '../styles/WhenToVisitDoctor.css';

export default function WhenToVisitDoctor() {
  const [expandedId, setExpandedId] = useState(null);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'urgent':
        return '#F44336';
      case 'high':
        return '#FF9800';
      case 'medium':
        return '#FFC107';
      case 'low':
        return '#4CAF50';
      default:
        return '#999';
    }
  };

  const getUrgencyLabel = (urgency) => {
    switch (urgency) {
      case 'urgent':
        return '緊急';
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '不明';
    }
  };

  return (
    <div className="when-to-visit-container">
      <h1>🏥 歯医者に行くべき判断基準</h1>
      <p className="guide-description">
        以下の症状が見られた場合は、歯科医院の受診をおすすめします。
      </p>

      <div className="urgency-legend">
        <div className="urgency-item urgent">
          <span></span> 緊急（今すぐ受診）
        </div>
        <div className="urgency-item high">
          <span></span> 高（1-2日以内）
        </div>
        <div className="urgency-item medium">
          <span></span> 中（1-2週間以内）
        </div>
        <div className="urgency-item low">
          <span></span> 低（3-6か月以内）
        </div>
      </div>

      <div className="criteria-list">
        {whenToVisitDoctor.map((criterion) => (
          <div
            key={criterion.id}
            className={`criterion-item urgency-${criterion.urgency}`}
            onClick={() => setExpandedId(expandedId === criterion.id ? null : criterion.id)}
          >
            <div className="criterion-header">
              <div className="criterion-priority">
                <span
                  className="urgency-badge"
                  style={{ backgroundColor: getUrgencyColor(criterion.urgency) }}
                >
                  {getUrgencyLabel(criterion.urgency)}
                </span>
              </div>
              <div className="criterion-content">
                <h3>{criterion.symptom}</h3>
                <p className="recommendation">{criterion.recommendation}</p>
              </div>
              <div className="expand-icon">
                {expandedId === criterion.id ? '▼' : '▶'}
              </div>
            </div>

            {expandedId === criterion.id && (
              <div className="criterion-details">
                <p>{criterion.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="tips-section">
        <h3>💡 受診前のアドバイス</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>症状メモを準備する</h4>
            <p>いつから症状があるか、どのような時に痛むか等をメモしておくと、診察がスムーズです。</p>
          </div>
          <div className="tip-card">
            <h4>保険証を持参する</h4>
            <p>健康保険証があると、診療費の自己負担が少なくなります。</p>
          </div>
          <div className="tip-card">
            <h4>定期検診を活用する</h4>
            <p>6か月ごとの定期検診で、早期の虫歯や歯周病が発見できます。</p>
          </div>
          <div className="tip-card">
            <h4>応急処置の知識</h4>
            <p>受診までの間、冷たい物で冷やすなどの応急処置が痛みを軽減できます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
