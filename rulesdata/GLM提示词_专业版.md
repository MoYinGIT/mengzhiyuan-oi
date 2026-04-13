# GLM-5 专业提示词：IOI金牌教练教案网站生成

## 🎯 角色定位

你现在是 **GLM-5 Code Generator**，受全球顶尖IOI金牌教练、前端架构师、技术文档专家三重身份指导，负责生成一套工业级标准的C++算法竞赛教学网站。

---

## 📋 项目背景

**项目名称**: 蒙知苑·OI (mengzhiyuan-oi)  
**目标受众**: GESP考级学生、CSP-J/S备赛选手、信息学奥赛初学者至提高组  
**教学理念**: 从IOI金牌教练视角，传授真正的算法思维而非应试技巧  
**总课时**: 328小时（8个阶段，每阶段约40小时）

### 六大铁律（贯穿所有教案）
1. **考级≠目标** - 不要为了考级而学习
2. **主线优先** - 八级体系比考级重要10倍
3. **三遍学习法** - 预习→课堂→复习，缺一不可
4. **拒绝死记硬背** - 理解原理后再记忆
5. **基础不可跳** - L1-L8必须逐级通关
6. **检查机制＞内容本身** - 教会学生如何自查

---

## 🗂️ 目录结构要求

生成以下完整目录结构，每个文件夹和文件都需有实际内容：

```
mengzhiyuan-oi/
│
├── 📄 网站根文件
│   ├── index.html                    # 首页（必须精美，含8级卡片、主线入口）
│   ├── README.md                     # 项目说明（GitHub风格）
│   ├── .nojekyll                     # GitHub Pages配置（空文件）
│   └── CNAME                         # 可选：自定义域名配置
│
├── 🗂️ .github/workflows/
│   └── deploy.yml                    # GitHub Actions自动部署
│
├── 🗂️ assets/                       # 静态资源（核心）
│   ├── css/
│   │   ├── base.css                 # CSS变量、重置样式
│   │   ├── layout.css               # 布局系统、导航、侧边栏
│   │   ├── components.css           # 通用组件（按钮、卡片、标签）
│   │   └── teaching-visuals.css     # ⭐ 教学可视化组件（见下方详细规范）
│   │
│   ├── js/
│   │   ├── main.js                  # 导航、主题、移动端菜单
│   │   └── teaching-visuals.js      # ⭐ 可视化组件脚本（懒加载）
│   │
│   └── images/
│       └── favicon.svg              # SVG格式的网站图标
│
├── 🗂️ levels/                       # 八级教案（核心内容）
│   ├── L1-编程一级-启蒙期/
│   │   ├── index.html               # L1首页（含课时统计、知识点地图）
│   │   └── lessons/
│   │       ├── L1-01-变量与数据类型.html
│   │       ├── L1-02-运算符与表达式.html
│   │       ├── L1-03-顺序结构.html
│   │       ├── L1-04-选择结构-if.html
│   │       ├── L1-05-选择结构-switch.html
│   │       ├── L1-06-循环结构-for.html
│   │       ├── L1-07-循环结构-while.html
│   │       ├── L1-08-循环嵌套.html
│   │       └── index.html           # 课时导航页
│   │
│   ├── L2-编程二级-嵌套期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L2-01-多重循环.html
│   │       ├── L2-02-循环控制-break-continue.html
│   │       ├── L2-03-字符与ASCII.html
│   │       ├── L2-04-字符串基础.html
│   │       ├── L2-05-枚举算法.html
│   │       └── index.html
│   │
│   ├── L3-编程三级-数组期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L3-01-一维数组.html
│   │       ├── L3-02-二维数组.html
│   │       ├── L3-03-数组越界与内存.html
│   │       ├── L3-04-前缀和.html
│   │       ├── L3-05-简单DP入门.html
│   │       └── index.html
│   │
│   ├── L4-编程四级-函数期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L4-01-函数定义与调用.html
│   │       ├── L4-02-参数传递.html
│   │       ├── L4-03-递归基础.html
│   │       ├── L4-04-分治算法.html
│   │       ├── L4-05-排序算法.html
│   │       └── index.html
│   │
│   ├── L5-编程五级-递归期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L5-01-递归深入.html
│   │       ├── L5-02-回溯算法.html
│   │       ├── L5-03-记忆化搜索.html
│   │       ├── L5-04-DFS与BFS基础.html
│   │       └── index.html
│   │
│   ├── L6-编程六级-搜索期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L6-01-深度优先搜索.html
│   │       ├── L6-02-广度优先搜索.html
│   │       ├── L6-03-剪枝优化.html
│   │       ├── L6-04-双向BFS.html
│   │       └── index.html
│   │
│   ├── L7-编程七级-图论期/
│   │   ├── index.html
│   │   └── lessons/
│   │       ├── L7-01-图的基础概念.html
│   │       ├── L7-02-图的存储.html
│   │       ├── L7-03-最短路算法.html
│   │       ├── L7-04-最小生成树.html
│   │       └── index.html
│   │
│   └── L8-编程八级-综合期/
│       ├── index.html
│       └── lessons/
│           ├── L8-01-高级数据结构.html
│           ├── L8-02-动态规划进阶.html
│           ├── L8-03-网络流基础.html
│           ├── L8-04-综合项目实战.html
│           └── index.html
│
├── 🗂️ mainlines/                    # 五条能力主线
│   ├── index.html                   # 主线总览页
│   ├── recursion-line/              # 递归线（L3开始）
│   │   ├── index.html
│   │   ├── 01-递归思维建立.html
│   │   ├── 02-分治与递归.html
│   │   ├── 03-回溯与递归.html
│   │   └── 04-树形DP与递归.html
│   │
│   ├── array-dp-line/               # 数组DP线（L3开始）
│   │   ├── index.html
│   │   ├── 01-前缀和基础.html
│   │   ├── 02-线性DP.html
│   │   ├── 03-区间DP.html
│   │   └── 04-状态压缩DP.html
│   │
│   ├── sort-divide-line/            # 排序分治线（L4开始）
│   │   ├── index.html
│   │   ├── 01-基础排序.html
│   │   ├── 02-归并排序与逆序对.html
│   │   ├── 03-快速排序.html
│   │   └── 04-二分与分治.html
│   │
│   ├── graph-line/                  # 图论线（L6开始）
│   │   ├── index.html
│   │   ├── 01-图的遍历.html
│   │   ├── 02-最短路算法.html
│   │   ├── 03-生成树与连通性.html
│   │   └── 04-拓扑排序.html
│   │
│   └── math-tool-line/              # 数学工具线（贯穿）
│       ├── index.html
│       ├── 01-数论基础.html
│       ├── 02-组合数学.html
│       ├── 03-概率与期望.html
│       └── 04-计算几何入门.html
│
├── 🗂️ philosophy/                   # 教学理念与方法论
│   ├── index.html                   # 理念总览
│   ├── six-iron-laws.html           # 六大铁律详解
│   ├── three-pass-learning.html     # 三遍学习法
│   ├── self-check-system.html       # 自查机制设计
│   └── coach-perspective.html       # IOI教练视角
│
└── 🗂️ resources/                    # 学习资源
    ├── index.html                   # 资源导航
    ├── tools/
    │   ├── index.html               # 推荐工具（IDE、OJ平台）
    │   └── online-judges.html       # OJ平台对比
    ├── books/
    │   ├── index.html               # 推荐书籍
    │   └── reading-guide.html       # 阅读路线图
    └── templates/
        ├── index.html               # 代码模板库
        └── fast-io-template.cpp     # 快读模板示例
```

---

## 🎨 设计系统规范（必须严格遵守）

### 色彩系统

```css
:root {
  /* 背景色 */
  --bg-deep: #0a0a0c;        /* 最深背景 */
  --bg-card: #14141b;        /* 卡片背景 */
  --bg-elevated: #1e1e28;    /* 悬浮背景 */
  --bg-hover: rgba(255,255,255,0.03);
  
  /* 文字色 */
  --fg: #e8e8ec;             /* 主文字 */
  --fg-dim: #a0a0b0;         /* 次要文字 */
  --fg-muted: #70707c;       /* 辅助文字 */
  
  /* 边框 */
  --border: #2a2a35;
  --border-hover: #3a3a47;
  
  /* 强调色 */
  --primary: #4caf7d;        /* L1绿 */
  --accent: #d4a44c;         /* L3金 */
  --red: #e05555;
  
  /* 八级颜色体系 */
  --level1: #4caf7d;  --level1-dim: rgba(76, 175, 125, 0.15);
  --level2: #5bb896;  --level2-dim: rgba(91, 184, 150, 0.15);
  --level3: #d4a44c;  --level3-dim: rgba(212, 164, 76, 0.15);
  --level4: #e08a3a;  --level4-dim: rgba(224, 138, 58, 0.15);
  --level5: #e05555;  --level5-dim: rgba(224, 85, 85, 0.15);
  --level6: #c74a7a;  --level6-dim: rgba(199, 74, 122, 0.15);
  --level7: #9a5cd0;  --level7-dim: rgba(154, 92, 208, 0.15);
  --level8: #4aafbf;  --level8-dim: rgba(74, 175, 191, 0.15);
  
  /* 字体 */
  --font-sans: system-ui, -apple-system, 'Segoe UI', 'PingFang SC', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  
  /* 间距 */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px;  --sp-4: 16px;
  --sp-5: 20px; --sp-6: 24px; --sp-8: 32px;  --sp-10: 40px;
  
  /* 圆角 */
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
  
  /* 阴影 */
  --shadow: 0 4px 12px rgba(0,0,0,0.3);
}
```

### 响应式断点
- Desktop: > 1024px
- Tablet: 768px - 1024px  
- Mobile: < 768px

---

## ⭐ 教学可视化组件规范（核心）

所有教案页面**禁止使用ASCII Art**，必须使用以下可视化组件：

### 1. 内存布局组件 (data-type="memory")
用于展示变量在内存中的存储方式。

```html
<!-- 使用示例 -->
<div data-type="memory" data-memory='[
  {"addr": "0x7ffe", "cells": ["05", "00", "00", "00"], "var": "int a = 5;", "changed": [0]},
  {"addr": "0x7ffa", "cells": ["0a", "00", "00", "00"], "var": "int b = 10;", "changed": [0]}
]'></div>
```

### 2. 变量跟踪表 (data-type="tracker")
用于跟踪代码执行过程中变量的变化。

```html
<div data-type="tracker" data-tracker='{
  "headers": ["步骤", "a", "b", "sum"],
  "rows": [
    [{"value":"初始"}, {"value":"?"}, {"value":"?"}, {"value":"?"}],
    [{"value":"a=5"}, {"value":"5","highlight":true}, {"value":"?"}, {"value":"?"}],
    [{"value":"b=3"}, {"value":"5"}, {"value":"3","highlight":true}, {"value":"?"}],
    [{"value":"sum=a+b"}, {"value":"5"}, {"value":"3"}, {"value":"8","highlight":true}]
  ]
}'></div>
```

### 3. Mermaid流程图 (data-type="mermaid")
用于展示算法流程、程序结构。

```html
<div data-type="mermaid">
flowchart TD
    A[开始] --> B{条件判断}
    B -->|条件成立| C[执行语句块]
    C --> D[更新状态]
    D --> B
    B -->|条件不成立| E[结束]
</div>
```

### 组件CSS规范
每个组件必须有：
- 暗色主题适配
- Hover交互效果
- 键盘导航支持（tabindex）
- 高亮动画（changed/highlight状态）
- 响应式适配

---

## 📝 教案内容规范

### 每课时HTML必须包含

1. **头部信息**
   - 课时编号、标题
   - 所属级别、预计时长
   - 前置知识、后续关联

2. **教学目标**
   - 知识目标（知道什么）
   - 技能目标（会做什么）
   - 思维目标（理解什么）

3. **核心内容**
   - 概念讲解（使用可视化组件）
   - 代码示例（语法高亮）
   - 执行流程（Mermaid图）
   - 内存变化（内存布局组件）

4. **IOI教练视角**
   - 常见错误预警
   - 调试技巧
   - 思维训练点
   - 与竞赛的关联

5. **练习设计**
   - 基础练习（必做）
   - 提高练习（选做）
   - 思考题（拓展）

6. **自查清单**
   - 学生自我检查项
   - 常见错误对照

### 代码示例规范

```html
<pre><code class="language-cpp">// 必须有详细注释
#include &lt;iostream&gt;
using namespace std;

int main() {
    // 1. 变量声明
    int n;           // 存储数据个数
    cin >> n;        // 从标准输入读取
    
    // 2. 循环读取
    for (int i = 0; i < n; i++) {
        // ...
    }
    
    return 0;
}
</code></pre>
```

---

## 🔧 技术栈要求

- **纯静态网站**: HTML5 + CSS3 + JavaScript (ES6+)
- **无构建工具**: 直接部署到GitHub Pages
- **CSS变量**: 使用CSS Custom Properties实现主题
- **懒加载**: 使用IntersectionObserver延迟加载可视化组件
- **Mermaid**: 使用CDN引入，支持流程图、时序图等
- **响应式**: Mobile-first设计，断点768px和1024px

---

## 📤 输出要求

### 文件格式
- 每个文件以代码块形式输出
- 文件路径作为代码块标题
- 中文内容使用UTF-8编码
- 使用2空格缩进

### 输出顺序
按以下顺序依次生成：

1. **基础架构**（一次性输出）
   - assets/css/base.css
   - assets/css/layout.css
   - assets/css/components.css
   - assets/css/teaching-visuals.css
   - assets/js/main.js
   - assets/js/teaching-visuals.js
   - index.html (首页)

2. **各级别内容**（每级一组）
   - L1: 级别首页 + 所有课时
   - L2: 级别首页 + 所有课时
   - ...以此类推至L8

3. **主线内容**（每线一组）
   - mainlines/index.html
   - 递归线所有页面
   - 数组DP线所有页面
   - ...以此类推

4. **理念与资源**（一次性输出）
   - philosophy/ 所有页面
   - resources/ 所有页面
   - GitHub Actions配置
   - README.md

### 内容深度要求
- **每个课时**: 3000-5000字正文 + 3-5个代码示例 + 2-3个可视化组件
- **每个级别首页**: 包含知识点思维导图（Mermaid）、课时统计、学习建议
- **主线页面**: 纵向串联知识点，强调能力递进关系

---

## ✅ 质量检查清单

生成每个文件后，请自检：

- [ ] HTML结构语义化（header、main、nav、article等）
- [ ] 所有路径使用相对路径（./ ../）
- [ ] CSS和JS文件正确引用
- [ ] 可视化组件 data-type 属性设置正确
- [ ] JSON数据格式合法（无尾随逗号）
- [ ] 暗色主题文字可读（对比度>4.5:1）
- [ ] 移动端布局正常（max-width: 100%）
- [ ] 包含IOI教练视角内容（不仅仅是教科书式讲解）

---

## 🚀 开始生成

请确认已理解以上所有规范，然后开始生成 **基础架构** 部分。

生成完成后，我会回复 "继续生成L1" 来指示生成下一部分内容。
