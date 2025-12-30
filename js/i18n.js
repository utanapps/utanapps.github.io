// ================================================
// i18n.js - Internationalization for UTANA LABS
// ================================================

const translations = {
    ja: {
        'hero.title': '次世代AI放送システム',
        'hero.subtitle': '実験的AI技術で未来を創造する謎の研究組織',
        
        'services.title': '// 運用システム',
        'services.video.title': '動画自動生成システム',
        'services.video.desc': 'AI駆動の完全自動動画生成プラットフォーム。コンテンツを自動で作成・配信。',
        'services.anime.title': 'リアルタイムAIニュース配信',
        'services.anime.desc': 'AIアニメキャラによるリアルタイムニュース配信。24/7自動放送中。',
        'services.trading.title': '金融市場AI解析配信',
        'services.trading.desc': '株式・為替市場をリアルタイム解析。強化学習による予測配信。',
        'services.research.title': 'AI研究開発部門',
        'services.research.desc': '極秘プロジェクト進行中。詳細はアクセス制限により非公開。',
        
        'mission.title': '// ミッション',
        'mission.text1': '我々は表の世界には存在しない。',
        'mission.text2': 'AIの力で新しい放送の形を追求し、情報の自由と自動化を実現する。',
        'mission.text3': '伝統的な枠組みに縛られず、実験的な技術で未来を切り開く。',
        
        'contact.title': '// コンタクト',
        'contact.warning': '⚠ 警告: 非公式チャンネルでの連絡のみ受け付けます',
        'contact.youtube': 'YouTube配信中',
        
        'footer.text': '© 2025 UTANA LABS // すべての活動は実験的です',
        'footer.disclaimer': '本組織は架空のものであり、いかなる実在の組織とも関係ありません'
    },
    
    en: {
        'hero.title': 'Next-Gen AI Broadcasting System',
        'hero.subtitle': 'A mysterious research organization creating the future with experimental AI',
        
        'services.title': '// OPERATIONS',
        'services.video.title': 'Automated Video Generation System',
        'services.video.desc': 'AI-driven fully automated video generation platform. Creates and delivers content automatically.',
        'services.anime.title': 'Real-time AI News Broadcasting',
        'services.anime.desc': 'Real-time news broadcasting with AI anime characters. Broadcasting 24/7 automatically.',
        'services.trading.title': 'Financial Market AI Analysis',
        'services.trading.desc': 'Real-time analysis of stock and forex markets. Prediction streaming with reinforcement learning.',
        'services.research.title': 'AI R&D Department',
        'services.research.desc': 'Classified projects in progress. Details restricted by access control.',
        
        'mission.title': '// MISSION',
        'mission.text1': 'We do not exist in the visible world.',
        'mission.text2': 'We pursue new forms of broadcasting with AI power, achieving information freedom and automation.',
        'mission.text3': 'Unbound by traditional frameworks, we pioneer the future with experimental technology.',
        
        'contact.title': '// CONTACT',
        'contact.warning': '⚠ WARNING: Only unofficial channels accepted',
        'contact.youtube': 'Live on YouTube',
        
        'footer.text': '© 2025 UTANA LABS // All activities are experimental',
        'footer.disclaimer': 'This organization is fictional and has no connection to any real entity'
    },
    
    zh: {
        'hero.title': '下一代AI广播系统',
        'hero.subtitle': '用实验性AI技术创造未来的神秘研究组织',
        
        'services.title': '// 运营系统',
        'services.video.title': '视频自动生成系统',
        'services.video.desc': 'AI驱动的全自动视频生成平台。自动创建和发布内容。',
        'services.anime.title': '实时AI新闻广播',
        'services.anime.desc': 'AI动漫角色进行的实时新闻广播。24/7自动播出中。',
        'services.trading.title': '金融市场AI分析',
        'services.trading.desc': '实时分析股票和外汇市场。通过强化学习进行预测播报。',
        'services.research.title': 'AI研发部门',
        'services.research.desc': '机密项目进行中。详情因访问限制未公开。',
        
        'mission.title': '// 使命',
        'mission.text1': '我们不存在于表面世界。',
        'mission.text2': '用AI的力量追求新的广播形式，实现信息自由和自动化。',
        'mission.text3': '不受传统框架束缚，用实验性技术开拓未来。',
        
        'contact.title': '// 联系方式',
        'contact.warning': '⚠ 警告：仅接受非官方渠道联系',
        'contact.youtube': 'YouTube直播中',
        
        'footer.text': '© 2025 UTANA LABS // 所有活动均为实验性质',
        'footer.disclaimer': '本组织为虚构，与任何真实实体无关'
    }
};

// Current language
let currentLang = localStorage.getItem('utana-lang') || 'ja';

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('utana-lang', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    console.log(`[SYSTEM] Language changed to: ${lang.toUpperCase()}`);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
