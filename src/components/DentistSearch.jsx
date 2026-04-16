import { useState } from 'react';
import { dentists } from '../data/dentists';
import '../styles/DentistSearch.css';

export default function DentistSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [sortBy, setSortBy] = useState('distance');

  // 全ての専門分野を収集
  const allSpecialties = Array.from(
    new Set(dentists.flatMap(d => d.specialties))
  );

  // フィルタリングと検索
  let filteredDentists = dentists.filter((dentist) => {
    const matchesSearch = 
      dentist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dentist.address.includes(searchTerm);
    
    const matchesSpecialty = 
      filterSpecialty === '' || 
      dentist.specialties.includes(filterSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  // ソート
  if (sortBy === 'distance') {
    filteredDentists.sort((a, b) => {
      const distA = parseFloat(a.distance);
      const distB = parseFloat(b.distance);
      return distA - distB;
    });
  } else if (sortBy === 'rating') {
    filteredDentists.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'reviews') {
    filteredDentists.sort((a, b) => b.reviews - a.reviews);
  }

  return (
    <div className="dentist-search-container">
      <h1>🔍 近所の歯医者検索</h1>
      
      {/* 検索バー */}
      <div className="search-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="歯医者の名前または住所で検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>専門分野で絞り込み</label>
            <select 
              value={filterSpecialty} 
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="filter-select"
            >
              <option value="">すべて</option>
              {allSpecialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>ソート順</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="distance">距離が近い順</option>
              <option value="rating">評価が高い順</option>
              <option value="reviews">レビュー数が多い順</option>
            </select>
          </div>
        </div>
      </div>

      {/* 検索結果数 */}
      <div className="search-results-count">
        {filteredDentists.length}件の歯医者が見つかりました
      </div>

      {/* 検索結果 */}
      <div className="dentist-list">
        {filteredDentists.length > 0 ? (
          filteredDentists.map((dentist) => (
            <div key={dentist.id} className="dentist-card">
              <div className="dentist-header">
                <h3>{dentist.name}</h3>
                <div className="rating-badge">
                  ⭐ {dentist.rating} ({dentist.reviews}件)
                </div>
              </div>

              <div className="dentist-info">
                <div className="info-row">
                  <span className="info-label">📍 住所:</span>
                  <span>{dentist.address}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📞 電話:</span>
                  <span>{dentist.phone}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">⏰ 診療時間:</span>
                  <span>{dentist.hours}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📏 距離:</span>
                  <span className="distance">{dentist.distance}</span>
                </div>
              </div>

              <div className="specialties">
                {dentist.specialties.map((specialty) => (
                  <span key={specialty} className="specialty-tag">
                    {specialty}
                  </span>
                ))}
              </div>

              <button className="contact-button">
                電話で予約
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            検索条件に合う歯医者が見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
}
