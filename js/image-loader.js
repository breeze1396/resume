// 图片懒加载和压缩
class ImageLoader {
    constructor() {
        this.observer = null;
        this.loadedImages = new Set();
    }

    // 初始化
    init() {
        this.setupIntersectionObserver();
        this.observeImages();
    }

    // 设置 Intersection Observer
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                }
            });
        }, options);
    }

    // 观察所有图片
    observeImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.observer.observe(img));
    }

    // 加载图片
    loadImage(img) {
        if (this.loadedImages.has(img)) return;

        const src = img.getAttribute('data-src');
        const highResSrc = img.getAttribute('data-src-highres');
        
        if (!src) return;

        // 显示加载状态
        const container = img.closest('.project-image-container') || img.parentElement;
        if (container) {
            container.classList.add('loading');
        }

        // 先加载缩略图
        const thumbnail = new Image();
        thumbnail.onload = () => {
            img.src = src;
            img.removeAttribute('data-src');
            this.loadedImages.add(img);
            
            if (container) {
                container.classList.remove('loading');
            }

            // 如果有高清图，预加载
            if (highResSrc) {
                img.setAttribute('data-highres-loaded', 'false');
                const highRes = new Image();
                highRes.onload = () => {
                    img.setAttribute('data-highres-loaded', 'true');
                    img.setAttribute('data-highres-src', highResSrc);
                };
                highRes.src = highResSrc;
            }

            this.observer.unobserve(img);
        };

        thumbnail.onerror = () => {
            console.error('Failed to load image:', src);
            if (container) {
                container.classList.remove('loading');
                container.classList.add('error');
            }
        };

        thumbnail.src = src;
    }

    // 压缩图片 (客户端)
    async compressImage(file, maxWidth = 800, quality = 0.8) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const img = new Image();
                
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // 计算缩放比例
                    if (width > maxWidth) {
                        height = (height * maxWidth) / width;
                        width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob(
                        (blob) => {
                            resolve(blob);
                        },
                        'image/jpeg',
                        quality
                    );
                };

                img.onerror = reject;
                img.src = e.target.result;
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    // 添加新图片到观察列表
    addImage(img) {
        if (this.observer && img.hasAttribute('data-src')) {
            this.observer.observe(img);
        }
    }

    // 移除图片观察
    removeImage(img) {
        if (this.observer) {
            this.observer.unobserve(img);
            this.loadedImages.delete(img);
        }
    }

    // 销毁
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.loadedImages.clear();
    }
}

// 导出单例
const imageLoader = new ImageLoader();
