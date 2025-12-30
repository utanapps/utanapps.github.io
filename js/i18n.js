// Internationalization (i18n) Module
const translations = {
    en: {
        'boot.init': 'Initializing system...',
        'boot.load': 'Loading neural networks...',
        'boot.check': 'Running security checks...',
        'boot.ready': 'System ready.',
        'main.greeting': 'cat welcome.txt',
        'section.about': '// ABOUT',
        'section.projects': '// PROJECTS',
        'section.tech': '// TECHNOLOGY STACK',
        'section.contact': '// CONTACT',
        'about.text': 'Welcome to UTANA LABS - where innovation meets technology. We specialize in cutting-edge mobile applications and AI-driven solutions.',
        'project.yuk.title': 'YÜK Mobile App',
        'project.yuk.desc': 'Advanced mobile solutions for modern transportation',
        'project.ai.title': 'AI Assistant Framework',
        'project.ai.desc': 'Next-gen AI solutions for businesses',
        'project.blockchain.title': 'Blockchain Integration',
        'project.blockchain.desc': 'Secure and transparent transaction systems',
        'tech.mobile': 'Mobile Development',
        'tech.backend': 'Backend & Cloud',
        'tech.ai': 'AI & Machine Learning',
        'contact.status': 'AVAILABLE FOR PROJECTS'
    },
    tr: {
        'boot.init': 'Sistem başlatılıyor...',
        'boot.load': 'Sinir ağları yükleniyor...',
        'boot.check': 'Güvenlik kontrolleri yapılıyor...',
        'boot.ready': 'Sistem hazır.',
        'main.greeting': 'cat hosgeldiniz.txt',
        'section.about': '// HAKKINDA',
        'section.projects': '// PROJELER',
        'section.tech': '// TEKNOLOJİ YIĞINI',
        'section.contact': '// İLETİŞİM',
        'about.text': 'UTANA LABS\'a hoş geldiniz - inovasyonun teknolojiyle buluştuğu yer. Yenilikçi mobil uygulamalar ve yapay zeka destekli çözümlerde uzmanız.',
        'project.yuk.title': 'YÜK Mobil Uygulama',
        'project.yuk.desc': 'Modern ulaşım için gelişmiş mobil çözümler',
        'project.ai.title': 'Yapay Zeka Asistan Çerçevesi',
        'project.ai.desc': 'İşletmeler için yeni nesil yapay zeka çözümleri',
        'project.blockchain.title': 'Blockchain Entegrasyonu',
        'project.blockchain.desc': 'Güvenli ve şeffaf işlem sistemleri',
        'tech.mobile': 'Mobil Geliştirme',
        'tech.backend': 'Backend & Bulut',
        'tech.ai': 'Yapay Zeka & Makine Öğrenmesi',
        'contact.status': 'PROJELER İÇİN MÜSAİT'
    },
    ja: {
        'boot.init': 'システムを初期化しています...',
        'boot.load': 'ニューラルネットワークを読み込んでいます...',
        'boot.check': 'セキュリティチェックを実行しています...',
        'boot.ready': 'システム準備完了。',
        'main.greeting': 'cat ようこそ.txt',
        'section.about': '// について',
        'section.projects': '// プロジェクト',
        'section.tech': '// テクノロジースタック',
        'section.contact': '// お問い合わせ',
        'about.text': 'UTANA LABSへようこそ - イノベーションとテクノロジーが出会う場所。最先端のモバイルアプリケーションとAI駆動ソリューションを専門としています。',
        'project.yuk.title': 'YÜKモバイルアプリ',
        'project.yuk.desc': '現代の交通のための高度なモバイルソリューション',
        'project.ai.title': 'AIアシスタントフレームワーク',
        'project.ai.desc': 'ビジネス向け次世代AIソリューション',
        'project.blockchain.title': 'ブロックチェーン統合',
        'project.blockchain.desc': '安全で透明な取引システム',
        'tech.mobile': 'モバイル開発',
        'tech.backend': 'バックエンド & クラウド',
        'tech.ai': 'AI & 機械学習',
        'contact.status': 'プロジェクト受付中'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    updateContent();
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        if (translation) {
            element.textContent = translation;
        }
    });
}

function initI18n() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
    
    // Add event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}