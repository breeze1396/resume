// 国际化管理
class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = window.translations || {};
    }

    // 检测浏览器语言
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) return 'zh';
        if (browserLang.startsWith('ja')) return 'ja';
        if (browserLang.startsWith('en')) return 'en';
        return 'zh'; // 默认中文
    }

    // 切换语言
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('preferredLang', lang);
            this.updatePageContent();
            this.updateLangButtons();
        }
    }

    // 获取翻译文本
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return value;
    }

    // 获取数组翻译
    tArray(key) {
        const value = this.t(key);
        return Array.isArray(value) ? value : [];
    }

    // 获取对象翻译
    tObject(key) {
        const value = this.t(key);
        return typeof value === 'object' && !Array.isArray(value) ? value : {};
    }

    // 更新页面内容
    updatePageContent() {
        // 更新导航
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // 更新项目页
        this.updateProjectsPage();
        
        // 更新个人页
        this.updateAboutPage();
        
        // 更新未来页
        this.updateFuturePage();
        
        // 更新联系页
        this.updateContactPage();
    }


    // 更新项目页
    updateProjectsPage() {
        const projectsPage = document.getElementById('projects');
        if (!projectsPage) return;

        const title = projectsPage.querySelector('.section-title');
        if (title) title.textContent = this.t('projects.title');

        const projects = ['ecommerce', 'dataViz', 'mobileApp'];
        projects.forEach((project, index) => {
            const card = projectsPage.querySelectorAll('.project-card')[index];
            if (card) {
                const titleEl = card.querySelector('.project-title');
                const descEl = card.querySelector('.project-description');
                if (titleEl) titleEl.textContent = this.t(`projects.${project}.title`);
                if (descEl) descEl.textContent = this.t(`projects.${project}.description`);
            }
        });
    }

    // 更新个人页
    updateAboutPage() {
        const aboutPage = document.getElementById('about');
        if (!aboutPage) return;

        const title = aboutPage.querySelector('.section-title');
        if (title) title.textContent = this.t('about.title');

        // 更新技能标题
        const skillsTitle = aboutPage.querySelector('.about-sidebar h3');
        if (skillsTitle) skillsTitle.textContent = this.t('about.skills');

        // 更新基本信息
        const infoTitle = aboutPage.querySelector('.about-main h3');
        if (infoTitle) infoTitle.textContent = this.t('about.basicInfo');
    }

    // 更新未来页
    updateFuturePage() {
        const futurePage = document.getElementById('future');
        if (!futurePage) return;

        const title = futurePage.querySelector('.section-title');
        if (title) title.textContent = this.t('future.title');

        // 更新标签页按钮
        const tabs = futurePage.querySelectorAll('.tab-btn');
        const tabKeys = ['career', 'life', 'learning', 'interests'];
        tabs.forEach((tab, index) => {
            if (tabKeys[index]) {
                tab.textContent = this.t(`future.tabs.${tabKeys[index]}`);
            }
        });
    }

    // 更新联系页
    updateContactPage() {
        const contactPage = document.getElementById('contact');
        if (!contactPage) return;

        const title = contactPage.querySelector('.section-title');
        if (title) title.textContent = this.t('contact.title');

        const intro = contactPage.querySelector('.contact-intro');
        if (intro) intro.textContent = this.t('contact.intro');
    }

    // 更新语言按钮状态
    updateLangButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 初始化
    init() {
        // 检查本地存储的语言偏好
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }

        this.updatePageContent();
        this.updateLangButtons();
    }
}

// 导出单例到全局作用域（防止被压缩工具重命名）
const i18n = new I18n();
window.i18n = i18n;
