# CSS 👊

## Iframe 技巧

1. iphone 滑动卡顿处理方案

```html
<div class="scroll-wrapper">
  <iframe seamless class="iframe" id="showContent" src="#"></iframe>
</div>

<style>
.scroll-wrapper { 
 position: fixed; 
 right: 0; 
 bottom: 0; 
 left: 0; 
 top: 0; 
 -webkit-overflow-scrolling: touch; 
 overflow-y: scroll; 
 
} 

.iframe{
  height: 100%; 
 	width: 100%; 
}

</style> 

```

2. CSS省略
```css
p{
   overflow : hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
}

p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
```

3. IOS 手机容器滚动条滑动不流畅
```css
overflow: auto;
-webkit-overflow-scrolling: touch;
```
4. 修改滚动条样式
```css
// 隐藏 div 元素的滚动条
div::-webkit-scrollbar {
    display: none;
}
div::-webkit-scrollbar 滚动条整体部分
div::-webkit-scrollbar-thumb 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条
div::-webkit-scrollbar-track 滚动条的轨道（里面装有 Thumb
div::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置
div::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去
div::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
div::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件注意此方案有兼容性问题，一般需要隐藏滚动条时我都是用一个色块通过定位盖上去，或者将子级元素调大，父级元素使用 overflow-hidden 截掉滚动条部分。暴力且直接。

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101f1c, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#101f1c, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(#101f1c, 1);
}

```

5. 使用 css 写出一个三角形角标
```css
元素宽高设置为 0，通过 border 属性来设置，让其它三个方向的 border 颜色为透明或者和背景色保持一致，剩余一条 border 的颜色设置为需要的颜色。
div {
    width: 0;
    height: 0;
    border: 5px solid #transparent;
    border-top-color: red;
}
```
