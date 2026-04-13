/**
 * 蒙知苑·OI - teaching-visuals.js
 * 职责：教学可视化组件懒加载（IntersectionObserver）
 * 组件：内存布局、变量跟踪表、Mermaid流程图
 */

const TeachingVisuals = {
  config: {
    observerMargin: '50px',
    mermaidTheme: 'dark',
    mermaidCDN: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js'
  },

  /**
   * 初始化可视化组件系统
   */
  init() {
    console.log('[TeachingVisuals] 初始化可视化组件...');
    
    // 检查浏览器支持
    if (!('IntersectionObserver' in window)) {
      console.warn('[TeachingVisuals] 浏览器不支持IntersectionObserver，直接渲染所有组件');
      this.renderAll();
      return;
    }

    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: this.config.observerMargin,
      threshold: 0.1
    });

    // 观察所有可视化组件
    const elements = document.querySelectorAll('[data-type]');
    console.log(`[TeachingVisuals] 发现 ${elements.length} 个可视化组件`);
    elements.forEach(el => observer.observe(el));
  },

  /**
   * 渲染单个可视化组件
   */
  async renderElement(el) {
    const type = el.dataset.type;
    console.log(`[TeachingVisuals] 渲染类型: ${type}`);
    
    try {
      switch (type) {
        case 'memory':
          await this.renderMemory(el);
          break;
        case 'mermaid':
          await this.renderMermaid(el);
          break;
        case 'tracker':
          await this.renderTracker(el);
          break;
        default:
          console.warn(`[TeachingVisuals] 未知组件类型: ${type}`);
      }
    } catch (error) {
      console.error('[TeachingVisuals] 渲染失败:', error);
      el.innerHTML = `
        <div style="color: #e05555; padding: 16px; border: 1px solid #e05555; border-radius: 8px;">
          <strong>可视化组件渲染失败</strong><br>
          ${this.escapeHtml(error.message)}
        </div>
      `;
    }
  },

  /**
   * 渲染内存布局组件
   */
  renderMemory(el) {
    let data;
    try {
      data = JSON.parse(el.dataset.memory);
    } catch (e) {
      throw new Error('内存数据格式错误: ' + e.message);
    }

    el.classList.add('memory-layout');
    
    el.innerHTML = data.map(row => {
      const changedSet = new Set(row.changed || []);
      const cells = row.cells || ['??', '??', '??', '??'];
      return `
        <div class="memory-row">
          <span class="memory-addr">${this.escapeHtml(row.addr || '0x0000')}</span>
          <div class="cells" role="group" aria-label="内存字节">
            ${cells.map((cell, i) => `
              <div class="cell ${changedSet.has(i) ? 'changed' : ''}" 
                   tabindex="0" 
                   role="button"
                   aria-label="字节 ${i}, 值 ${cell}">${this.escapeHtml(String(cell))}</div>
            `).join('')}
          </div>
          <span class="memory-var">${this.escapeHtml(row.var || 'var')}</span>
        </div>
      `;
    }).join('');

    // 添加键盘导航支持
    el.querySelectorAll('.cell').forEach(cell => {
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          cell.click();
        }
        if (e.key === 'ArrowRight') {
          const next = cell.nextElementSibling;
          if (next) next.focus();
        }
        if (e.key === 'ArrowLeft') {
          const prev = cell.previousElementSibling;
          if (prev) prev.focus();
        }
      });
    });
    
    console.log('[TeachingVisuals] 内存布局渲染完成');
  },

  /**
   * 渲染Mermaid流程图
   */
  async renderMermaid(el) {
    const originalContent = el.textContent.trim();
    el.classList.add('mermaid-container');
    el.innerHTML = `<div class="mermaid">${originalContent}</div>`;
    const mermaidDiv = el.querySelector('.mermaid');

    // 加载Mermaid库
    if (!window.mermaid) {
      try {
        await this.loadScript(this.config.mermaidCDN);
        console.log('[TeachingVisuals] Mermaid库加载成功');
      } catch (error) {
        console.error('[TeachingVisuals] Mermaid加载失败:', error);
        // 降级显示：显示原始文本
        el.innerHTML = `<pre style="background:#14141b;padding:16px;border-radius:8px;overflow:auto;font-family:monospace;font-size:12px;">${this.escapeHtml(originalContent)}</pre>`;
        return;
      }
    }

    // 初始化Mermaid
    try {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: this.config.mermaidTheme,
        securityLevel: 'loose',
        fontFamily: 'JetBrains Mono, Consolas, monospace'
      });

      // 渲染图表
      if (window.mermaid.run) {
        await window.mermaid.run({
          querySelector: '.mermaid-container .mermaid'
        });
      } else {
        window.mermaid.init(undefined, mermaidDiv);
      }

      console.log('[TeachingVisuals] Mermaid渲染完成');
    } catch (error) {
      console.error('[TeachingVisuals] Mermaid渲染失败:', error);
      el.innerHTML = `<pre style="background:#14141b;padding:16px;border-radius:8px;overflow:auto;font-family:monospace;font-size:12px;">${this.escapeHtml(originalContent)}</pre>`;
    }
  },

  /**
   * 渲染变量跟踪表
   */
  renderTracker(el) {
    let data;
    try {
      data = JSON.parse(el.dataset.tracker);
    } catch (e) {
      throw new Error('跟踪表数据格式错误: ' + e.message);
    }

    el.classList.add('variable-tracker-wrapper');

    const headers = data.headers || ['步骤', '变量', '值', '说明'];
    const rows = data.rows || [];

    el.innerHTML = `
      <table class="variable-tracker">
        <thead>
          <tr>${headers.map(h => `<th>${this.escapeHtml(h)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>${row.map((cell) => {
              const value = typeof cell === 'object' ? cell.value : cell;
              const highlight = typeof cell === 'object' ? cell.highlight : false;
              return `<td class="${highlight ? 'highlight' : ''}">${this.escapeHtml(String(value))}</td>`;
            }).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    `;

    console.log('[TeachingVisuals] 跟踪表渲染完成');
  },

  /**
   * 加载外部脚本
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      // 检查是否已加载
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`无法加载脚本: ${src}`));
      document.head.appendChild(script);
    });
  },

  /**
   * 渲染所有组件（用于不支持IntersectionObserver的浏览器）
   */
  renderAll() {
    document.querySelectorAll('[data-type]').forEach(el => {
      this.renderElement(el);
    });
  },

  /**
   * HTML转义，防止XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
  TeachingVisuals.init();
});

// 暴露到全局（供手动调用）
window.TeachingVisuals = TeachingVisuals;
