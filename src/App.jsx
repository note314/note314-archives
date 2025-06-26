import { useState } from 'react'

// Sample data according to specifications
const toolsData = [
  // Tools (3点)
  {
    id: "001",
    category: "Tools",
    title: "顧客データ分析",
    fullTitle: "顧客データ分析テンプレート",
    description: "Excelベースの顧客データ分析テンプレート。購買履歴、デモグラフィック情報、行動パターンを統合的に分析し、セグメンテーションやLTV予測が可能。営業戦略立案やマーケティング施策の効果測定に活用できます。小売業、サービス業での顧客理解を深める際に特に有効で、データドリブンな意思決定をサポートします。",
    toolType: "Webツール",
    url: "https://example.com/customer-analysis",
    icon: "📊",
    notice: null
  },
  {
    id: "002",
    category: "Tools",
    title: "提案書テンプレート",
    fullTitle: "コンサル提案書テンプレート",
    description: "プロフェッショナルなコンサルティング提案書のPowerPointテンプレート。課題設定から解決策提示、投資対効果まで論理的に構成された提案フローを提供。クライアントの意思決定を促進する説得力のあるストーリーテリング手法を内包。新規案件獲得率向上を目指すコンサルタント、営業担当者に最適です。",
    toolType: "Webサイト",
    url: "https://example.com/proposal-template",
    icon: "📋",
    notice: null
  },
  {
    id: "003",
    category: "Tools",
    title: "ROI計算ツール",
    fullTitle: "投資対効果計算ツール",
    description: "IT投資、マーケティング施策、人材投資などの投資対効果を正確に算出するWebツール。NPV、IRR、回収期間を自動計算し、複数案件の比較分析が可能。経営判断に必要な財務指標を視覚的に表示し、ステークホルダーへの説明資料も自動生成。予算策定や投資意思決定の精度向上に貢献します。",
    toolType: "Webツール",
    url: "https://example.com/roi-calculator",
    icon: "🧮",
    notice: null
  },
  
  // Insights (2点)
  {
    id: "004",
    category: "Insights",
    title: "AI活用マニュアル",
    fullTitle: "ChatGPT業務活用マニュアル",
    description: "ChatGPTを業務で効果的に活用するための実践的ガイド。プロンプトエンジニアリングの基礎から、文書作成、データ分析、アイデア創出まで具体的な活用事例を豊富に収録。セキュリティ配慮事項や運用ルールも詳説し、組織導入時のベストプラクティスを提示。AI時代の業務効率化を実現するための必携リソースです。",
    toolType: "Webサイト",
    url: "https://example.com/ai-manual",
    icon: "🤖",
    notice: "初回利用時は設定が必要です"
  },
  {
    id: "005",
    category: "Insights",
    title: "論理思考フレーム",
    fullTitle: "論理思考フレームワーク集",
    description: "問題解決に必要な論理思考フレームワークを体系的にまとめた実践ガイド。ロジックツリー、MECE、帰納法・演繹法から、ピラミッドストラクチャー、仮説思考まで幅広くカバー。各フレームワークの使い分け方法と実際のビジネス場面での適用例を詳細解説。コンサルタント、企画職、管理職に必須の思考技術を習得できます。",
    toolType: "Webサイト", 
    url: "https://example.com/logic-framework",
    icon: "💭",
    notice: null
  },
  
  // Showcase (3点)
  {
    id: "006",
    category: "Showcase",
    title: "予算管理アプリ",
    fullTitle: "プロジェクト予算管理PWA",
    description: "プロジェクトの予算管理に特化したPWAアプリケーション。リアルタイムでの予実管理、コスト分析、予算推移の可視化機能を提供。複数プロジェクトの横断的な予算統制が可能で、アラート機能により予算超過リスクを早期発見。オフライン対応により現場でも利用可能な実用性の高いプロジェクト管理ツールです。",
    toolType: "PWA対応ツール",
    url: "https://example.com/budget-app",
    icon: "🌐",
    notice: null
  },
  {
    id: "007",
    category: "Showcase",
    title: "売上ダッシュボード",
    fullTitle: "リアルタイム売上ダッシュボード",
    description: "売上データをリアルタイムで可視化するインタラクティブダッシュボード。日次・月次・四半期別の売上推移、商品別・地域別分析、予算対比などを直感的なグラフで表示。ドリルダウン機能により詳細分析が可能で、経営陣への定期報告や営業会議での現状把握に活用。データドリブンな売上管理を実現します。",
    toolType: "Webツール",
    url: "https://example.com/sales-dashboard",
    icon: "📈",
    notice: null
  },
  {
    id: "008",
    category: "Showcase",
    title: "ポートフォリオサイト",
    fullTitle: "コンサル実績ポートフォリオ",
    description: "コンサルティング実績を効果的に紹介するポートフォリオサイト。プロジェクト概要、課題解決プロセス、成果指標を視覚的に整理し、クライアントの信頼獲得をサポート。業界別・機能別での実績検索機能、クライアント推薦文の掲載により提案力を強化。新規顧客開拓や案件受注率向上に貢献するプロフェッショナル向けショーケースです。",
    toolType: "Webサイト",
    url: "https://example.com/portfolio",
    icon: "🎨",
    notice: null
  }
];

// Background effects component
function BackgroundEffects() {
  return (
    <div className="background-effects">
      {/* Data streams */}
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      
      {/* Grid lines */}
      <div className="grid-lines"></div>
    </div>
  );
}

// Tool card component
function ToolCard({ tool, onClick }) {
  return (
    <div className="tool-card" onClick={() => onClick(tool)}>
      <div className="tool-card-icon-bg">
        <div className="tool-card-icon">{tool.icon}</div>
      </div>
      <div className="tool-card-title">{tool.title}</div>
    </div>
  );
}

// Modal component
function Modal({ tool, onClose }) {
  if (!tool) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenTool = () => {
    window.open(tool.url, '_blank');
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(tool.url).then(() => {
      alert('URLをクリップボードにコピーしました');
    });
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">{tool.fullTitle}</h2>
        
        <div className="modal-preview">
          <div className="modal-icon">{tool.icon}</div>
          <div className="modal-thumbnail">
            プレビュー
          </div>
        </div>
        
        <div className="modal-type">{tool.toolType}</div>
        
        <div className="modal-description">{tool.description}</div>
        
        {tool.notice && (
          <div className="modal-notice">
            ⚠️ {tool.notice}
          </div>
        )}
        
        <div className="modal-actions">
          <button className="modal-button" onClick={handleOpenTool}>
            ツールを開く
          </button>
          <button className="modal-copy-button" onClick={handleCopyUrl}>
            🔗
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleCardClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  return (
    <>
      <BackgroundEffects />
      
      <div className="container">
        <header className="header">
          <h1 className="main-title">note314:archives</h1>
          <p className="sub-title">いますぐ役立つツール集</p>
        </header>
        
        <div className="tools-grid">
          {toolsData.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      
      {selectedTool && (
        <Modal 
          tool={selectedTool} 
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App