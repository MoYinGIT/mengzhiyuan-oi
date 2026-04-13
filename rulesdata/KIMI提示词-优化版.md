# GLM5 提示词生成器（优化版）

## 📋 使用说明

本文档是用于生成 GLM5 提示词的母版。根据你要生成的页面类型，复制对应章节内容，按需调整。

---

## 一、通用基础（所有页面必须包含）

### 1.1 角色设定

```
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
```

### 1.2 网站架构理解

当前网站结构：
```
mengzhiyuan-oi/
├── index.html                      # 网站首页
├── philosophy/                     # 教学理念板块
│   ├── index.html                  # 教学理念首页 ← 当前目标
│   ├── 六条教学铁律/
│   │   ├── 铁律一：考点不等于教学目标.html
│   │   └── ...
│   ├── GESP大纲的两个致命编排问题.html
│   └── 总体教学节奏规划.html
├── mainlines/                      # 五条能力主线
│   ├── index.html
│   ├── 递归线/
│   ├── 数组DP线/
│   ├── 排序分治线/
│   ├── 图论线/
│   └── 数学工具线/
├── levels/                         # 八级教案体系
│   ├── L1编程一级启蒙期/
│   ├── L2编程二级嵌套期/
│   └── ... L3-L8
├── resources/                      # 辅助资源
│   ├── problem_bank/               # 真题库
│   └── templates/                  # 代码模板
└── assets/                         # 静态资源
    ├── css/
    ├── js/
    └── images/
```

### 1.3 CSS 设计系统（严格遵循）

```css
/* 颜色系统 */
--bg-deep: #0a0a0c;           /* 页面最深背景 */
--bg: #111115;                /* 主背景 */
--bg-card: #18181d;           /* 卡片背景 */
--bg-card-hover: #1f1f26;     /* 卡片悬停 */
--border: #2a2a33;            /* 边框 */
--border-light: #35354a;      /* 浅色边框 */
--fg: #e8e6e3;                /* 主文字 */
--fg-muted: #8a8894;          /* 次要文字 */
--fg-dim: #5c5a66;            /* 暗色文字 */
--accent: #d4a44c;            /* 金色强调（通用） */
--accent-dim: rgba(212,164,76,0.15);
--red: #e05555;               /* 红色（警示） */
--red-dim: rgba(224,85,85,0.12);
--green: #4caf7d;             /* 绿色（成功/L1） */
--green-dim: rgba(76,175,125,0.12);
--orange: #e08a3a;            /* 橙色（L3/L4） */
--cyan: #4aafbf;              /* 青色（L8） */

/* 八级别色 */
--level1: #4caf7d;            /* L1 绿 */
--level2: #5bb896;            /* L2 青绿 */
--level3: #d4a44c;            /* L3 金 */
--level4: #e08a3a;            /* L4 橙 */
--level5: #e05555;            /* L5 红 */
--level6: #c74a7a;            /* L6 紫红 */
--level7: #9a5cd0;            /* L7 紫 */
--level8: #4aafbf;            /* L8 青 */

/* 间距系统 */
--sp-1: 4px;  --sp-2: 8px;   --sp-3: 12px;
--sp-4: 16px; --sp-5: 20px;  --sp-6: 24px;
--sp-8: 32px; --sp-10: 40px; --sp-12: 48px;

/* 圆角系统 */
--radius-sm: 4px;   --radius-md: 8px;
--radius-lg: 12px;  --radius-xl: 16px;

/* 字体 */
--font-serif: 'Noto Serif SC', serif;  /* 标题 */
--font-sans: 'Noto Sans SC', sans-serif; /* 正文 */

/* 布局 */
--content-max: 1100px;        /* 最大宽度 */

/* 动画 */
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

### 1.4 通用组件规范

#### 导航栏（所有子页面统一）
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

**导航链接规则**：
- 当前页面使用 `class="active"`
- 返回首页：`../index.html`
- 同板块其他页面：相对路径（如 `./六条教学铁律/xxx.html`）
- 其他板块首页：`../板块名/index.html`

#### Hero 区域
```html
<header class="hero">
  <div class="hero-badge">
    <i class="fas fa-diamond"></i> IOI 教练视角
  </div>
  <h1>页面标题</h1>
  <p class="hero-sub">页面副标题描述</p>
</header>
```

#### 卡片组件
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-5);
  transition: all var(--transition-base);
}
.card:hover {
  border-color: var(--border-light);
  background: var(--bg-card-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
```

#### 区块标题
```html
<div class="sec-title">
  <div class="sec-num">1</div>
  <h2>区块标题</h2>
  <div class="line"></div>
  <a href="xxx" class="sec-link">查看全部 →</a>
</div>
```

### 1.5 背景效果（所有页面统一）

```css
/* 浮动光晕 */
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

/* 噪点纹理 */
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,...");
}
```

### 1.6 滚动动画（所有页面统一）

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

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});
```

### 1.7 HTML 基础模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[页面标题] · GESP C++ IOI教练重构版</title>
  <meta name="description" content="[页面描述]">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <style>
    /* CSS变量 */
    :root { ... }
    /* 基础样式 */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: var(--font-sans); ... }
    /* 导航栏 */
    .top-bar { ... }
    /* 页面特定样式 */
    ...
  </style>
</head>
<body>
  <div class="noise"></div>
  
  <!-- 导航栏 -->
  <nav class="top-bar">...</nav>
  
  <!-- 主内容 -->
  <main class="container">
    ...
  </main>
  
  <!-- 页脚 -->
  <footer>...</footer>
  
  <script>
    // 滚动动画
    ...
    // 导航高亮
    ...
  </script>
</body>
</html>
```

---

## 二、特定页面提示词模板

### 模板 A：板块首页（如 philosophy/index.html）

**适用场景**：
- philosophy/index.html（教学理念首页）
- mainlines/index.html（能力主线首页）
- resources/index.html（辅助资源首页）

**提示词结构**：

```markdown
# 角色
[复制通用角色设定]

# 任务
生成完整的 HTML 页面：`[文件路径]`

这是 [板块名称] 的首页，是整个 [板块] 的入口和导航中心。

# 页面定位
- 上级页面：[父页面链接]
- 同级页面：[其他板块首页]
- 下级页面：[子页面列表]

# 必须包含的板块

## 1. 导航栏
- 品牌链接返回 ../index.html
- 当前页面标记 active
- 其他导航链接：教学理念、能力主线、八级体系、教学节奏、辅助资源

## 2. Hero 区域
- 标签：IOI 教练视角
- 主标题：[板块名称]
- 副标题：[一句话描述板块核心价值]

## 3. 内容概览卡片（3-6个）
每个卡片包含：
- 图标（Font Awesome）
- 标题
- 一句话描述
- 链接到子页面

## 4. 核心亮点展示
- 用数据或对比展示板块特色
- 如：六条铁律、八级别对比等

## 5. 导航/CTA
- 进入第一个子页面的按钮
- 返回首页的链接

## 6. 页脚
- 标准页脚信息

# 设计风格
- 使用 [主色调] 作为强调色
- 卡片式布局
- 悬停动效

# 输出要求
[复制通用输出要求]
```

---

### 模板 B：内容详情页（如铁律详情页）

**适用场景**：
- philosophy/六条教学铁律/铁律一.html
- mainlines/递归线/index.html
- levels/L1/具体知识点.html

**提示词结构**：

```markdown
# 角色
[复制通用角色设定]

# 任务
生成完整的 HTML 页面：`[文件路径]`

这是 [内容名称] 的详细讲解页。

# 页面定位
- 所属板块：[板块名]
- 上级页面：[父页面链接]
- 同级页面：[前后页面链接]

# 内容结构

## 1. 头部信息
- 面包屑导航：首页 > 板块 > 当前页
- 标题：[内容标题]
- 标签：[课时/难度/类型标签]

## 2. 核心概念讲解（IOI教练视角）
- 用比喻解释抽象概念
- 强调"为什么"而不是"是什么"
- 配合示意图（用文字描述）

## 3. 教学要点（重点）
- 3-5个核心要点
- 每个要点详细展开
- 包含具体例子

## 4. 常见误区（教学陷阱）
- 学生容易犯的错误
- 为什么会有这个误区
- 如何纠正

## 5. 实战练习
- 2-3道练习题
- 题目描述
- 参考答案（可折叠）

## 6. 检验标准
- 学生必须达到的能力标准
- 如何判断是否掌握

## 7. 上下页导航
- 上一页/下一页链接
- 返回上级按钮

# 特别要求
- 内容必须体现 IOI 教练的教学经验
- 使用"我从学生身上看到..."等第一人称叙述
- 强调竞赛思维的培养

# 输出要求
[复制通用输出要求]
```

---

### 模板 C：教案页面

**适用场景**：
- levels/L1/教案：xxx.html
- 详细的课堂教学指导

**提示词结构**：

```markdown
# 角色
[复制通用角色设定，强调"教练给教练看的"]

# 任务
生成完整的 HTML 页面：`[文件路径]`

这是 [知识点] 的详细教案，供授课老师参考。

# 教案结构

## 1. 教案头部
- 教案名称
- 所属知识点
- 课时：[x]课时
- 课型：新授课/复习课/实践课

## 2. 教学目标
- 知识目标
- 能力目标
- 思维目标（竞赛思维）

## 3. 教学重难点
- 重点
- 难点
- 关键点

## 4. 教学准备
- 教具
- 学生准备
- 环境要求

## 5. 教学过程（详细）
### 导入（x分钟）
- 引入方式
- 关键话术

### 新课讲授（x分钟）
- 第一部分：...
  - 讲解内容
  - 板书设计
  - 关键话术
  - 学生互动设计
- 第二部分：...

### 课堂练习（x分钟）
- 练习题
- 巡视要点
- 讲评重点

### 小结（x分钟）
- 学生总结
- 教师总结

## 6. 板书设计
- 用文字描述板书布局

## 7. 课后反思（模板）
- 供老师填写

## 8. 扩展资源
- 推荐阅读
- 视频资源

# 特别要求
- 提供具体的"话术"，不是笼统的描述
- 包含"如果学生这样问，你怎么回答"
- 预判学生可能的困惑点

# 输出要求
[复制通用输出要求]
```

---

## 三、当前任务示例

### 示例：生成 philosophy/index.html

```markdown
# 角色
你是全球最顶级的 IOI 教练...
[复制完整角色设定]

# 任务
生成完整的 HTML 页面：`philosophy/index.html`

这是教学理念板块的首页，是整个网站的核心思想入口。

# 页面定位
- 上级页面：../index.html（网站首页）
- 同级页面：../mainlines/index.html、../resources/index.html
- 下级页面：
  - ./六条教学铁律/铁律一.html ...铁律六.html
  - ./GESP大纲的两个致命编排问题.html
  - ./总体教学节奏规划.html

# 必须包含的板块

## 1. 导航栏
- 品牌返回 ../index.html
- 教学理念标记 active
- 其他链接：能力主线(../mainlines/index.html)、八级体系(../index.html#levels)、教学节奏(../index.html#rhythm)、辅助资源(../resources/index.html)

## 2. Hero 区域
- 标签：IOI 教练视角 · 竞赛能力教学体系
- 主标题：教学理念（金色强调）
- 副标题：这不是对 GESP 大纲的翻译，而是融合多名 IOI 教练教学经验，对这份大纲的重新解读与教学重构...

## 3. 六条教学铁律（6个卡片）
卡片1-铁律一：
- 罗马数字：I
- 标题：考点 ≠ 教学目标
- 描述：区分考试终点与能力终点——考指针不是教指针，是教内存地址概念
- 链接：./六条教学铁律/铁律一.html

[卡片2-6...]

## 4. GESP大纲致命编排问题（对比卡片）
左侧（问题）：
- 背景红色系
- 原大纲：递归放五级但搜索在六级...

右侧（解决）：
- 背景绿色系
- 本大纲：递归前置到三级末尾...

## 5. 教学节奏规划（8个方块）
显示 L1-L8 的课时和周期，使用对应级别色

## 6. CTA区域
- 标题：深入理解教学铁律
- 按钮：查看第一条铁律 → 链接到铁律一

## 7. 页脚
标准页脚

# CSS规范
[复制CSS变量]

# 技术要求
[复制技术要求]

# 输出要求
输出完整HTML代码，不省略任何部分。
```

---

## 四、质量检查清单

生成完成后，检查以下项目：

### 内容质量
- [ ] 是否体现 IOI 教练视角？
- [ ] 是否有具体的教学案例/比喻？
- [ ] 是否强调"为什么"而不是"是什么"？
- [ ] 是否包含教学陷阱警示？
- [ ] 是否有明确的检验标准？

### 技术规范
- [ ] CSS变量是否全部使用规范值？
- [ ] 导航链接是否正确？
- [ ] 返回首页链接是否是 ../index.html？
- [ ] 是否包含滚动动画？
- [ ] 是否响应式设计？
- [ ] 字体是否正确引入？

### 页面完整性
- [ ] 是否有导航栏？
- [ ] 是否有Hero区域？
- [ ] 是否有页脚？
- [ ] 是否有页面标题和meta描述？
- [ ] 上下页导航是否完整？

---

## 五、常见问题和解决方案

### Q1：GLM5生成的代码缺少部分CSS
**解决**：在提示词中明确写"CSS变量必须完整包含，不要省略"

### Q2：导航链接错误
**解决**：在提示词中明确写出每个链接的具体值

### Q3：内容不够深入
**解决**：添加"必须包含至少3个具体教学案例"等明确要求

### Q4：没有体现IOI教练视角
**解决**：在提示词中明确要求使用"我看到的学生案例..."等第一人称叙述

### Q5：代码格式混乱
**解决**：要求"代码必须格式化，有适当的缩进和注释"

---

## 六、快速复制区

### CSS变量（完整版）
```css
:root {
  --bg-deep: #0a0a0c;--bg: #111115;--bg-card: #18181d;--bg-card-hover: #1f1f26;--bg-elevated: #222229;
  --border: #2a2a33;--border-light: #35354a;
  --fg: #e8e6e3;--fg-muted: #8a8894;--fg-dim: #5c5a66;
  --accent: #d4a44c;--accent-dim: rgba(212,164,76,0.15);
  --red: #e05555;--red-dim: rgba(224,85,85,0.12);
  --green: #4caf7d;--green-dim: rgba(76,175,125,0.12);
  --orange: #e08a3a;--orange-dim: rgba(224,138,58,0.12);
  --cyan: #4aafbf;--cyan-dim: rgba(74,175,191,0.12);
  --level1: #4caf7d;--level2: #5bb896;--level3: #d4a44c;--level4: #e08a3a;
  --level5: #e05555;--level6: #c74a7a;--level7: #9a5cd0;--level8: #4aafbf;
  --sp-1: 4px;--sp-2: 8px;--sp-3: 12px;--sp-4: 16px;--sp-5: 20px;--sp-6: 24px;--sp-8: 32px;--sp-10: 40px;--sp-12: 48px;
  --radius-sm: 4px;--radius-md: 8px;--radius-lg: 12px;--radius-xl: 16px;
  --font-serif: 'Noto Serif SC', serif;--font-sans: 'Noto Sans SC', sans-serif;
  --content-max: 1100px;--transition-fast: .15s ease;--transition-base: .2s ease;--transition-slow: .3s ease;
}
```

### 导航链接模板
```html
<div class="nav-links">
  <a href="../philosophy/index.html" class="active">教学理念</a>
  <a href="../mainlines/index.html">能力主线</a>
  <a href="../index.html#levels">八级体系</a>
  <a href="../index.html#rhythm">教学节奏</a>
  <a href="../resources/index.html">辅助资源</a>
</div>
```

### HTML头部模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[标题] · GESP C++ IOI教练重构版</title>
  <meta name="description" content="[描述]">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <style>[CSS]</style>
</head>
```

---

**文档版本**：v2.0（优化版）  
**最后更新**：2024年4月12日  
**适用范围**：mengzhiyuan-oi 全站页面生成
