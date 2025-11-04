// 简历网站 - 单页面应用
(function() {
    'use strict';

    // 项目数据（用于模态框）
    const projectData = {
        ecommerce: {
            title: '电商平台',
            tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redux'],
            desc: '这是一个功能完整的电商平台，采用React + TypeScript构建前端，Node.js构建后端API。实现了用户认证、商品管理、购物车、订单处理、支付集成等核心功能。使用Redux进行状态管理，Material-UI构建响应式界面。'
        },
        dataviz: {
            title: '数据可视化大屏',
            tech: ['Vue.js', 'ECharts', 'D3.js', 'WebSocket'],
            desc: '为企业打造的实时数据监控大屏，使用Vue.js框架，集成ECharts和D3.js实现丰富的图表展示。支持实时数据更新、多维度数据分析、自定义图表配置。适用于运营监控、数据分析、决策支持等场景。'
        },
        mobile: {
            title: '移动端应用',
            tech: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
            desc: '使用React Native开发的跨平台移动应用，支持iOS和Android。集成了社交分享、地图定位、消息推送、相机拍照等原生功能。使用Redux管理应用状态，实现了流畅的用户体验和优秀的性能表现。'
        }
    };

    // 显示页面
    function showPage(pageId) {
        // console.log('📄 切换到页面:', pageId);
        
        // 1. 隐藏所有页面
        const allPages = document.querySelectorAll('.page');
        allPages.forEach(p => {
            p.classList.remove('active');
        });
        
        // 2. 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            // console.log('  CSS classes:', targetPage.className);
        } else {
            console.error('❌ 找不到页面:', pageId);
            return;
        }
        
        // 3. 更新导航状态
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + pageId) {
                link.classList.add('active');
            }
        });
        
        // 4. 更新 body 类名，用于控制导航栏样式
        document.body.className = `page-${pageId}`;
        // console.log('✅ 更新 body 类名:', document.body.className);
        
        // 5. 关闭移动菜单
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
        
        // 6. 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 7. 更新 URL
        if (history.pushState) {
            history.pushState({page: pageId}, '', `#${pageId}`);
        }
    }

    // 绑定项目卡片事件
    function bindProjectEvents() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.dataset.project;
                // console.log('点击项目卡片:', projectId);
                showProjectModal(projectId);
            });
        });
    }

    // 显示项目模态框
    function showProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) {
            console.error('找不到项目数据:', projectId);
            return;
        }

        const modal = document.getElementById('project-modal');
        if (!modal) {
            console.error('找不到模态框元素');
            return;
        }

        modal.querySelector('.modal-title').textContent = project.title;
        modal.querySelector('.modal-desc').textContent = project.desc;
        modal.querySelector('.modal-tech').innerHTML = project.tech
            .map(t => `<span class="tech-tag">${t}</span>`)
            .join('');
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // 关闭模态框
    function closeModal() {
        document.querySelectorAll('.modal').forEach(m => {
            m.classList.remove('active');
        });
        document.body.style.overflow = '';
    }

    // 绑定未来页面标签事件
    function bindFutureTabEvents() {
        const futureTabs = document.querySelectorAll('.future-tab');
        
        futureTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.dataset.tab;
                
                // 更新标签状态
                futureTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // 更新内容显示
                document.querySelectorAll('.future-content').forEach(c => {
                    c.classList.remove('active');
                });
                const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // 初始化所有事件
    function initEvents() {
        // Logo 点击
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.addEventListener('click', () => {
                showPage('home');
            });
        }

        // 导航链接
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const pageId = href.substring(1);
                    showPage(pageId);
                }
            });
        });

        // 移动菜单按钮
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.toggle('active');
                }
            });
        }

        // CTA 按钮
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const pageId = href.substring(1);
                    // console.log('点击 CTA 按钮:', pageId);
                    showPage(pageId);
                }
            });
        });

        // 模态框关闭
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-close') || 
                e.target.classList.contains('modal')) {
                closeModal();
            }
        });

        // ESC 键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            }
        });

        // 浏览器前进/后退
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.substring(1) || 'home';
            // console.log('浏览器历史变化:', hash);
            showPage(hash);
        });

        // 绑定项目和未来页面的特殊事件
        bindProjectEvents();
        bindFutureTabEvents();
    }

    // 主初始化函数
    function init() {
        // 初始化 i18n
        if (typeof i18n !== 'undefined') {
            i18n.init();
            
            // 绑定语言切换按钮
            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    i18n.setLanguage(lang);
                    // console.log('🌐 切换语言:', lang);
                });
            });
        } else {
            console.warn('⚠️ i18n 未定义');
        }
        
        // 检查所有页面元素
        const pages = ['home', 'projects', 'about', 'future', 'contact'];
        pages.forEach(pageId => {
            const page = document.getElementById(pageId);
            if (page) {
                // console.log(`找到页面: ${pageId}`, page.className);
            } else {
                console.error(`❌ 找不到页面: ${pageId}`);
            }
        });
        
        // 初始化事件
        initEvents();
        
        // 初始化下载功能
        initDownload();
        
        // 显示初始页面
        const initialHash = window.location.hash.substring(1);
        const startPage = (initialHash && document.getElementById(initialHash)) ? initialHash : 'home';
        showPage(startPage);
        
    }

    // 初始化下载功能
    function initDownload() {
        const primaryDownloadBtn = document.getElementById('primaryDownload');
        const downloadModal = document.getElementById('download-modal');
        const modalClose = document.querySelector('.download-modal-close');
        const downloadOptions = document.querySelectorAll('.download-option');
        
        if (!primaryDownloadBtn || !downloadModal) return;
        
        // 获取当前语言
        function getCurrentLanguage() {
            const activeLangBtn = document.querySelector('.lang-btn.active');
            return activeLangBtn ? activeLangBtn.getAttribute('data-lang') : 'zh';
        }
        
        // 根据语言获取PDF路径
        function getPdfPath(lang) {
            const pdfMap = {
                'zh': './pdf/bre_resume_ch.pdf',
                'en': './pdf/bre_resume_ch_en.pdf',
                'ja': './pdf/bre_resume_ch_jp.pdf'
            };
            return pdfMap[lang] || pdfMap['zh'];
        }
        
        // 下载文件的通用函数
        function downloadFile(pdfPath) {
            // 使用 fetch 下载文件
            fetch(pdfPath)
                .then(response => response.blob())
                .then(blob => {
                    // 创建一个临时的 URL
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = pdfPath.split('/').pop();
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    
                    // 清理
                    setTimeout(() => {
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    }, 100);
                })
                .catch(error => {
                    console.error('下载失败:', error);
                    // 如果 fetch 失败，回退到直接下载
                    const link = document.createElement('a');
                    link.href = pdfPath;
                    link.download = pdfPath.split('/').pop();
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(() => {
                        document.body.removeChild(link);
                    }, 100);
                });
        }
        
        // 主下载按钮点击事件
        primaryDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 立即开始下载当前语言的PDF
            const currentLang = getCurrentLanguage();
            const pdfPath = getPdfPath(currentLang);
            downloadFile(pdfPath);
            
            // 同时显示弹窗，提供其他语言选项
            downloadModal.classList.add('active');
        });
        
        // 关闭弹窗
        modalClose.addEventListener('click', function() {
            downloadModal.classList.remove('active');
        });
        
        // 点击弹窗背景关闭
        downloadModal.addEventListener('click', function(e) {
            if (e.target === downloadModal) {
                downloadModal.classList.remove('active');
            }
        });
        
        // 下载选项点击事件
        downloadOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const pdfPath = this.getAttribute('href');
                downloadFile(pdfPath);
                
                // 下载后关闭弹窗
                setTimeout(() => {
                    downloadModal.classList.remove('active');
                }, 500);
            });
        });
        
        // ESC键关闭弹窗
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && downloadModal.classList.contains('active')) {
                downloadModal.classList.remove('active');
            }
        });
    }

    // 确保 DOM 完全加载后再初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
