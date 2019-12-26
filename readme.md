# WAIBAO-SCRIPT

## 项目背景

北京新版邮电大学教务系统前端源代码, 大量使用拼音及拼音缩写作为变量命名, 将用户的用户名和密码明文编码在前端代码中。

## 项目目的

为特定的信息系统外包公司设计一款前端脚本语言, 充分考虑开发者的英语水平, 使开发者只需国内幼儿园英语水平即可进行前端开发, 极大降低前端开发的就业门槛。

## 引入方法

```html
<head>
    <script src="./waibao.js"></script>
</head>
<body onload="waibao()">
    <script type="text/外包">
    // 在这里编写您承包的代码
    </script>
</body>
```

## 基本语法

如果您是一般开发者, 请直接查看源代码waibao.js从而知晓基本语法. 如果您是专做教务系统的外包公司的开发者, 请仔细阅读以下内容.

### 变量声明和定义

```js
bianliang zifuchuan1 =  "北京邮电大学教务系统";
bianliang shuzi1 = 1;
```

### 打印输出

```js
dayin("Nihao, Shijie!");
```

### 随机数

```js
bianliang shuzi = suijishu;
```

### 预定义变量

```js
bianliang buer1 = dui;  // 表示为真
bianliang buer2 = cuo;  // 表示为假
bianliang duixiang = kong;  // 表示为空
bianliang duixiang = weidingyi;  // 表示未定义
```

### "对于"循环

```js
bianliang shuzu = [1, 2, 3];
duiyu (bianliang i = 0; i < 3; ++i) {
    shuzu[i]++;
}

duiyu (bianliang shuzi shuyu shuzu) {
    dayin(shuzi);
}

bianliang duixiang = {a: 1, b: 2, c: 3};
duiyu (bianliang jian zai duixiang) {
    duixiang[jian] *= 2;
}
```

### "当"循环

```js
bianliang i = 0;
dang (i < 3) {
    dayin(i);
    i++;
}
```

### 条件语句

```js
ruguo (tiaojian1) {
    //
} fouze ruguo (tiaojie2) {
    //
} fouze {
    //
}
```

### 开关

```js
bianliang shuzi = parseInt(suijishu * 20);  // 这里的parseInt是英语转换为整型数的意思, 由于还处在测试阶段, 未完全实现拼音编程, 请谅解
kaiguan (shuzi) {
qingkuang 10:
    dayin("Nihao, Shijie!");
    tuichu;
qingkuang 20:
    dayin("Shijie, Nihao!");
    tuichu;
moren:
    tuichu;
}
```

### 函数

```js
hanshu xuanke(){
    alert("选课成功"); // 这里的alert是英语, 表示弹窗警告的意思
}
```
