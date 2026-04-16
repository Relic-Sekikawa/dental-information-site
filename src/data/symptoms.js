export const symptoms = [
  {
    id: 1,
    name: '虫歯',
    description: '歯質が侵食され、穴が開いた状態',
    severity: 'low',
    treatmentDuration: '1-3日',
    details: '軽度の虫歯の場合、1回から2回の治療で完治させることが可能です。',
    shouldVisit: true
  },
  {
    id: 2,
    name: '歯周病',
    description: '歯の周りの組織（歯肉、歯槽骨）が炎症した状態',
    severity: 'high',
    treatmentDuration: '1-3か月',
    details: '定期的な診察と治療が必要です。放置すると歯が失われる可能性があります。',
    shouldVisit: true
  },
  {
    id: 3,
    name: '口内炎',
    description: '口の中の粘膜に炎症が生じた状態',
    severity: 'low',
    treatmentDuration: '1-2週間',
    details: 'ほとんどの場合自然に治癒します。痛みが強い場合は薬を処方してもらえます。',
    shouldVisit: false
  },
  {
    id: 4,
    name: '歯肉炎',
    description: '歯肉（歯茎）が腫れて赤くなった状態',
    severity: 'medium',
    treatmentDuration: '1-2週間',
    details: 'ブラッシング指導と軽度の治療で改善します。',
    shouldVisit: true
  },
  {
    id: 5,
    name: '歯根膜炎',
    description: '歯の根周りの組織が炎症した状態',
    severity: 'high',
    treatmentDuration: '1-2週間',
    details: '強い痛みを伴う場合が多いです。早急な治療が必要です。',
    shouldVisit: true
  },
  {
    id: 6,
    name: '神経痛',
    description: '三叉神経の痛みが歯周辺で起こる状態',
    severity: 'medium',
    treatmentDuration: '数か月',
    details: '原因特定のために検査が必要です。',
    shouldVisit: true
  },
  {
    id: 7,
    name: '歯の知覚過敏',
    description: '温かいまたは冷たい刺激で突発的に起こる歯の痛み',
    severity: 'low',
    treatmentDuration: '1-2週間',
    details: '通常、歯を磨く方法や食生活の改善で改善します。',
    shouldVisit: false
  },
  {
    id: 8,
    name: '歯の欠損',
    description: '歯が欠けたり、一部が欠損した状態',
    severity: 'high',
    treatmentDuration: '1-2週間',
    details: '義歯やブリッジなどの治療が必要です。',
    shouldVisit: true
  }
];

export const whenToVisitDoctor = [
  {
    id: 1,
    symptom: '歯が痛くて眠れない',
    recommendation: '緊急に受診してください',
    description: '歯の痛みが強く、生活に支障をきたしている場合は、できるだけ早く歯科医院を受診してください。',
    urgency: 'urgent'
  },
  {
    id: 2,
    symptom: '物が噛めない、生硬い食べ物が食べられない',
    recommendation: '1-2日以内に受診してください',
    description: '歯の機能が低下している状態です。早めの治療が虫歯の進行を防ぎます。',
    urgency: 'high'
  },
  {
    id: 3,
    symptom: '歯肉からの出血が続く',
    recommendation: '1週間以内に受診してください',
    description: '歯周病の初期症状の可能性があります。ブラッシング時の出血が続く場合は訪問してください。',
    urgency: 'high'
  },
  {
    id: 4,
    symptom: '歯が動いている、グラグラしている',
    recommendation: '至急受診してください',
    description: '歯が抜け落ちる可能性があります。できるだけ早く歯科医院を受診してください。',
    urgency: 'urgent'
  },
  {
    id: 5,
    symptom: '口臭が強くなった',
    recommendation: '1-2週間以内に受診してください',
    description: '歯周病や虫歯が原因の場合があります。改善しない場合は受診してください。',
    urgency: 'medium'
  },
  {
    id: 6,
    symptom: 'ブラッシング時に痛みを感じる',
    recommendation: '1-2週間以内に受診してください',
    description: '知覚過敏や虫歯の初期症状の可能性があります。',
    urgency: 'medium'
  },
  {
    id: 7,
    symptom: '特に症状がないが、定期検診を受けたい',
    recommendation: '3-6か月ごとに受診してください',
    description: '定期检診は虫歯と歯周病の早期発見に役立ちます。',
    urgency: 'low'
  },
  {
    id: 8,
    symptom: '歯が欠けた、折れた',
    recommendation: '24時間以内に受診してください',
    description: '歯が欠けた場合、できるだけ早く処置を受けてください。欠けた歯のピースがあれば持参してください。',
    urgency: 'urgent'
  }
];
