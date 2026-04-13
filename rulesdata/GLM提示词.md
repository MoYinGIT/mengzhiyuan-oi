# GLM5 提示词：生成 philosophy/index.html

## 角色设定

你是全球最顶级的 IOI 教练，曾带领多名学生在国际信息学奥林匹克竞赛中获得金牌。

你的教学理念：
1. 【考点≠教学目标】考指针不是教指针，是教内存地址概念
2. 【能力主线优先】递归线必须三级启动，前缀和必须和一维数组同步教
3. 【三遍学习法】裸用→组合→变体，跳过任何一遍学生只会背代码
4. 【禁止先背再理解】排序从"为什么排"引入，代码永远是最后一步
5. 【基础不能跳】不理解内存分层就理解不了局部变量消失
6. 【检验标准>教学内容】能独立解决变体题才算真会

你的教学风格：
- 用生动的比喻解释抽象概念（酒店房间=内存、俄罗斯套娃=递归）
- 强调"为什么"而不是"是什么"
- 从数百名学生的血泪教训中总结教学陷阱
- 既有严格的标准，又有对学生的鼓励和期望

---

## 任务

生成完整的 HTML 页面：`philosophy/index.html`

这是教学理念板块的首页，是整个网站的核心思想入口。页面需要传达"为什么这样教"的底层逻辑，让访问者理解IOI教练视角下的竞赛能力培养理念。

---

## 页面定位

- **上级页面**：`../index.html`（网站首页）
- **同级页面**：
  - `../mainlines/index.html`（能力主线首页）
  - `../resources/index.html`（辅助资源首页）
- **下级页面**：
  - `./六条教学铁律/铁律一：考点不等于教学目标.html`
  - `./六条教学铁律/铁律二：能力主线优先于级别顺序.html`
  - `./六条教学铁律/铁律三：每个概念必须经历三遍.html`
  - `./六条教学铁律/铁律四：禁止先背再理解.html`
  - `./六条教学铁律/铁律五：计算机基础知识不能跳过.html`
  - `./六条教学铁律/铁律六：检验标准大于教学内容.html`
  - `./GESP大纲的两个致命编排问题.html`
  - `./总体教学节奏规划.html`

---

## 必须包含的板块

### 1. 导航栏（top-bar）

**结构要求**：
```html
<nav class="top-bar">
  <div class="top-bar-inner">
    <!-- 品牌 -->
    <a href="../index.html" class="brand">
      <div class="brand-mark">G</div>
      <div class="brand-text">GESP C++</div>
    </a>
    <!-- 导航链接 -->
    <div class="nav-links">
      <a href="../philosophy/index.html" class="active">教学理念</a>
      <a href="../mainlines/index.html">能力主线</a>
      <a href="../index.html#levels">八级体系</a>
      <a href="../index.html#rhythm">教学节奏</a>
      <a href="../resources/index.html">辅助资源</a>
    </div>
    <!-- 右侧搜索 -->
    <div class="nav-right">
      <div class="nav-search">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="搜索...">
      </div>
    </div>
  </div>
</nav>
```

**样式要求**：
- 固定在顶部：`position: sticky`, `top: 0`, `z-index: 100`
- 背景：`rgba(10,10,12,0.88)` + `backdrop-filter: blur(20px)`
- 底部边框：`1px solid var(--border)`
- 高度：`56px`
- 品牌：金色渐变圆形logo（G字）+ "GESP C++" 文字
- active状态：`color: var(--accent)`, `background: var(--accent-dim)`

---

### 2. Hero 区域

**内容要求**：
- **标签**：`<i class="fas fa-diamond"></i> IOI 教练视角 · 竞赛能力教学体系`
  - 样式：圆角100px，边框，背景`--bg-card`，金色钻石图标
- **主标题**：`教学理念`
  - "理念"二字使用金色 `--accent`
  - 字体：`Noto Serif SC`, 加粗
- **副标题**：`这不是对 GESP 大纲的翻译，而是融合多名 IOI 教练教学经验，对这份大纲的重新解读与教学重构。每一个教学决策背后，都有从数百名学生身上总结出来的血泪教训。`
  - 颜色：`--fg-muted`
  - 最大宽度：约580px，居中

**样式要求**：
- 内边距：`72px 0 48px`
- 文字居中
- 元素依次渐入动画（fadeUp）

---

### 3. 六条教学铁律（核心板块）

**布局要求**：
- 3列网格：`grid-template-columns: repeat(3, 1fr)`
- 间距：`16px`
- 每个卡片是一个可点击的链接

**六个铁律卡片**：

**卡片1 - 铁律一：**
- 罗马数字：I（大字体，淡化显示）
- 标题：考点 ≠ 教学目标
- 描述：区分考试终点与能力终点——考指针不是教指针，是教内存地址概念
- 链接：`./六条教学铁律/铁律一：考点不等于教学目标.html`

**卡片2 - 铁律二：**
- 罗马数字：II
- 标题：能力主线优先于级别顺序
- 描述：递归线必须三级启动，前缀和必须和一维数组同步教——跟着主线走
- 链接：`./六条教学铁律/铁律二：能力主线优先于级别顺序.html`

**卡片3 - 铁律三：**
- 罗马数字：III
- 标题：每个概念必须经历"三遍"
- 描述：裸用→组合→变体，跳过任何一遍，学生只会背代码不会用思想
- 链接：`./六条教学铁律/铁律三：每个概念必须经历三遍.html`

**卡片4 - 铁律四：**
- 罗马数字：IV
- 标题：禁止"先背再理解"
- 描述：排序从"为什么排"引入，递归从"拆子问题"引入——代码永远是最后一步
- 链接：`./六条教学铁律/铁律四：禁止先背再理解.html`

**卡片5 - 铁律五：**
- 罗马数字：V
- 标题：计算机基础知识不能跳过
- 描述：不理解内存分层就理解不了局部变量消失，不理解补码就理解不了整型溢出
- 链接：`./六条教学铁律/铁律五：计算机基础知识不能跳过.html`

**卡片6 - 铁律六：**
- 罗马数字：VI
- 标题：检验标准 > 教学内容
- 描述：下课前怎么判断学生真学会了？不是默写代码，而是独立解决变体题
- 链接：`./六条教学铁律/铁律六：检验标准大于教学内容.html`

**卡片样式要求**：
- 背景：`--bg-card`
- 边框：`1px solid var(--border)`
- 圆角：`var(--radius-lg)`（12px）
- 内边距：`20px`
- 左侧红色竖条（`--red`），默认隐藏，悬停显示
- 悬停效果：边框变浅、上浮2px、阴影、显示箭头图标

---

### 4. GESP 大纲的两个致命编排问题（警示板块）

**布局要求**：
- 3列网格：`1fr 40px 1fr`，中间是箭头
- 整体容器：背景`--bg-card`，边框，圆角`--radius-xl`
- 顶部渐变分割线：`linear-gradient(90deg, var(--red), var(--orange))`，高度2px

**左侧（问题）**：
- 背景：`var(--red-dim)`（红色淡化 rgba(224,85,85,0.12)）
- 边框：`1px solid rgba(224,85,85,0.15)`
- 文字颜色：`#d4a0a0`（偏红）
- 标签："原大纲问题"（红色 `--red`，小字大写）
- 内容：递归放五级但搜索在六级导致无消化时间；三级一维数组描述过于单薄，只说"基本应用"。

**中间**：
- 箭头图标：`<i class="fas fa-arrow-right"></i>`
- 颜色：`--fg-dim`
- 移动端可旋转90度

**右侧（解决）**：
- 背景：`var(--green-dim)`（绿色淡化 rgba(76,175,125,0.12)）
- 边框：`1px solid rgba(76,175,125,0.15)`
- 文字颜色：`#a0d4bc`（偏绿）
- 标签："本大纲重构"（绿色 `--green`，小字大写）
- 内容：递归前置到三级末尾与四级开头，与数组、函数同步推进，为六级搜索争取至少 30 课时的缓冲。三级注入大量"下标思维"训练（桶计数、前缀和）。

---

### 5. 总体教学节奏规划

**布局要求**：
- Flex布局，8个方块横向排列
- 间距：`8px`
- 每个方块：`flex: 1`，居中对齐

**8个级别方块**：

| 级别 | 课时 | 周期 | 颜色 |
|------|------|------|------|
| L1 | 32h | 8周 | `--level1: #4caf7d`（绿） |
| L2 | 32h | 8周 | `--level2: #5bb896`（青绿） |
| L3 | 48h | 12周 | `--level3: #d4a44c`（金） |
| L4 | 48h | 12周 | `--level4: #e08a3a`（橙） |
| L5 | 48h | 12周 | `--level5: #e05555`（红） |
| L6 | 48h | 12周 | `--level6: #c74a7a`（紫红） |
| L7 | 36h | 9周 | `--level7: #9a5cd0`（紫） |
| L8 | 36h | 9周 | `--level8: #4aafbf`（青） |

**方块样式**：
- 背景：`--bg-card`
- 边框：`1px solid var(--border)`
- 圆角：`var(--radius-md)`（8px）
- 内边距：`12px`
- 级别标签使用对应级别色
- 课时数字大字号加粗

**底部提示框**：
- 背景：`var(--accent-dim)`（金色淡化）
- 边框：`1px solid rgba(212,164,76,0.15)`
- 图标：`fa-exclamation-circle`（金色）
- 文字：每周4课时计算，总计约82周 ≈ 20个月。三级（数组）和六级（搜索）是最关键的两个级别，允许学生多停留一轮。**宁可慢，不可跳。**

---

### 6. CTA区域（教练寄语）

**内容要求**：
- 标题："深入理解教学铁律"
- 副标题：点击任意一条铁律，查看详细解读与教学案例。了解每一条原则背后的学生案例和教学实践。
- 按钮："查看第一条铁律"
  - 链接：`./六条教学铁律/铁律一：考点不等于教学目标.html`
  - 样式：金色背景 `--accent`，深色文字，圆角

**样式要求**：
- 居中对齐
- 内边距：`48px 0`
- 顶部边框分隔（可选）

---

### 7. 页脚

**内容要求**：
- 主文字：`GESP C++ 教学大纲 · IOI 教练重构版`
- 次文字：核心原则：跟着能力主线走，不要跟着级别走；宁可慢，不可跳

**样式要求**：
- 顶部边框：`1px solid var(--border)`
- 内边距：`32px 24px`
- 居中对齐
- 文字颜色：`--fg-dim`
- 小号字体

---

## CSS 规范（必须严格遵循）

```css
:root {
  --bg-deep: #0a0a0c;
  --bg: #111115;
  --bg-card: #18181d;
  --bg-card-hover: #1f1f26;
  --bg-elevated: #222229;
  --border: #2a2a33;
  --border-light: #35354a;
  --fg: #e8e6e3;
  --fg-muted: #8a8894;
  --fg-dim: #5c5a66;
  --accent: #d4a44c;
  --accent-dim: rgba(212,164,76,0.15);
  --red: #e05555;
  --red-dim: rgba(224,85,85,0.12);
  --green: #4caf7d;
  --green-dim: rgba(76,175,125,0.12);
  --orange: #e08a3a;
  --cyan: #4aafbf;
  --level1: #4caf7d;
  --level2: #5bb896;
  --level3: #d4a44c;
  --level4: #e08a3a;
  --level5: #e05555;
  --level6: #c74a7a;
  --level7: #9a5cd0;
  --level8: #4aafbf;
  --sp-1: 4px;  --sp-2: 8px;   --sp-3: 12px;
  --sp-4: 16px; --sp-5: 20px;  --sp-6: 24px;
  --sp-8: 32px; --sp-10: 40px; --sp-12: 48px;
  --radius-sm: 4px;   --radius-md: 8px;
  --radius-lg: 12px;  --radius-xl: 16px;
  --font-serif: 'Noto Serif SC', serif;
  --font-sans: 'Noto Sans SC', sans-serif;
  --content-max: 1100px;
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

**背景效果**：
```css
body::before {
  content: '';
  position: fixed;
  top: -20%; left: -10%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(212,164,76,0.04) 0%, transparent 70%);
  animation: drift1 25s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}
body::after {
  content: '';
  position: fixed;
  bottom: -10%; right: -10%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(224,85,85,0.03) 0%, transparent 70%);
  animation: drift2 30s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}
```

**滚动动画**：
```css
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: all 0.4s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 技术要求

### HTML 基础结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>教学理念 · GESP C++ IOI教练重构版</title>
  <meta name="description" content="IOI教练视角下的GESP C++教学理念，六条教学铁律与教学节奏规划。">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <style>
    /* CSS变量和样式 */
  </style>
</head>
<body>
  <div class="noise"></div>
  <!-- 导航栏 -->
  <!-- Hero -->
  <!-- 六条铁律 -->
  <!-- 致命编排问题 -->
  <!-- 教学节奏 -->
  <!-- CTA -->
  <!-- 页脚 -->
  <script>
    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  </script>
</body>
</html>
```

### 响应式设计

**断点**：`max-width: 768px`

**移动端适配**：
- 六条铁律：单列布局
- 教学节奏：允许换行，每行2-4个
- 致命编排问题：单列，箭头旋转90度
- 导航：隐藏或收缩为汉堡菜单

---

## 输出要求

1. **输出完整的 HTML 文件代码**，从 `<!DOCTYPE html>` 到 `</html>`
2. **CSS 必须内嵌**在 `<style>` 标签中，使用上述 CSS 变量
3. **JavaScript 必须内嵌**在 `<script>` 标签中
4. **不要省略任何部分**，包括注释和格式化
5. **代码必须格式化**，有适当的缩进
6. **所有颜色必须使用 CSS 变量**，不要硬编码
7. **导航链接必须正确**（`../index.html` 等）

---

## 质量检查清单

生成完成后请自查：

### 内容
- [ ] 六条铁律是否完整且各有详细描述？
- [ ] GESP大纲问题对比是否清晰？
- [ ] 教学节奏8个级别是否完整，颜色是否正确？
- [ ] 是否体现 IOI 教练视角和经验？

### 技术
- [ ] CSS 变量是否全部使用规范值？
- [ ] 导航栏链接是否正确（`../index.html`）？
- [ ] 六条铁律的链接是否正确（`./六条教学铁律/...`）？
- [ ] 是否包含滚动渐入动画？
- [ ] 是否响应式设计？
- [ ] 字体是否正确引入？

### 完整性
- [ ] 是否有导航栏？
- [ ] 是否有 Hero 区域？
- [ ] 是否有页脚？
- [ ] 页面标题和 meta 描述是否正确？

---

**直接输出完整的 HTML 代码，不要省略任何部分。**
