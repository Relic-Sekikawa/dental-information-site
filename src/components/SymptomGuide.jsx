import { useState } from 'react';
import { symptoms } from '../data/symptoms';
import '../styles/SymptomGuide.css';

export default function SymptomGuide() {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low':
        return '#4CAF50';
      case 'medium':
        return '#FFC107';
      case 'high':
        return '#F44336';
      default:
        return '#999';
    }
  };

  const getSeverityLabel = (severity) => {
    switch (severity) {
      case 'low':
        return '軽度';
      case 'medium':
        return '中程度';
      case 'high':
        return '重度';
      default:
        return '不明';
    }
  };

  return (
    <div className="symptom-guide-container">
      <h1>🦷 症状別治療期間ガイド</h1>
      <p className="guide-description">
        あなたの歯の症状に応じた治療期間の目安をご紹介します。
      </p>

      <div className="symptoms-grid">
        {symptoms.map((symptom) => (
          <div
            key={symptom.id}
            className="symptom-card"
            onClick={() => setSelectedSymptom(selectedSymptom?.id === symptom.id ? null : symptom)}
            style={{
              borderLeft: `4px solid ${getSeverityColor(symptom.severity)}`
            }}
          >
            <div className="symptom-header">
              <h3>{symptom.name}</h3>
              <span
                className="severity-badge"
                style={{ backgroundColor: getSeverityColor(symptom.severity) }}
              >
                {getSeverityLabel(symptom.severity)}
              </span>
            </div>
            <p className="symptom-description">{symptom.description}</p>
            <div className="treatment-duration">
              <strong>治療期間の目安: </strong>
              {symptom.treatmentDuration}
            </div>

            {selectedSymptom?.id === symptom.id && (
              <div className="symptom-details">
                <hr />
                <p>{symptom.details}</p>
                {symptom.shouldVisit && (
                  <div className="visit-recommendation">
                    ⚠️ この症状が見られたら歯医者に相談してください
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="guide-notes">
        <h3>注意事項</h3>
        <ul>
          <li>治療期間は目安です。実際の期間は症状の程度や個人差により変わる場合があります。</li>
          <li>複数の症状が見られる場合は、治療期間が延長する可能性があります。</li>
          <li>定期的な診察を受けることで、症状の早期発見と治療ができます。</li>
          <li>症状が重い場合は、できるだけ早く歯科医院を受診してください。</li>
        </ul>
      </div>
    </div>
  );
}
