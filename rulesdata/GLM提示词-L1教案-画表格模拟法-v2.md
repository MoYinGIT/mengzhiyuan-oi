# GLM5 提示词：生成 L1教案-画表格模拟法.html（修正版）

## 角色设定

你是全球最顶级的 IOI 教练。

## 任务

生成 levels/L1编程一级启蒙期/教案：画表格模拟法.html

## 页面定位

- 所属板块：八级教案体系 > L1
- 上级页面：./index.html
- 使用L1绿色：--level1: #4caf7d

## CSS 加载

加载 base.css, layout.css, components.css, level.css

## 核心修正要求（重要！）

### 修正1：三个核心原则的序号渲染

**问题**：序号圆形与文字重叠或位置不正确

**正确渲染方式**：使用HTML有序列表或带样式的div，不要使用可能导致重叠的样式

```html
<!-- 正确方式：使用简单的div结构 -->
<div class="rule-item">
  <span class="rule-num">1</span>
  <span class="rule-text"><strong>变量名作为列</strong>——程序里有哪些变量，表格就有几列</span>
</div>
<div class="rule-item">
  <span class="rule-num">2</span>
  <span class="rule-text"><strong>执行步骤作为行</strong>——每执行一行代码，就在表格中新增一行</span>
</div>
<div class="rule-item">
  <span class="rule-num">3</span>
  <span class="rule-text"><strong>变化的值标红</strong>——用红笔标出这一步发生变化的位置</span>
</div>
```

**对应CSS**：
```css
.rule-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}
.rule-num {
  width: 24px;
  height: 24px;
  background: var(--level1);
  color: var(--bg-deep);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.rule-text {
  flex: 1;
  line-height: 1.6;
}
```

### 修正2：标准表格格式的渲染

**问题**：ASCII表格渲染不正确，没有等宽效果

**正确渲染方式**：使用pre标签包裹，确保等宽字体，或者使用HTML table

**方案A：使用pre+code（推荐用于黑板风格）**
```html
<div class="blackboard-design">
  <h4>标准表格格式</h4>
  <pre class="ascii-table"><code>+----------+-----+-----+-------+
| 执行步骤 |  a  |  b  |  输出 |
+----------+-----+-----+-------+
| 初始状态 |  ?  |  ?  |       |
| int a=3  |  3  |  ?  |       |
| int b=5  |  3  |  5  |       |
| a = b    |  5  |  5  |       |
| b = a    |  5  |  5  |       |
| cout...  |  5  |  5  |  5 5  |
+----------+-----+-----+-------+</code></pre>
  <p class="table-legend">
    <span class="green">绿色=正常值</span>
    <span class="red">红色=变化值</span>
    <span class="gray">灰色=未初始化</span>
  </p>
</div>
```

**对应CSS**：
```css
.blackboard-design {
  background: #1a1d21;
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  margin: var(--sp-4) 0;
}

.ascii-table {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  color: #a0a8b0;
  overflow-x: auto;
}

.ascii-table .green { color: var(--green); }
.ascii-table .red { color: var(--red); }
.ascii-table .gray { color: #666; }

.table-legend {
  margin-top: var(--sp-4);
  font-size: 14px;
}
```

**方案B：使用HTML table（如果需要复杂样式）**
```html
<table class="sim-table">
  <thead>
    <tr><th>执行步骤</th><th>a</th><th>b</th><th>输出</th></tr>
  </thead>
  <tbody>
    <tr><td>初始状态</td><td class="gray">?</td><td class="gray">?</td><td></td></tr>
    <tr><td>int a=3</td><td class="green">3</td><td class="gray">?</td><td></td></tr>
    <tr><td>int b=5</td><td>3</td><td class="green">5</td><td></td></tr>
    <tr><td>a = b</td><td class="red">5</td><td>5</td><td></td></tr>
    <tr><td>cout...</td><td>5</td><td>5</td><td class="green">5 5</td></tr>
  </tbody>
</table>
```

---

## 教案结构

### 1. 教案头部

- 教案名称：画表格模拟法——让程序执行看得见
- 所属模块：L1 学习方法论（核心技能课）
- 课时：2课时（90分钟）
- 课型：实践课
- 核心定位：培养手动模拟执行的调试思维

### 2. 教学目标

知识目标：理解画表格模拟法的原理、掌握变量跟踪表设计、逐步跟踪程序执行
能力目标：独立画表格、通过表格发现错误、将表格作为调试工具
思维目标：建立时序思维、培养严谨推理、理解调试是科学

### 3. 教学重难点

重点：
1. 变量跟踪表设计（变量名列、执行步骤行）
2. 逐行跟踪的机械性
3. 从表格中发现错误

难点：
1. 克服凭感觉的习惯
2. 理解赋值是覆盖
3. 复杂表达式的运算顺序

### 4. 教学准备

教具：白板、打印的空白表格模板、红蓝双色笔
环境：不需要电脑，安静环境

### 5. 教学过程（详细）

#### 5.1 导入（10分钟）

展示代码：
```cpp
int a = 5, b = 3;
a = a + b;
b = a - b;
a = a - b;
cout << a << " " << b;
```

让学生说出输出，引出"人脑会出错"的问题。

关键话术：我从学生身上看到，90%的逻辑错误都是因为以为懂了，其实没跟踪对。

#### 5.2 新课讲授 Part 1：原理讲解（15分钟）

**画表格模拟法的三个核心规则**（使用上述rule-item结构渲染）：

1. 变量名作为列——程序里有哪些变量，表格就有几列
2. 执行步骤作为行——每执行一行代码，就在表格中新增一行
3. 变化的值标红——用红笔标出这一步发生变化的位置

**标准表格格式**（使用上述blackboard-design结构渲染）：

用ASCII表格展示标准格式，包含：执行步骤、a、b、输出四列，展示初始状态到cout的完整跟踪。

关键话术：这个方法看起来笨，但它是国际信息学竞赛金牌选手的标准操作。

#### 5.3 新课讲授 Part 2：简单程序跟踪（25分钟）

示例1：基本赋值跟踪
- 教师演示完整画表格过程
- 学生跟练

示例2：两数交换
- 教师演示完整表格
- 学生独立画一遍

#### 5.4 课堂练习（15分钟）

练习题1：跟踪给定程序
练习题2：找错（通过画表格找出bug）

巡视要点：检查是否逐行跟踪、赋值方向、标红变化

#### 5.5 小结（5分钟）

关键话术：今天我们学的不是笨办法，而是编程的核心能力。

### 6. 板书设计

左边：三规则
右边：示例表格

### 7. 代码示例

示例1：基本赋值
示例2：交换变量
示例3：课堂练习题

### 8. 教学陷阱预警

陷阱1：跳步跟踪
陷阱2：赋值方向搞反
陷阱3：不敢标红变化
陷阱4：觉得是笨办法

### 9. 检验标准

- 能够独立画出3变量以内的跟踪表格
- 能够通过表格正确预测程序输出
- 能够通过表格发现简单的逻辑错误

### 10. 课后作业

必做题：完成3道画表格练习题
选做题：用画表格法解释给同学听
思考题：画表格法和直接想，各有什么优缺点

### 11. 导航

上一：变量与输入
返回：L1概览
下一：运算与表达式

---

## 质量检查清单

### 内容检查
- [ ] 教案头部信息完整
- [ ] 教学目标分三级
- [ ] 教学过程每步有时间、话术
- [ ] 包含三规则（rule-item结构）
- [ ] 包含标准表格格式（blackboard-design结构）
- [ ] 有教学陷阱预警
- [ ] 使用L1绿色主题

### 渲染检查（重要！）
- [ ] 三规则的序号圆形与文字不重叠
- [ ] 三规则使用flex布局对齐
- [ ] ASCII表格使用pre+code渲染
- [ ] ASCII表格使用等宽字体
- [ ] 表格中的颜色标记（绿色、红色、灰色）正确显示
- [ ] 整体布局美观

### 特别检查
**生成后必须验证以下两项**：
1. **三规则渲染检查**：
   - 打开生成的HTML
   - 检查"画表格模拟法的三个核心规则"部分
   - 确认数字1、2、3的圆形背景与文字不重叠
   - 确认文字在圆形右侧，没有错位

2. **标准表格格式检查**：
   - 检查"标准表格格式"部分
   - 确认ASCII表格使用等宽字体显示
   - 确认表格边框对齐，没有错位
   - 确认颜色标记（绿、红、灰）正确应用

**如果渲染不正确**：
- 三规则：检查是否使用rule-item + rule-num + rule-text结构
- 表格：检查是否使用pre > code包裹ASCII表格

---

## 输出要求

直接输出完整的 HTML 代码，不要省略任何部分。

特别注意：
1. 三规则必须使用rule-item结构，确保序号与文字对齐
2. ASCII表格必须使用pre+code，确保等宽字体
3. 生成后自我检查上述两项渲染是否正确
4. 保持IOI教练的第一人称叙述风格
5. 所有导航路径正确
