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

```
