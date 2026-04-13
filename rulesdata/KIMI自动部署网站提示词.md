# 🎯 IOI金牌教练教案网站生成提示词（Kimi Code专用）
## 📋 项目核心信息
- **项目名称**：蒙知苑·OI (mengzhiyuan-oi)
- **目标受众**：GESP考级学生、CSP-J/S备赛选手、信息学奥赛初学者至提高组
- **教学理念**：IOI金牌教练视角，传授算法思维而非应试技巧
- **总课时**：328小时（8个阶段，每阶段约40小时）
- **部署方式**：本地MAC笔记本，纯静态网站（HTML5 + CSS3 + JavaScript）
## 🗂️ 目录结构生成要求
严格按照以下目录结构生成文件，每个文件需包含实际内容：
```
mengzhiyuan-oi/
├── assets/
│   ├── css/
│   │   ├── base.css          # 全局变量、重置样式（必须包含：--bg-deep、--fg、--level1~8等变量）
│   │   ├── layout.css        # 布局系统（导航栏、侧边栏、容器）
│   │   ├── components.css    # 通用组件（按钮、卡片、标签等22类）
│   │   ├── teaching-visuals.css # 教学可视化组件（内存布局、变量跟踪表、Mermaid）
│   │   ├── level.css         # 八级颜色映射（.level-1~8）
│   │   ├── philosophy.css    # 理念板块专属组件（铁律卡片、对比块）
│   │   └── mainline.css      # 主线板块专属组件（时间线、交叉矩阵）
│   ├── js/
│   │   ├── main.js           # 导航、主题切换、移动端菜单
│   │   └── teaching-visuals.js # 可视化组件懒加载（IntersectionObserver）
│   └── images/
│       └── favicon.svg      # SVG网站图标
├── levels/
│   ├── L1-编程一级-启蒙期/
│   │   ├── index.html        # L1级别概览（知识点地图、课时统计）
│   │   └── lessons/
│   │       ├── L1-01-变量与数据类型.html
│   │       ├── L1-02-运算符与表达式.html
│   │       └── ...（共8个课时）
│   ├── L2-编程二级-嵌套期/
│   │   └── ...（同L1结构）
│   └── ...（L3~L8）
├── mainlines/
│   ├── index.html           # 五条主线总览
│   ├── recursion-line/
│   │   ├── index.html       # 递归线详情
│   │   └── 01-递归思维建立.html
│   └── ...（数组DP线、排序分治线等）
├── philosophy/
│   ├── index.html           # 教学理念总览
│   ├── six-iron-laws.html    # 六大铁律详解
│   └── three-pass-learning.html # 三遍学习法
├── resources/
│   ├── index.html           # 资源导航
│   ├── tools/
│   │   ├── index.html       # 推荐工具
│   └── books/
│       ├── index.html       # 推荐书籍
├── index.html              # 首页（含8级卡片、主线入口）
├── README.md               # 项目说明
├── .nojekyll               # GitHub Pages配置
└── deploy.yml              # GitHub Actions部署（可选）
```
## 🎨 设计系统规范（必须严格遵守）
### CSS变量体系
```css
:root {
  --bg-deep: #0a0a0c;       /* 最深背景 */
  --bg-card: #14141b;       /* 卡片背景 */
  --bg-elevated: #1e1e28;   /* 悬浮背景 */
  --fg: #e8e8ec;           /* 主文字 */
  --level1: #4caf7d;        /* L1绿 */
  --level2: #5bb896;        /* L2青 */
  --level3: #d4a44c;        /* L3金 */
  --level4: #e08a3a;        /* L4橙 */
  --level5: #e05555;        /* L5红 */
  --level6: #c74a7a;        /* L6粉 */
  --level7: #9a5cd0;        /* L7紫 */
  --level8: #4aafbf;        /* L8蓝 */
  --font-mono: 'JetBrains Mono', monospace;
  --sp-4: 16px;            /* 间距基准 */
}
```
### 响应式断点
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
## ⭐ 教学可视化组件规范
所有教案页面**禁止使用ASCII Art**，必须使用以下组件：
### 1. 内存布局组件（data-type="memory"）
```html
<div data-type="memory" data-memory='[
  {"addr": "0x7ffe", "cells": ["05", "00", "00", "00"], "var": "int a = 5;", "changed": [0]}
]'></div>
```
### 2. 变量跟踪表（data-type="tracker"）
```html
<div data-type="tracker" data-tracker='{
  "headers": ["步骤", "a", "b"],
  "rows": [
    [{"value":"初始"}, {"value":"?"}, {"value":"?"}],
    [{"value":"a=5", "highlight":true}, {"value":"5"}, {"value":"?"}]
  ]
}'></div>
```
### 3. Mermaid流程图（data-type="mermaid"）
```html
<div data-type="mermaid">
flowchart TD
  A[开始] --> B{条件判断}
  B -->|是| C[执行语句]
  C --> D[结束]
</div>
```
## 📝 教案内容规范
### 每课时HTML必须包含：
1. **头部信息**：课时编号、标题、所属级别、预计时长
2. **教学目标**：知识/技能/思维目标（用`goal-list`组件）
3. **核心内容**：
   - 概念讲解（使用可视化组件）
   - 代码示例（语法高亮，带详细注释）
   - 执行流程（Mermaid图）
   - 内存变化（内存布局组件）
4. **IOI教练视角**：
   - 常见错误预警（用`trap-box`组件）
   - 调试技巧
   - 思维训练点
5. **练习设计**：基础/提高/思考题（用`checklist-box`组件）
6. **自查清单**：学生自我检查项
### 代码示例规范
```html
<pre><code class="language-cpp">// 必须有详细注释
#include <iostream>
using namespace std;
int main() {
  int n; cin >> n;  // 从标准输入读取数据个数
  return 0;
}
</code></pre>
```
## 🔧 技术栈要求
- **纯静态网站**：HTML5 + CSS3 + JavaScript (ES6+)
- **懒加载**：使用`IntersectionObserver`延迟加载可视化组件
- **Mermaid**：通过CDN引入（https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js）
- **按需加载**：理念/主线页面仅加载对应CSS（如philosophy.css、mainline.css）
## 📤 生成顺序与质量检查
### 生成顺序：
1. **基础架构**（一次性输出）：
   - assets/css/base.css
   - assets/css/layout.css
   - assets/css/components.css
   - assets/css/teaching-visuals.css
   - assets/js/main.js
   - assets/js/teaching-visuals.js
   - index.html
2. **各级别内容**（L1~L8，每级一组）：
   - 级别首页 + 所有课时
3. **主线内容**（每线一组）：
   - mainlines/index.html + 各主线详情页
4. **理念与资源**（一次性输出）：
   - philosophy/所有页面
   - resources/所有页面
### 质量检查清单（生成后自检）：
- [ ] HTML语义化（header、main、nav等）
- [ ] 相对路径正确（./ ../）
- [ ] 可视化组件`data-type`属性设置正确
- [ ] JSON数据格式合法（无尾随逗号）
- [ ] 暗色主题文字可读（对比度>4.5:1）
- [ ] 移动端布局正常（max-width: 100%）
## 🚀 IOI教练教学铁律（贯穿所有内容）
1. **考点≠目标**：教内存地址概念而非指针语法
2. **主线优先**：递归线从L3开始，前缀和与一维数组同步教
3. **三遍学习法**：裸用→组合→变体（用`three-pass`组件可视化）
4. **拒绝死记硬背**：排序从"为什么排"引入，递归从"拆子问题"引入
5. **基础不可跳**：L1必须讲清内存模型，L3必须建立数组思维
6. **检查机制＞内容**：每课时包含自查清单（`checklist-box`）
---
## 📌 提示词执行指令
请按照以上规范，**优先生成基础架构文件**（assets/css/下的4个CSS文件 + assets/js/下的2个JS文件 + index.html），确保：
1. CSS变量定义完整，组件样式符合暗色主题
2. JavaScript实现懒加载和Mermaid初始化
3. 首页包含8级卡片、主线入口，体现IOI教练视角
4. 所有路径使用相对路径，代码可本地直接运行
生成完成后，我将回复"继续生成L1"以推进下一阶段。
