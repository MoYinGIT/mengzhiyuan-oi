# GLM5 提示词：生成 L1升级检验标准.html

## 角色设定

你是全球最顶级的 IOI 教练。

## 任务

生成 `levels/L1编程一级启蒙期/L1升级检验标准.html`

## 页面定位

- 所属板块：八级教案体系 > L1
- 上级页面：./index.html
- 使用L1绿色：--level1: #4caf7d

## CSS 加载

加载 base.css, layout.css, components.css, level.css

## 核心内容

### 三维度检验清单

1. 知识掌握（40%）
   - 必须项：Hello World、类型区别、cin/cout、变量声明、赋值运算符
   - 期望项：sizeof、除法区别、ASCII码

2. 能力应用（40%）
   - 必须项：两数求和、长方形计算、温度转换、时间转换、调试错误
   - 期望项：加权平均、数字拆分、15分钟解题

3. 思维建立（20%）
   - 必须项：指令序列认知、先思考后编码、读错误信息
   - 期望项：内存盒子示意图、解释类型差异、持续兴趣

### 变体题检验

3道变体题：长方形到圆、两数交换到三数交换、简单平均到加权平均

### 评分标准

A级：全部必须项 + 期望项≥80%
B级：全部必须项 + 期望项≥60%
C级：必须项1-2项不达标
D级：必须项超过2项不达标

## 重要规则（必须遵守）

### 复选框样式规则

**必须使用 flex 布局实现复选框对齐：**

```css
.checklist-box li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.checklist-box input[type="checkbox"] {
  margin-top: 3px;
  flex-shrink: 0;
}
.checklist-box .cl-text {
  flex: 1;
}
```

**HTML结构：**
```html
<li>
  <input type="checkbox">
  <span class="cl-text">必须：能正确写出...</span>
</li>
```

**禁止：**
- 禁止使用 position: absolute 定位复选框
- 禁止使用 padding-left + left: 0 的组合

**生成后检查：**
- [ ] 复选框是否与文字垂直对齐
- [ ] 多行文字时复选框是否保持在第一行
- [ ] 整体布局是否美观

## 质量检查清单

- [ ] 三维度检验清单完整
- [ ] 复选框使用 flex 布局
- [ ] 复选框位置正确
- [ ] 使用L1绿色主题
- [ ] 导航路径正确


---

## 详细内容规范

### 1. 导航栏（.top-bar）

- 品牌链接返回 ../../index.html
- 导航链接：教学理念、能力主线、八级体系（active）、教学节奏、辅助资源

### 2. Hero区域（.page-header）

面包屑：八级体系 > L1 > 升级检验标准

标签：升级检验（使用L1绿色）

主标题：L1 升级检验标准

副标题：从 L1 晋升到 L2 的能力门槛——不是考过试，而是真掌握

IOI教练引言：
- 考试通过不等于真实能力
- 有学生 GESP 一级考了 90 分，却连变量未初始化的错误都看不出来
- 这份检验标准不是考试大纲，而是真实能力的底线
- 铁律：检验标准大于教学内容。能独立解决变体题才算真会。

### 3. 核心信息卡（.lv-summary）

表格内容：
- 检验目标：从 L1（启蒙期）晋升到 L2（嵌套期）
- 检验维度：知识掌握 40% + 能力应用 40% + 思维建立 20%
- 通过标准：全部必须项达标，期望项达标率≥60%
- 检验方式：变体题测试 + 代码审查 + 口头问答
- 建议时机：完成 L1 全部内容后，进入 L2 前

### 4. 三维度检验清单（.checklist-section）

每个维度使用 .checklist-box 组件，包含多个复选框列表项。

**维度一：知识掌握（40%）**
- 说明：基础语法和概念的准确理解
- 必须项5条、期望项3条
- 每项使用 li > input + span.cl-text 结构

**维度二：能力应用（40%）**
- 说明：独立编写程序解决实际问题的能力
- 必须项5条、期望项3条

**维度三：思维建立（20%）**
- 说明：编程思维和正确的工作习惯
- 必须项3条、期望项3条

### 5. 变体题检验（核心部分）

标题：变体题实战检验

说明：这是最重要的检验环节。变体题是课堂例题的变形，能真实检验学生是否理解原理，而非背诵代码。

3道变体题：
1. 长方形到圆：输入半径计算圆面积
2. 两数交换到三数交换：三个数循环交换
3. 简单平均到加权平均：三门课加权平均

每道题包含：原题、变体、通过标准、检验点

### 6. 评分标准与决策树

表格：等级、标准、决策

A级优秀：全部必须项 + 期望项≥80% → 可直接进入L2
B级合格：全部必须项 + 期望项≥60% → 进入L2，需补强薄弱环节
C级待提升：必须项有1-2项不达标 → 针对性补习后再检验
D级不合格：必须项有超过2项不达标 → 必须重新学习L1

### 7. 教练寄语（.alert-tip）

内容：
- 不要因为赶进度而降低标准
- L1的基础扎实程度直接决定L2的学习效率
- 宁愿多花2周夯实基础，也不要带着漏洞进入下一级
- 记住：慢就是快

### 8. 导航区域

- 返回 L1 概览
- L1 教学陷阱
- L1 综合练习
- 进入 L2 概览

### 9. 页脚

标准页脚

---

## CSS 详细规范

### 复选框列表（重点！）

```css
.checklist-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  margin-bottom: var(--sp-6);
}

.checklist-box h3 {
  color: var(--level1);
  margin-bottom: var(--sp-4);
}

.checklist-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 关键：使用flex布局实现对齐 */
.checklist-box li {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-3);
  margin-bottom: var(--sp-3);
  line-height: 1.6;
}

.checklist-box input[type="checkbox"] {
  margin-top: 3px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.checklist-box .cl-text {
  flex: 1;
  color: var(--fg);
}

/* 必须/期望标签 */
.checklist-box .tag-must {
  color: var(--red);
  font-weight: 600;
  margin-right: 4px;
}

.checklist-box .tag-expect {
  color: var(--accent);
  font-weight: 600;
  margin-right: 4px;
}
```

### HTML结构示例

```html
<div class="checklist-box">
  <h3>维度一：知识掌握（40%）</h3>
  <p class="checklist-desc">基础语法和概念的准确理解</p>
  <ul class="cl-list">
    <li>
      <input type="checkbox" id="k1">
      <span class="cl-text">
        <span class="tag-must">必须</span>：能正确写出完整的 Hello World 程序
      </span>
    </li>
    <li>
      <input type="checkbox" id="k2">
      <span class="cl-text">
        <span class="tag-expect">期望</span>：能使用 sizeof() 查看类型大小
      </span>
    </li>
  </ul>
</div>
```

---

## 质量检查清单

### 内容检查
- [ ] Hero区域有IOI教练引言
- [ ] 核心信息卡完整（5项信息）
- [ ] 三维度检验清单完整（每维度8项）
- [ ] 每项有必须/期望标识
- [ ] 有变体题检验部分（3道题）
- [ ] 有评分标准和决策树
- [ ] 有教练寄语

### 技术检查（重要！）
- [ ] 复选框使用 flex 布局（display: flex）
- [ ] 复选框与文字垂直对齐正确
- [ ] 多行文字时复选框保持在第一行
- [ ] 使用L1绿色作为主题色
- [ ] CSS路径正确（../../assets/css/）
- [ ] 导航路径正确

### 复选框专项检查
**生成后必须验证：**
1. 打开生成的HTML文件
2. 检查每个复选框是否与右侧文字对齐
3. 缩小窗口，检查多行文字时复选框位置
4. 确保没有使用 position: absolute

**如果复选框位置不正确：**
- 将 li 的样式改为 display: flex
- 将 input 的样式改为 margin-top: 3px; flex-shrink: 0
- 添加 span.cl-text 包裹文字内容

---

## 输出要求

**直接输出完整的 HTML 代码，不要省略任何部分。**

特别注意：
1. 复选框必须使用 flex 布局实现对齐
2. 禁止对复选框使用 absolute 定位
3. 生成后自我检查复选框位置是否正确
4. 保持IOI教练的第一人称叙述风格
5. 所有导航链接路径正确

**检查清单最后一条：复选框位置是否正确？** 如果不正确，调整CSS为flex布局。
