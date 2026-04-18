/**
 * 蒙知苑·OI - main.js
 * 职责：导航、主题切换、移动端菜单
 */

(function() {
  'use strict';

  // ---- 移动端菜单 ----
  function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    
    // 点击菜单项后关闭菜单
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ---- 滚动渐入动画 ----
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
  }

  // ---- 代码复制功能 ----
  function initCodeCopy() {
    document.querySelectorAll('.code-copy').forEach(btn => {
      btn.addEventListener('click', async () => {
        const codeBlock = btn.closest('.code-block');
        const code = codeBlock?.querySelector('pre code')?.textContent;
        
        if (!code) return;
        
        try {
          await navigator.clipboard.writeText(code);
          const originalText = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check"></i> 已复制';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        } catch (err) {
          console.error('复制失败:', err);
        }
      });
    });
  }

  // ---- 平滑滚动到锚点 ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ---- 当前导航高亮 ----
  function initActiveNav() {
    const currentPath = window.location.pathname;
    
    document.querySelectorAll('.top-bar-nav a').forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath && currentPath.includes(linkPath.replace('../', '').replace('./', ''))) {
        link.classList.add('active');
      }
    });
  }

  // ---- 教学可视化组件懒加载 ----
  function initTeachingVisuals() {
    const visuals = document.querySelectorAll('.visual-demo, [data-type="mermaid"], [data-type="tracker"], [data-type="memory"]');
    if (!visuals.length) return;
    
    const script = document.createElement('script');
    script.src = (document.querySelector('script[src*="main.js"]')?.src.includes('/lessons/') ? '../../../' : '../../') + 'assets/js/teaching-visuals.js';
    script.onload = () => {
      if (window.TeachingVisuals) window.TeachingVisuals.init();
    };
    script.onerror = () => console.warn('[蒙知苑·OI] teaching-visuals.js 加载失败');
    document.head.appendChild(script);
  }

  // ---- 初始化 ----
  function init() {
    initMobileMenu();
    initScrollReveal();
    initCodeCopy();
    initSmoothScroll();
    initActiveNav();
    initTeachingVisuals();
    
    console.log('[蒙知苑·OI] 主脚本初始化完成');
  }

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
