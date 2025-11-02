// 主JavaScript文件
class ResumeApp {
    constructor() {
        this.currentPage = 'home';
        this.mobileMenuOpen = false;
    }

    // 初始化应用
    init() {
        this.setupEventListeners();
        this.showPage('home');
        i18n.init();
        imageLoader.init();
        this.setupScrollEffects();
    }

    // 设置事件监听
    setupEventListeners() {
        // 导航链接
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.showPage(targetId);
                this.closeMobileMenu();
            });
        });

        // Logo点击返回首页
        document.querySelector('.logo').addEventListener('click', () => {
            this.showPage('home');
            this.closeMobileMenu();
        });

        // 移动端菜单按钮
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // 语言切换
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                i18n.setLanguage(lang);
            });
        });

        // 项目卡片点击
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                this.showProjectModal(projectId);
            });
        });

        // 关闭模态框
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeModal();
            });
        });

        // 点击模态框外部关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        });

        // CTA按钮
        document.querySelectorAll('.cta-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const href = btn.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    this.showPage(targetId);
                }
            });
        });

        // 未来规划标签切换
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                this.switchFutureTab(tab);
            });
        });

        // PDF下载按钮
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang') || 'ch';
                this.downloadPDF(lang);
            });
        });

        // ESC键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                this.closeMobileMenu();
            }
        });
    }

    // 显示页面
    showPage(pageId) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
            
            // 更新导航高亮
            this.updateActiveNav(pageId);
            
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // 页面特定初始化
            this.initPage(pageId);
        }
    }

    // 更新导航高亮
    updateActiveNav(activeId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 初始化特定页面
    initPage(pageId) {
        if (pageId === 'about') {
            this.animateSkillBars();
        }
    }

    // 技能条动画
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        });
    }

    // 切换移动端菜单
    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('active', this.mobileMenuOpen);
        }
    }

    // 关闭移动端菜单
    closeMobileMenu() {
        this.mobileMenuOpen = false;
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }

    // 显示项目模态框
    showProjectModal(projectId) {
        const modal = document.querySelector(`#${projectId}-modal`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // 加载高清图片
            const modalImg = modal.querySelector('img');
            if (modalImg && modalImg.hasAttribute('data-highres-src')) {
                const highResSrc = modalImg.getAttribute('data-highres-src');
                modalImg.src = highResSrc;
            }
        }
    }

    // 关闭模态框
    closeModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }

    // 切换未来规划标签
    switchFutureTab(tab) {
        // 更新按钮状态
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if (btn.getAttribute('data-tab') === tab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 显示对应内容
        document.querySelectorAll('.timeline-content').forEach(content => {
            if (content.getAttribute('data-tab') === tab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    // 下载PDF
    downloadPDF(lang) {
        const pdfFiles = {
            'ch': 'pdf/bre_resume_ch.pdf',
            'en': 'pdf/bre_resume_ch_en.pdf',
            'ja': 'pdf/bre_resume_ch_jp.pdf'
        };

        const pdfPath = pdfFiles[lang] || pdfFiles['ch'];
        
        // 创建隐藏的a标签进行下载
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = `resume_${lang}.pdf`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 设置滚动效果
    setupScrollEffects() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // 导航栏背景变化
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }

            lastScrollTop = scrollTop;
        }, { passive: true });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    const app = new ResumeApp();
    app.init();
});
