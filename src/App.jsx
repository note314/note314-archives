import { useState } from 'react'

// Menu items configuration
const menuItems = [
  { id: 'install', icon: '📱', label: 'アプリとしてインストール', type: 'action' },
  { id: 'disclaimer', icon: '⚖️', label: '免責事項', type: 'modal' },
  { id: 'credit', icon: '©', label: 'クレジット', type: 'modal' }
];

// Sample data according to specifications
const toolsData = [
  // Tools (3点)
  {
    id: "001",
    category: "Showcase",
    title: "入眠サポート",
    fullTitle: "安眠４７８",
    description: "4-7-8呼吸法をはじめ、4-4-4-4呼吸法などをサポートする４セクションのカウントダウンをループするタイマーアプリ。吸う、止める、吐く、休憩を自分に合った秒数に調整できます。入眠、リラックス、集中力をあげるなど様々な用途で使用できます。",
    toolType: "インストール対応PWA",
    url: "https://note314.github.io/anmin478/",
    icon: "/note314-archives/images/icons/tool-001.png",
    thumbnail: "/note314-archives/images/thumbnails/tool-001.png",
    notice: null
  },
  {
    id: "002",
    category: "Tools",
    title: "行動できない10の特徴",
    fullTitle: "実践ワーク 特典資料",
    description: "行動できない自分を変える10のチェックポイント。尻込みしている気持ちをほぐして一歩を踏み出すための初級編。印刷して講義レジュメに、またはリンクをシェアして特典ワークとして使うことを想定しています。",
    toolType: "Webサイト",
    url: "https://note314.github.io/BusinessGuide/",
    icon: "📋",
    thumbnail: "/note314-archives/images/thumbnails/tool-002.png",
    notice: null
  },
  {
    id: "003",
    category: "Tools",
    title: "BtoC LPテンプレ",
    fullTitle: "BtoC LPテンプレート",
    description: "売上があがるLPテンプレート。BtoCは感覚的な訴求が強く、限定性など突発的な消費行動に焦点を当てている。従来型の王道LPで、記載する情報を集めていくと自然にマーケティングが進む地図としても使用可能。",
    toolType: "Webサイト",
    url: "https://note314.github.io/stack4html/b2c_lp_template.html",
    icon: "📋",
    thumbnail: "/note314-archives/images/thumbnails/tool-003.png",
    notice: "PCとスマホでレイアウトが変わります！"
  },
  
  // Insights (1点)
  {
    id: "004",
    category: "Tools",
    title: "BtoB LPテンプレ",
    fullTitle: "BtoB LPテンプレート",
    description: "売上があがるLPテンプレート。BtoBはエビデンスや費用対効果をアピールしていてロジカル。比較検討をしやすく、稟議などで強くデザインされている。従来型の王道LPで、記載する情報を集めていくと自然にマーケティングが進む地図としても使用可能。",
    toolType: "Webサイト",
    url: "https://note314.github.io/stack4html/lp_b2b_html.html",
    icon: "📋",
    thumbnail: "/note314-archives/images/thumbnails/tool-004.png",
    notice: "PCとスマホでレイアウトが変わります！"
  },
  {
    id: "005",
    category: "Insights",
    title: "認知バイアス入門",
    fullTitle: "思考のクセを味方にする",
    description: "誰もが持つ思考や判断能力に関するクセであるバイアス。先入観や偏見とも言われるが、うまく付き合うことでビジネスや日常をもっと豊かに過ごせるようになる。",
    toolType: "Webサイト", 
    url: "https://note314.github.io/stack4html/bias_learning_elemental.html",
    icon: "💭",
    thumbnail: "/note314-archives/images/thumbnails/tool-005.png",
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

// Hamburger menu component
function HamburgerMenu({ isOpen, onToggle, onMenuAction }) {
  const handleMenuClick = (item) => {
    onMenuAction(item);
    if (item.type !== 'action') {
      onToggle(); // Close menu after selection (except for actions)
    }
  };

  return (
    <>
      <button className="hamburger-button" onClick={onToggle}>
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
      </button>
      
      {isOpen && (
        <div className="menu-overlay" onClick={onToggle}>
          <div className="menu-container" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Menu</h3>
              <button className="menu-close" onClick={onToggle}>×</button>
            </div>
            <div className="menu-items">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="menu-item"
                  onClick={() => handleMenuClick(item)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Info modal component
function InfoModal({ type, onClose }) {
  if (!type) return null;

  const getModalContent = () => {
    switch (type) {
      case 'disclaimer':
        return {
          title: '免責事項',
          content: (
            <div>
              <p>本サイトで提供するツールやコンテンツは、情報提供のみを目的としています。</p>
              <p>利用者が本サイトの情報を用いて行う一切の行為について、当サイトは責任を負いません。</p>
              <p>各ツールの利用は自己責任でお願いいたします。</p>
            </div>
          )
        };
      case 'credit':
        return {
          title: 'クレジット',
          content: (
            <div>
              <p><strong>note314:archives</strong></p>
              <p>© 2025 note314</p>
              <p>All rights reserved.</p>
              <br />
              <p>本サイトのデザイン、コンテンツ、およびツールの著作権は note314 に帰属します。</p>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getModalContent();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{title}</h2>
        <div className="info-modal-content">{content}</div>
        <div className="modal-actions">
          <button className="modal-button" onClick={onClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}

// Tool card component
function ToolCard({ tool, onClick }) {
  const isImageIcon = tool.icon.startsWith('/') || tool.icon.startsWith('http');
  
  const handleImageError = (e) => {
    console.error('Icon image failed to load:', tool.icon);
    // フォールバック: 絵文字アイコンに変更
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = '🔧';
  };
  
  return (
    <div className="tool-card" onClick={() => onClick(tool)}>
      <div className="tool-card-icon-bg">
        <div className="tool-card-icon">
          {isImageIcon ? (
            <img 
              src={tool.icon} 
              alt="" 
              onError={handleImageError}
              onLoad={() => console.log('Icon loaded:', tool.icon)}
            />
          ) : (
            tool.icon
          )}
        </div>
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
          <div className="modal-icon">
            {tool.icon.startsWith('/') || tool.icon.startsWith('http') ? (
              <img src={tool.icon} alt={tool.title} />
            ) : (
              tool.icon
            )}
          </div>
          <div className="modal-thumbnail">
            {tool.thumbnail ? (
              <img src={tool.thumbnail} alt="プレビュー" />
            ) : (
              "プレビュー"
            )}
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

// Tool section component
function ToolSection({ category, tools, onCardClick }) {
  const sortedTools = tools.sort((a, b) => a.id.localeCompare(b.id));
  
  return (
    <section className="tool-section">
      <h2 className="section-title">{category}</h2>
      <div className="tools-grid">
        {sortedTools.map((tool) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(null);

  const handleCardClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuAction = (item) => {
    switch (item.id) {
      case 'install':
        // PWA install logic will be implemented later
        alert('インストール機能は準備中です');
        setMenuOpen(false);
        break;
      case 'disclaimer':
      case 'credit':
        setInfoModal(item.id);
        break;
      default:
        break;
    }
  };

  const handleInfoModalClose = () => {
    setInfoModal(null);
  };

  // Group tools by category
  const groupByCategory = (tools) => {
    return tools.reduce((groups, tool) => {
      const category = tool.category;
      if (!groups[category]) groups[category] = [];
      groups[category].push(tool);
      return groups;
    }, {});
  };

  const groupedTools = groupByCategory(toolsData);
  const categoryOrder = ['Tools', 'Insights', 'Showcase'];

  return (
    <>
      <BackgroundEffects />
      
      <HamburgerMenu 
        isOpen={menuOpen}
        onToggle={handleMenuToggle}
        onMenuAction={handleMenuAction}
      />
      
      <div className="container">
        <header className="header">
          <h1 className="main-title">note314:archives</h1>
          <p className="sub-title">いますぐ役立つツール集</p>
        </header>
        
        {categoryOrder.map(category => (
          groupedTools[category] && (
            <ToolSection 
              key={category}
              category={category}
              tools={groupedTools[category]}
              onCardClick={handleCardClick}
            />
          )
        ))}
      </div>
      
      {selectedTool && (
        <Modal 
          tool={selectedTool} 
          onClose={handleCloseModal}
        />
      )}
      
      {infoModal && (
        <InfoModal 
          type={infoModal}
          onClose={handleInfoModalClose}
        />
      )}
    </>
  );
}

export default App