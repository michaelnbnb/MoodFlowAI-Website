// 多语言配置
const translations = {
    'zh-CN': {
        'nav.features': '功能特色',
        'nav.download': '立即下载',
        'hero.title': '心情流AI - 你的智能健康与心情管家!',
        'hero.subtitle': '还在为忘记喝水而烦恼？想记录心情却懒得写长篇日记？拍照后不知道配什么文字？心情流AI来帮你！',
        'hero.download': '立即下载',
        'hero.learn_more': '了解更多',
        'features.title': '三大核心功能',
        'features.water.title': '喝水提醒 · 趣味养成',
        'features.water.description': '像照顾植物一样照顾自己！设定喝水目标，每次喝水都能"浇灌"你的专属植物，看着它茁壮成长，让健康习惯变得超有趣！',
        'features.diary.title': '极速心情日记',
        'features.diary.description': '1秒记录心情！点击表情（自带金句）、添加图片/语音/文字，轻松完成日记。再忙也能坚持记录，留住每一天的精彩瞬间！',
        'features.ai.title': 'AI 看图说话',
        'features.ai.description': '拍照就能自动生成走心文案！无论是发朋友圈还是写日记，AI 帮你搞定配文，让你的分享更有温度',
        'preview.title': '应用预览',
        'preview.water.title': '趣味喝水提醒',
        'preview.diary.title': '极速心情日记',
        'preview.ai.title': 'AI智能配文',
        'download.title': '立即下载体验',
        'download.subtitle': '简单 · 有趣 · 智能',
        'download.app_store_text': '下载于',
        'download.app_store_name': 'App Store',
        'download.qr': '扫码下载',
        'download.note': '目前仅支持 iOS 系统，Android 版本敬请期待',
        'footer.support': '技术支持',
        'footer.privacy': '隐私政策',
        'footer.terms': '使用条款',
        'footer.copyright': '© 2024 MoodFlowAI. 保留所有权利。'
    },
    'zh-TW': {
        'nav.features': '功能特色',
        'nav.download': '立即下載',
        'hero.title': '心情流AI - 你的智能健康與心情管家!',
        'hero.subtitle': '還在為忘記喝水而煩惱？想記錄心情卻懶得寫長篇日記？拍照後不知道配什麼文字？心情流AI來幫你！',
        'hero.download': '立即下載',
        'hero.learn_more': '了解更多',
        'features.title': '三大核心功能',
        'features.water.title': '喝水提醒 · 趣味養成',
        'features.water.description': '像照顧植物一樣照顧自己！設定喝水目標，每次喝水都能"澆灌"你的專屬植物，看著它茁壯成長，讓健康習慣變得超有趣！',
        'features.diary.title': '極速心情日記',
        'features.diary.description': '1秒記錄心情！點擊表情（自帶金句）、添加圖片/語音/文字，輕鬆完成日記。再忙也能堅持記錄，留住每一天的精彩瞬間！',
        'features.ai.title': 'AI 看圖說話',
        'features.ai.description': '拍照就能自動生成走心文案！無論是發朋友圈還是寫日記，AI 幫你搞定配文，讓你的分享更有溫度',
        'preview.title': '應用預覽',
        'preview.water.title': '趣味喝水提醒',
        'preview.diary.title': '極速心情日記',
        'preview.ai.title': 'AI智能配文',
        'download.title': '立即下載體驗',
        'download.subtitle': '簡單 · 有趣 · 智能',
        'download.app_store_text': '下載於',
        'download.app_store_name': 'App Store',
        'download.qr': '掃碼下載',
        'download.note': '目前僅支持 iOS 系統，Android 版本敬請期待',
        'footer.support': '技術支持',
        'footer.privacy': '隱私政策',
        'footer.terms': '使用條款',
        'footer.copyright': '© 2024 MoodFlowAI. 保留所有權利。'
    },
    'en': {
        'nav.features': 'Features',
        'nav.download': 'Download',
        'hero.title': 'MoodFlowAI - Your Smart Health & Mood Manager!',
        'hero.subtitle': 'Tired of forgetting to drink water? Want to journal but too lazy to write long entries? Don\'t know what to caption your photos? MoodFlowAI is here to help!',
        'hero.download': 'Download Now',
        'hero.learn_more': 'Learn More',
        'features.title': 'Three Core Features',
        'features.water.title': 'Water Reminder · Fun Cultivation',
        'features.water.description': 'Take care of yourself like caring for a plant! Set water goals, "water" your exclusive plant with every drink, watch it grow, and make healthy habits super fun!',
        'features.diary.title': 'Quick Mood Journal',
        'features.diary.description': 'Record your mood in 1 second! Click emotions (with built-in quotes), add images/audio/text, and easily complete your journal. Stay consistent even when busy!',
        'features.ai.title': 'AI Photo Caption',
        'features.ai.description': 'Generate heartfelt captions from photos automatically! Whether for social media or journaling, AI helps you create meaningful content effortlessly',
        'preview.title': 'App Preview',
        'preview.water.title': 'Fun Water Reminder',
        'preview.diary.title': 'Quick Mood Journal',
        'preview.ai.title': 'AI Smart Caption',
        'download.title': 'Download Now',
        'download.subtitle': 'Simple · Fun · Smart',
        'download.app_store_text': 'Download on the',
        'download.app_store_name': 'App Store',
        'download.qr': 'Scan to Download',
        'download.note': 'Currently available for iOS only, Android version coming soon',
        'footer.support': 'Support',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.copyright': '© 2024 MoodFlowAI. All rights reserved.'
    }
};

// 当前语言
let currentLang = 'zh-CN';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-HK')) {
        currentLang = 'zh-TW';
    } else if (browserLang.startsWith('en')) {
        currentLang = 'en';
    }
    
    // 应用语言
    applyLanguage(currentLang);
    
    // 绑定语言切换事件
    bindLanguageSwitcher();
    
    // 绑定滚动动画
    bindScrollAnimations();
    
    // 绑定平滑滚动
    bindSmoothScroll();
});

// 应用语言
function applyLanguage(lang) {
    currentLang = lang;
    
    // 更新HTML lang属性
    document.documentElement.lang = lang;
    
    // 更新页面标题
    const titles = {
        'zh-CN': 'MoodFlowAI - 你的智能健康与心情管家',
        'zh-TW': 'MoodFlowAI - 你的智能健康與心情管家',
        'en': 'MoodFlowAI - Your Smart Health & Mood Manager'
    };
    document.title = titles[lang];
    
    // 更新所有带有data-i18n属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            // 更新下拉按钮显示的语言
            const langText = document.querySelector('.lang-text');
            if (langText) {
                langText.textContent = btn.textContent;
            }
        }
    });
    
    // 更新隐私政策链接
    const privacyLink = document.querySelector('a[data-i18n="footer.privacy"]');
    if (privacyLink) {
        const privacyUrls = {
            'zh-CN': 'privacy-zh.html',
            'zh-TW': 'privacy-tw.html',
            'en': 'privacy-en.html'
        };
        privacyLink.href = privacyUrls[lang] || 'privacy-en.html';
    }
    
    // 更新技术支持链接
    const supportLink = document.querySelector('a[data-i18n="footer.support"]');
    if (supportLink) {
        const supportUrls = {
            'zh-CN': 'support-zh.html',
            'zh-TW': 'support-tw.html',
            'en': 'support-en.html'
        };
        supportLink.href = supportUrls[lang] || 'support-en.html';
    }
}

// 绑定语言切换事件
function bindLanguageSwitcher() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const langText = document.querySelector('.lang-text');
    
    // 切换下拉菜单显示/隐藏
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
    
    // 语言选择事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            const langName = this.textContent;
            
            // 更新显示的语言
            langText.textContent = langName;
            
            // 应用语言
            applyLanguage(lang);
            
            // 关闭下拉菜单
            dropdown.classList.remove('active');
        });
    });
}

// 绑定滚动动画
function bindScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 添加动画类到需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .preview-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 绑定平滑滚动
function bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 移动端菜单切换（如果需要）
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 图片懒加载
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 页面加载完成后执行懒加载
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}