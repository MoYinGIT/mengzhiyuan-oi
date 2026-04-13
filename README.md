# 蒙知苑·OI · IOI金牌教练教案体系

> 从IOI金牌教练视角，传授真正的算法思维而非应试技巧。

## 🎯 项目简介

这不是对GESP大纲的翻译，而是一名IOI教练对算法竞赛教学的重新解读与重构。

- **总课时**: 328小时
- **学习周期**: 约2年（82周）
- **目标受众**: GESP考级学生、CSP-J/S备赛选手、信息学奥赛初学者至提高组
- **教学理念**: 培养真正的算法思维，而非应试技巧

## 📁 项目结构

```
mengzhiyuan-oi/
├── assets/
│   ├── css/           # 样式文件
│   │   ├── base.css              # 全局变量、重置样式
│   │   ├── layout.css            # 布局系统
│   │   ├── components.css        # 通用组件
│   │   └── teaching-visuals.css  # 教学可视化组件
│   └── js/            # 脚本文件
│       ├── main.js               # 导航、主题切换
│       └── teaching-visuals.js   # 可视化组件懒加载
├── levels/            # 八级教案
│   ├── L1-编程一级-启蒙期/
│   ├── L2-编程二级-嵌套期/
│   ├── ...（L3-L8）
├── mainlines/         # 五条能力主线
│   ├── recursion-line/      # 递归线
│   ├── array-dp-line/       # 数组DP线
│   ├── sort-divide-line/    # 排序分治线
│   ├── graph-line/          # 图论线
│   └── math-tool-line/      # 数学工具线
├── philosophy/        # 教学理念
├── resources/         # 学习资源
└── index.html         # 网站首页
```

## 🚀 本地开发

本项目是纯静态网站，无需构建工具。

### 方式一：Python HTTP服务器

```bash
cd mengzhiyuan-oi
python3 -m http.server 5500
```

然后访问 http://localhost:5500

### 方式二：VS Code Live Server

安装 Live Server 插件，右键点击 `index.html` → "Open with Live Server"

### 方式三：Node.js http-server

```bash
npx http-server -p 5500
```

## 🎨 设计系统

### 八级颜色体系

| 级别 | 颜色 | 色值 |
|------|------|------|
| L1 | 绿 | `#4caf7d` |
| L2 | 青绿 | `#5bb896` |
| L3 | 金 | `#d4a44c` |
| L4 | 橙 | `#e08a3a` |
| L5 | 红 | `#e05555` |
| L6 | 紫红 | `#c74a7a` |
| L7 | 紫 | `#9a5cd0` |
| L8 | 青 | `#4aafbf` |

### 可视化组件

所有教案页面使用可视化组件替代ASCII Art：

1. **内存布局组件** (`data-type="memory"`) - 展示变量内存存储
2. **变量跟踪表** (`data-type="tracker"`) - 跟踪代码执行过程
3. **Mermaid流程图** (`data-type="mermaid"`) - 展示算法流程

## 📝 六条教学铁律

1. **考点 ≠ 教学目标** - 考指针不是教指针，是教内存地址概念
2. **主线优先于级别** - 递归线必须L3启动，前缀和必须和一维数组同步教
3. **三遍学习法** - 裸用→组合→变体，跳过任何一遍学生只会背代码
4. **拒绝死记硬背** - 排序从"为什么排"引入，代码永远是最后一步
5. **基础不可跳** - 不理解内存分层就理解不了局部变量消失
6. **检验标准 > 内容** - 能独立解决变体题才算真会

## 📄 许可证

MIT License

---

**蒙知苑·OI** · 从编程启蒙到竞赛入门 · IOI金牌教练教案体系
