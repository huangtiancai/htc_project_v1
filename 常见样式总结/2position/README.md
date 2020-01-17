position 属性用于指定一个元素在文档中的定位方式;
top，right，bottom 和 left 属性则决定了该元素的最终位置

定位类型
定位元素：计算后位置属性为 relative、absolute、fixed 或 sticky 的元素（除 static 以外的其他元素）
相对定位元素：计算后位置属性为 relative
绝对定位元素: 计算后位置属性为 absolute、fixed
粘性定位元素: 计算后位置属性为 sticky

绝对元素的作用：
设定为 auto 的绝对定位元素，实际尺寸是按照其内容调整的（靠内容撑起容器）
width:auto;
height:auto
指定 top、bottom => 填充可用的垂直空间
指定 left、right => 指定可用的水平空间

语法：
取值：static | relative | absolute | sticky | fixed
示例
