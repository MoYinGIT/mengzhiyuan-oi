# GLM5 提示词：生成 levels/L1编程一级启蒙期/index.html（L1级别概览页）

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
- 使用第一人称"我从学生身上看到..."

---

## 任务

生成完整的 HTML 页面：`levels/L1编程一级启蒙期/index.html`

这是 GESP C++ 八级教学体系中的第 1 级概览页。

**级别名称**：编程一级启蒙期

**总课时**：24h · 约6周

---

## 页面定位

- **所属板块**：八级教案体系
- **上级页面**：`../../index.html`（网站首页）
- **下级页面**：
  - 各知识点教案页（如 `./输入输出.html`、`./变量与类型.html`等）
  - `./L1升级检验标准.html`
  - `./L1教学陷阱.html`
  - `./L1综合练习.html`
- **同级页面**：L2-L8 其他级别的概览页

---

## CSS 加载（严格遵循）

```html
<link rel="stylesheet" href="../../assets/css/base.css">
<link rel="stylesheet" href="../../assets/css/layout.css">
<link rel="stylesheet" href="../../assets/css/components.css">
<link rel="stylesheet" href="../../assets/css/level.css">
```

**不加载** philosophy.css 和 mainline.css。

**L1级别颜色**：--level1: #4caf7d（绿色）

---

## 必须包含的板块

### 1. 导航栏（.top-bar）

- 品牌链接返回 `../../index.html`
- 导航链接：
  - 教学理念：`../../philosophy/index.html`
  - 能力主线：`../../mainlines/index.html`
  - 八级体系：`../../index.html#levels`（active状态）
  - 教学节奏：`../../index.html#rhythm`
  - 辅助资源：`../../resources/index.html`

### 2. Hero区域（.page-header）

**面包屑导航**：八级体系 > L1 编程一级启蒙期

**标签**：`<i class="fas fa-seedling"></i> 编程启蒙期`（使用L1绿色）

**主标题**：L1 编程一级启蒙期

**副标题**：从零开始，建立编程基本概念——输入、输出、变量、运算

**关键数据展示**（3个数据卡片）：
| 数据 | 数值 | 说明 |
|------|------|------|
| 总课时 | 24课时 | 约6周完成 |
| 核心概念 | 4个 | 输入输出、变量、运算、顺序结构 |
| 能力目标 | 能独立写 | 简单输入输出程序 |

**IOI教练引言**：
> L1是整个教学体系的起点。这个阶段的目标不是学多少语法，而是建立对编程的基本认知。
>
> 我看到过太多学生，L1时 rushed（赶进度），结果基础概念模糊，到L3学数组时完全跟不上。L1一定要慢，一定要扎实。
>
> L1结束的标准很简单：学生能独立写出一个包含输入、运算、输出的完整程序。这个标准看起来低，但真正做到的学生不到70%。

### 3. 核心信息卡（.lv-summary）

#### 基本信息
- **级别名称**：编程一级启蒙期
- **建议年级**：小学3-4年级（无基础）
- **总课时**：24课时（6周，每周4课时）
- **级别颜色**：绿色（--level1: #4caf7d）

#### 核心目标（1句话）
> 建立编程基本概念，能独立编写简单输入输出程序。

#### 前置要求
> 零基础即可，需要基本的数学运算能力（加减乘除）。

#### 后继依赖
> L1的基础直接影响L2的嵌套结构学习。L1不扎实，L2会极其痛苦。

### 4. 核心知识点（4个卡片，.lv-topic-grid）

#### 知识点1：输入输出
- **图标**：`<i class="fas fa-exchange-alt"></i>`
- **标题**：输入输出
- **核心内容**：cin/cout，程序与外界的交互
- **关键概念**：输入是数据的入口，输出是结果的出口
- **课时**：6课时
- **链接**：`./教案-输入输出.html`

#### 知识点2：变量与类型
- **图标**：`<i class="fas fa-box"></i>`
- **标题**：变量与类型
- **核心内容**：变量是存储数据的盒子，int、double、char
- **关键概念**：变量名、变量值、变量类型
- **课时**：8课时
- **链接**：`./教案-变量与类型.html`

#### 知识点3：运算与表达式
- **图标**：`<i class="fas fa-calculator"></i>`
- **标题**：运算与表达式
- **核心内容**：算术运算、赋值运算、表达式求值
- **关键概念**：运算优先级、类型转换
- **课时**：6课时
- **链接**：`./教案-运算与表达式.html`

#### 知识点4：顺序结构
- **图标**：`<i class="fas fa-arrow-down"></i>`
- **标题**：顺序结构
- **核心内容**：程序按顺序执行、语句的顺序
- **关键概念**：程序流程、顺序执行
- **课时**：4课时
- **链接**：`./教案-顺序结构.html`

### 5. 涉及的能力主线（.lv-timeline）

> L1阶段主要启动**数学工具线**的基础部分：
> - ASCII字符编码（为后续字符处理打基础）
>
> 其他能力主线在L1处于准备阶段：
> - 数组DP线：还未启动（L3启动）
> - 递归线：还未启动（L3启动）
> - 排序分治线：还未启动（L4启动）
> - 图论线：还未启动（L3播种子）

**可视化**：用时间线或进度条展示各主线在L1的状态

### 6. 与前后级别的关系（.lv-transition）

```
[前置] 零基础
    │
    ▼
┌─────────────────────┐
│   L1 编程一级启蒙期  │  ← 当前级别（绿色高亮）
│  ├─ 输入输出（6h）   │
│  ├─ 变量与类型（8h） │
│  ├─ 运算表达式（6h） │
│  └─ 顺序结构（4h）   │
└─────────────────────┘
    │
    ▼
[后继] L2 编程二级嵌套期
    - 分支结构（if/switch）
    - 循环结构（for/while）
    - 嵌套逻辑
```

**说明文字**：
> L1是L2的基础。L2的分支和循环需要用到L1的变量、运算、输入输出。
> L1不扎实，L2会寸步难行。

### 7. 教学重点与难点

#### 重点（必须掌握的）
1. **变量的概念**：变量是存储数据的盒子，不是数学中的未知数
2. **输入输出的对应关系**：输入什么，程序处理什么，输出什么
3. **程序的执行顺序**：从上到下，一句一句执行

#### 难点（学生容易困惑的）
1. **赋值 vs 等于**：`a = 5` 是赋值，不是数学上的等于
2. **变量的变化**：变量可以被重新赋值，值会改变
3. **类型转换**：整数除法`5/2=2`，不是2.5

#### IOI教练的提醒
> L1的难点不在语法，在概念转变。
> 学生需要从数学思维（等式思维）转变为编程思维（过程思维）。
> 这个转变需要时间和大量练习。

### 8. 典型程序示例（.code-block）

**语言标签**：C++

**复制按钮**：包含

**代码内容**：
```cpp
// L1 典型程序：计算长方形面积
#include <iostream>
using namespace std;

int main() {
    // 输入
    int length, width;
    cin >> length >> width;
    
    // 处理
    int area = length * width;
    
    // 输出
    cout << "面积是：" << area << endl;
    
    return 0;
}
```

**程序分析**：
> 这个程序包含了L1的所有核心要素：
> - 输入：`cin`读取两个整数
> - 变量：`length`、`width`、`area`
> - 运算：乘法`*`
> - 输出：`cout`输出结果
> - 顺序结构：按顺序执行

**变体挑战**：
> 如果学生能独立完成这个程序，并能修改计算圆的面积、三角形的面积，说明L1达标。

### 9. 教学陷阱预警（.trap-box）

| 陷阱 | 现象 | 危害 | 链接 |
|------|------|------|------|
| 赋值当等于 | 学生认为`a = a + 1`是错的 | 无法理解累加、计数器 | 详细分析 → |
| 忽略类型 | 不知道`5/2=2` | 计算错误，调试困难 | 详细分析 → |
| 变量未初始化 | 使用未赋值的变量 | 随机值，程序行为不确定 | 详细分析 → |
| 混淆输入输出 | 不知道程序何时需要输入 | 程序挂起，学生困惑 | 详细分析 → |

**链接**：`./L1教学陷阱.html`（查看详细分析和解决方案）

### 10. 导航区域（CTA Section）

**标题**：进入 L1 详细内容

**导航卡片/按钮**：
1. **各课教案** → `./教案目录.html` 或列出4个知识点链接
2. **L1 升级检验标准** → `./L1升级检验标准.html`
3. **L1 教学陷阱详解** → `./L1教学陷阱.html`
4. **L1 综合练习题** → `./L1综合练习.html`
5. **进入 L2 概览** → `../L2编程二级嵌套期/index.html`

### 11. 页脚

标准页脚，包含版权信息、相关链接等。

---

## CSS 样式要求

### L1主题色
```css
--level1: #4caf7d;  /* L1 绿色 */
```

### 数据卡片样式
```css
.data-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  text-align: center;
  border-top: 4px solid var(--level1);
}
.data-card .number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--level1);
  font-family: var(--font-serif);
}
```

### 知识点卡片样式
```css
.knowledge-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-5);
  transition: all var(--transition-base);
  border-left: 4px solid var(--level1);
}
.knowledge-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}
```

### 代码块样式
```css
.code-block {
  background: var(--bg-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.code-block pre {
  padding: var(--sp-4);
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
}
```

### 关系图样式
```css
.level-relation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-4);
}
.level-box {
  background: var(--bg-card);
  border: 2px solid var(--level1);
  border-radius: var(--radius-lg);
  padding: var(--sp-5) var(--sp-8);
  text-align: center;
}
```

---

## 技术要求

### HTML结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>L1 编程一级启蒙期 · GESP C++ IOI教练重构版</title>
  <meta name="description" content="L1级别概览：24课时，学习输入输出、变量、运算，建立编程基本概念">
  <!-- 字体和图标 -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <!-- CSS文件 -->
  <link rel="stylesheet" href="../../assets/css/base.css">
  <link rel="stylesheet" href="../../assets/css/layout.css">
  <link rel="stylesheet" href="../../assets/css/components.css">
  <link rel="stylesheet" href="../../assets/css/level.css">
  <style>
    /* 页面特定样式 */
    .level-theme-color { color: var(--level1); }
    .level-theme-bg { background: var(--level1); }
    .level-theme-border { border-color: var(--level1); }
  </style>
</head>
<body>
  <!-- 页面内容 -->
</body>
</html>
```

### 响应式设计
- 4个知识点卡片在桌面端 2x2 网格，在移动端单列
- 数据卡片在桌面端横向排列，在移动端纵向排列
- 代码块支持横向滚动
- 关系图在移动端简化显示

### 滚动动画
```javascript
// 滚动显示动画
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

---

## 质量检查清单

### 内容检查
- [ ] Hero区域展示L1关键数据（24课时、4个核心概念、能力目标）
- [ ] 核心信息卡完整（年级、课时、目标、依赖）
- [ ] 知识点卡片有4个，包含图标、内容、课时、链接
- [ ] 说明涉及的能力主线（数学工具线-ASCII）
- [ ] 有前后级别关系图（零基础→L1→L2）
- [ ] 列出教学重点与难点
- [ ] 有典型程序示例（计算长方形面积）和变体挑战
- [ ] 有教学陷阱预警表格（4个陷阱）
- [ ] 导航区域完整（教案、检验标准、陷阱、练习、下一级别）

### 技术检查
- [ ] 使用L1绿色（--level1: #4caf7d）作为主题色
- [ ] CSS文件引用路径正确（../../assets/css/）
- [ ] 数据卡片突出显示
- [ ] 代码块有语法高亮效果
- [ ] 导航链接路径正确
- [ ] 包含响应式设计
- [ ] 包含滚动动画

---

## 输出要求

**直接输出完整的 HTML 代码，不要省略任何部分。**

特别注意：
1. 使用L1绿色系（--level1: #4caf7d）作为主题色
2. CSS文件路径使用相对路径 `../../assets/css/`
3. 数据卡片要突出24课时、4个核心概念等关键数据
4. 典型程序示例要完整可运行
5. 保持IOI教练的第一人称叙述风格
6. 所有导航链接路径正确
7. 使用标准的组件类名（.lv-summary, .lv-topic-grid, .lv-transition, .trap-box, .code-block等）

---

**这个页面是L1级别的入口，要让访问者清晰了解：L1学什么、学多久、达到什么标准、有哪些陷阱需要注意。**
