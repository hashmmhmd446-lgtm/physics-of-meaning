// تأثيرات التفاعل والحركة
document.addEventListener('DOMContentLoaded', function() {
    
    // إضافة جسيمات متحركة إضافية
    createFloatingParticles();
    
    // تأثير التمرير السلس للروابط
    setupSmoothScrolling();
    
    // تأثيرات التفاعل مع البطاقات
    setupCardInteractions();
    
    // تأثيرات تسجيل الدخول
    setupLoginForm();
    
    // تأثير الكتابة المتحركة للعنوان
    setupTypingEffect();
    
    // تأثيرات الماوس
    setupMouseEffects();
});

// إنشاء جسيمات متحركة
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(74, 144, 226, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatRandom ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // إضافة CSS للحركة العشوائية
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatRandom {
            0%, 100% { 
                transform: translate(0, 0) rotate(0deg); 
                opacity: 0.2; 
            }
            25% { 
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); 
                opacity: 0.8; 
            }
            50% { 
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); 
                opacity: 1; 
            }
            75% { 
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); 
                opacity: 0.6; 
            }
        }
    `;
    document.head.appendChild(style);
}

// التمرير السلس
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تفاعلات البطاقات
function setupCardInteractions() {
    const cards = document.querySelectorAll('.main-card, .login-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 50px rgba(74, 144, 226, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        });
    });
}

// تفاعلات نموذج تسجيل الدخول
function setupLoginForm() {
    const loginButton = document.querySelector('.login-button');
    const loginInputs = document.querySelectorAll('.login-input');
    
    // تأثيرات الإدخال
    loginInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // تأثير الكتابة
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = '#4a90e2';
                this.style.boxShadow = '0 0 15px rgba(74, 144, 226, 0.3)';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // تأثير زر تسجيل الدخول
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // تأثير التحميل
            const originalText = this.textContent;
            this.textContent = 'جاري التحقق...';
            this.style.background = 'linear-gradient(45deg, #666, #999)';
            this.disabled = true;
            
            // محاكاة عملية تسجيل الدخول
            setTimeout(() => {
                this.textContent = 'تم بنجاح!';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'linear-gradient(45deg, #4a90e2, #6bb6ff)';
                    this.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
}

// تأثير الكتابة المتحركة للعنوان
function setupTypingEffect() {
    const title = document.querySelector('.main-title');
    if (!title) return;
    
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // إضافة تأثير الوميض
            title.style.animation = 'titleGlow 2s ease-in-out infinite alternate';
        }
    };
    
    // بدء التأثير بعد تحميل الصفحة
    setTimeout(typeWriter, 500);
    
    // إضافة CSS للتوهج
    const style = document.createElement('style');
    style.textContent = `
        @keyframes titleGlow {
            from { text-shadow: 0 0 30px rgba(255, 255, 255, 0.3); }
            to { text-shadow: 0 0 50px rgba(74, 144, 226, 0.8), 0 0 70px rgba(107, 182, 255, 0.6); }
        }
    `;
    document.head.appendChild(style);
}

// تأثيرات الماوس
function setupMouseEffects() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // تحريك الجسيمات باتجاه الماوس
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.01;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // تأثير الضوء المتبع للماوس
    const cursor = document.createElement('div');
    cursor.className = 'cursor-light';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(74, 144, 226, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });
}

// تأثيرات إضافية عند التمرير
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.background-animation');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// تأثيرات الظهور التدريجي
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة العناصر للظهور التدريجي
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.main-card, .login-card, .footer-links');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

