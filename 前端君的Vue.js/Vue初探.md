---
title:  Vue初探
date: 2018-12-11 14:44:18
tags: Vue
categories: 学习笔记
---
<meta name="referrer" content="no-referrer" />

## 快速入门Vue.js

### 1.数据驱动视图

``` stylus
<div id="app">
    公众号：{{ name }}
  </div>
  <script>
      let vm = new Vue({
          el:"#app",
          data:{
             name:"web前端教程",
          }
      });
  </script>
```

 - 通过new Vue( )创建一个实例vm，参数是一个json对象，属性el提供一个在页面上存在的DOM
   元素(id='app')，表明这个实例是关联指定的DOM节点。
 - 在DOM节点上，我们就可以使用双大括号{{  }}的语法来渲染Vue实例对象data中已经存在的属性值;

### 2.双向绑定
Vue.js还提供了方便的语法指令，实现视图和数据的双向绑定，也就是说，不但数据变化了可以驱动视图，用户在页面上做了一些操作，也很方便地实现更新model层的数据。
 

 - 例子：监听用户在页面输入框输入的内容，然后将其实时更新在页面上。
 - 在Vue中我们使用**v-model**指令就可以轻松实现

``` stylus
  <div id="app">
     <input v-model="number">
     <p>数字:{{ number }}</p>
 </div>
 <script>
     let vm = new Vue({
         el:"#app",
         data:{
             number:"",
         }
     });
 </script> 
 
```

## 3.组件

 - 组件化就是把页面中特定的区块独立抽出来，并封装成一个可方便复用的组件。

``` vbscript-html
  <div id="app">
     <card></card>
     <card></card>
     <card></card>
  </div>

  <script>
    //注册一个名叫card的组件
  Vue.component('card',{
        template:`<div>
            <img src="logo.png" alt="">
            <h2>web前端教程</h2>
            <p>这里是描述，很长的描述</p>
            <button>我是按钮</button>
        </div>`
    });

    new Vue({
       el:"#app"
    });
  </script>
```

 -  **Vue.component(tagName,options)** 注册了一个名字叫card的组件，这样，在需要复用这个组件的地方，我们只需要使用就可以
 -  组件里面的显示的内容不可能全都一样。放心，Vue为组件提供了props属性来接受传递进来的参数

## 创建一个Vue实例

Vue是数据驱动视图的，只要**model（模型层）的数据**改变了，Vue就会帮我们改变**视图上显示的内容**，不用我们自己去动手写代码更新。那么，它是怎么做到的，我们的代码要怎么写才能做到这一点。
 
答案是：Vue实例

### 1.创建语法
  

``` dust
 <script>
      let vm = new Vue({});
   </script>
```

 - 通过关键语句 new Vue( )我们就可以创建一个Vue实例：vm了。我们注意到了我们给Vue( )传了一个参数选项，是一个空对象
### 2.设置数据

``` stylus
let vm = new Vue({
     //实例vm的数据
   data:{
          name: "张三",
          age :  21
     }
  });

```

 - 很简单，参数对象不再是一个空对象，它包含一个属性：data，而data的值也是一个对象，这个对象就是我们给实例vm设置的数据了。比如：name为张三，age为21等等。
### 3.挂载元素

``` stylus
<div id = "app"></div>

let vm = new Vue({
    //挂载元素
  el:'#app',
    //实例vm的数据
  data:{
        name: "张三",
        age :  21
    }
  });
```


 - “el”，el参数提供一个在页面上已经存在的DOM元素，作为我们实例vm的挂载目标。表示我们的实例vm和id为“app”的DOM节点就关联起来了。


### 4.渲染

实例vm创建好了，数据data有了，DOM节点也关联起来了，最后一步，就是把vm的数据绑定到指定的视图上了，也就是数据渲染。
 
``` handlebars
  <div id="app">
    我是{{ name }}，
  今年{{ age }}岁
  </div>
```

 - 对，就是你看到的这么简单，我们只需要用一个双大括号：{{  }} 即可，你可以留意到，{{ name }}  和 {{ age }}
 - 就是我们给实例vm设置的数据name和age，我们用{{  }}可以直接读取到它们的值

## 定义一个Vue实例,常用的四个选项

 - 定义一个Vue实例的参数有el（指定挂载的DOM元素），data（实例的数据），上一节讲过除了这两个之外，还可以定义其他参数。
 - 
### 1.filters 过滤器

小数过滤为全是整数;
``` javascript
 let vm = new Vue({
    //挂载元素
  el:'#app',
    //实例vm的数据
  data:{
         num1:33.141,
         num2:46.212,
         num3:78.541
    },
    //过滤器
  filters:{
      toInt(value){
         return parseInt(value);
      }
    }
  });
```

 - filters属性，它的值也是一个对象，里面定义了一个叫toInt(
   )的方法，传入了一个value的参数，函数的作用就是把传入的参数value，简单地转成一个整出并return回去

我们回到过滤器filters，接着讲：定义完filters属性后，我们怎么用呢？
``` handlebars
  数字1：{{ num1 | toInt}}
    数字2：{{ num2 | toInt}}
    数字3：{{ num3 | toInt}}
```
 - 管道符 | 把函数toInt 放在变量后面即可，num1，num2，num3会分别作为参数value传入toInt( value
   )方法进行运算，并返回一个整数。

### 2.computed  计算属性

 - 我们拿到一些数据，需要经过处理计算后得到的结果，才是我们要展示的内容,适合用我们的计算属性computed

``` stylus
 let vm = new Vue({
    //挂载元素
  el:'#app',
    //实例vm的数据
  data:{
         num1:1,
         num2:3,
         num3:6
    },
    //计算属性
  computed:{
        sum(){
          return this.num1+this.num2+this.num3
        }
    }
 });
```

``` handlebars
div#app
   总和：{{ sum }}
 div
```
 - 计算属性computed用法更简洁，仅需{{ sum }}就能读取到它的计算结果：1+3+6结果应该为10。
 - **要注意的是**，sum的值是依赖data中的数据num1，num2，num3的，一旦它们发生了变化，sum的值也会**自动更新**。
### 3.methods方法
在methods中，我们可以定义一些方法，供组件使用。
我们定义一个数据a，当用户点击按钮的时候，a的值加1。这种情况，我们可以利用methods来实现。

``` javascript
 let vm = new Vue({
    //挂载元素
  el:'#app',
    //实例vm的数据
  data:{
         a:0
    },
    //方法
  methods:{
        plus(){
            return this.a++;
        }
    }
 });
```
 
定义一个plus( )的方法在methods中，下面我们把plus( ) 绑定在按钮的点击事件上：
``` handlebars
  <div id="app">
    {{ a }}
    <button v-on:click="plus">加1</button>
  </div>
```

 - 在Vue中通过v-on:指令来绑定事件（指令后面章节会介绍），我们点击按钮，methods中的方法plus()就会被调用,实现给a的值加1，并更新视图。

 
### 4.watch 观察

watch选项是Vue提供的用于检测指定的数据发生**改变**的api。

在上个例子的代码基础上，我们加上watch部分的代码：
``` javascript
 let vm = new Vue({
    //挂载元素
  el:'#app',
    //实例vm的数据
  data:{
         a:0
    },
    //方法
  methods:{
        plus(){
            return this.a++;
        }
    },
    //观察
  watch:{
        a(){
          console.log(`有变化了，最新值：`);
          console.log(this.a);
        }
    }
 });
```
最后一部分watch就是我们新加的代码，a( ) 表示我们要观察监听的就是数据a，


## vue实例的生命周期
- Vue把整个生命周期划分为**创建、挂载、更新、销毁**等阶段，每个阶段都会给一些“钩子”让我们来做一些我们想实现的动作。
- 学习实例的生命周期，能帮助我们理解vue实例的运作机制，更好地合理利用各个钩子来完成我们的业务代码。

### 1. beforeCreate
此阶段为实例初始化之后，此时的**数据观察和事件配置**都没好准备好。

 - 试着console一下实例的数据data和挂载元素el，代码如下:
``` handlebars
  <div id="app">{{name}}</div>
  <script>
    let app = new Vue({
      el:"#app",
        data:{
         name:"前端君"
      },
      beforeCreate(){
         console.log('即将创建');
         console.log(this.$data);
         console.log(this.$el);
      }
    });
 </script>
```
此时的实例中的data和el还是**undefined**,不可用的。

###  2. created
 - 同样打印一下数据data和挂载元素el，看会得到什么？
 - 此时，我们能读取到数据data的值，但是DOM还没生成，所以属性el还不存在，输
   出$data为一个Object对象，而$el的值为undefined。

### 3. beforeMount

 - 上一个阶段我们知道DOM还没生成，属性el还为undefined，那么，此阶段为即将挂载，我们打印一下此时的$el是什么？
 - 此时的$el不再是undefined，而是成功关联到我们指定的dom节点<div id=”app”></div>，但此时{{ name }}还没有被成功地渲染成我们data中的数据。没事，我们接着往下看。

### 4. mounted

 - mounted也就是挂载完毕阶段，到了这个阶段，数据就会被成功渲染出来，我们编写mounted的钩子，打印$el 看看
 - 此时打印属性el，我们看到{{ name }}已经成功渲染成我们data.name的值：“前端君”。

###5. beforeUpdate

 - 我们知道，当修改vue实例的data时，vue就会自动帮我们更新渲染视图，在这个过程中，vue提供了beforeUpdate的钩子给我们，在检测到我们要修改数据的时候，更新渲染视图之前就会触发钩子beforeUpdate。
 - 在控制台把app.name的值从原来的 “前端君” 修改成 “web前端教程”,在更新视图之前beforeUpdate打印视图上的值，结果依然为原来的值：“前端君”，表明在此阶段，视图并未重新渲染更新。

### 6. updated

 - 此阶段为更新渲染视图之后，此时再读取视图上的内容，已经是最新的内容，接着上面的案例，我们添加钩子updated的代码
 - 大家注意两个不同阶段打印的name的值是不一样，updated阶段打印出来的name已经是最新的值：“web前端教程”，说明此刻视图已经更新了。


### 7. beforeDestroy

 - 调用实例的**destroy( )方法**可以销毁当前的组件，在销毁前，会触发beforeDestroy钩子。

### 8. destroyed

 - 成功销毁之后，会**触发destroyed钩子**，此时该实例与其他实例的关联已经被清除，它与视图之间也被解绑。
 - 销毁之前，修改name的值，可以成功修改视图显示的内容为：“更新视图”，一旦效用实例的**$destroy( )方**法销毁之后，实例与视图的关系解绑，再修改name的值，已于事无补，视图再也不会更新了，说明实例成功被销毁了。

### 9. actived
keep-alive组件被激活的时候调用。 
### 10. deactivated
keep-alive 组件停用时调用。

以后最为常用的钩子是：**created 成功创建**

## 如何在HTML中绑定数据

### 1.Mustache 语法

 - 就是双大括号{{ }}的写法，这是最常见的绑定方式。可以轻松地在视图显示我们的数据并及时自动更新，无需手动控制。

### 2.绑定纯html

 - vue提供的**v-html**指令:v-html以属性的形式添加到了div中，值为“name”,函数中name的值被解析成html标签;并作为字节点，插入在<div id=”app”></div>中去。
``` stylus
<div id="app" v-html="name"></div>
 <script>
 let app = new Vue({
    el:"#app",
    data:{
     name:"<strong>前端君</strong>"
    }
 });
 </script>

```
### 3.绑定属性
<a>标签加上**v-bind**:来修饰href属性，而它的值就是data中的属性link。

``` stylus
<div id="app">
   <!--在href前用v-bind：修饰-->
   <a v-bind:href="link">hello官网</a>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    data:{
     link:"http://hello.com"
    }
 });
 </script>

```
### 4.v-bind 指令的简写
- vue为了我们的代码更简洁易看，提供了v-bind指令的简写，仅需要":"。
原本完整的写法：

``` vbscript-html
 <!--完整的写法-->
 <a v-bind:href="link">hello官网</a>
``` 
简洁的写法：
``` stylus
a :href="link">hello官网</a>
```

 - 当渲染的属性值是布尔值的时候（true和false），效果就不一样了，并不是简单地将true或者false渲染出来，而是当值为false的时候，属性会被移除。

``` stylus

 <div id="app">
   <!--我们用缩写的语法-->
   <button :disabled="dis_true">
      我是true
   </button>
   <button :disabled="dis_false">
      我是false
   </button>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    data:{
      dis_true:true,
      dis_false:false
    }
 });
 </script>
```

当属性值设置成true的时候，disabled的值为解析成“disabled”，当属性值设置成false的时候，属性disabled直接被移除掉了。
### 5.支持javascript表达式

 - 加减乘除运算
 - 三元运算符
 - 字符串拼接
虽然vue支持javascript表达式运算，我们只会在运算比较简单的情况下才会这么玩，当运算比较繁琐复杂的时候，一定要用vue的computed属性来进行计算

**本节小结**
  在视图绑定数据的方法：Mustache语法（双大括号语法），绑定纯HTML，绑定属性，支持javascript表达式的写法，以及表达式写法和computed区别

## 实战前的10个指令
### 1.v-text 指令:
 - 指令用于更新标签包含的文本，它的作用跟双大括号的效果一样。
### 2. v-html 指令

 - 帮助我们绑定一些包含html代码的数据在视图上
 - 字符串包含了<b>标签，要想<b>不被当作普通的字符串渲染出来，就得用 v-html 指令

### 3.v-show 指令

 - 指令的取值为true/false，分别对应着显示/隐藏。

### 4. v-if 指令
 - v-if 指令的取值也是为true或false，它控制元素是否需要被渲染出来
 - 设置为true的<p>标签，成功渲染出来，而设置为false的<p>标签，直接被一行注释代替了，并没有被解析渲染出来。
 -  
也许你会问了， v-show 和 v-if 都能控制元素显示或者隐藏，这两个怎么区别使用呢？

 - 记住一点：如果需要**频繁切换显示/隐藏**的，就用 v-show ；如果运行后**不太可能切换显示/隐藏**的，就用 v-if 

### 5. v-else 指令
if和else在编程语言一般都是结对出现的，在vue里面也不例外。它没有对应的值，但是要求前一个兄弟节点必须要使用 v-if 指令，也对，没有if，哪来的else。

``` stylus
<div id="app">
    <p v-if="if_1">我是if</p>
    <p v-else>我是else</p>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    data:{
        if_1:false
    }
 });
</script>

```
 - 第一个使用 v-if 指令，并取值为false，第二个使用 v-else 指令
 - 只有第二个标签被渲染出来，第一个标签由于 v-if 指令的值为false，直接被忽视了，不渲染。
 - 一旦第一个标签的 v-if 指令的值为true，被忽视的就是第二个标签了。 v-if 和 v-else 只有一个会被渲染出来

### 6. v-for 指令

有时候，我们的data中的存放的数据不是个简单的数字或者字符串，而是数组Array类型，这个时候，我们要把数组的元素展示在视图上，就需要用到vue提供的 **v-for** 指令，来实现列表的**渲染**。

``` stylus
<div id="app">
   <div v-for="item in list">{{item}}</div>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    data:{
        list:['Tom','John','Lisa']
    }
 });
 </script>
```
什么，怎么拿到索引？拿到每个元素的索引也很简单，我们稍微改动一下代码，把html部分的代码修改为：

``` stylus
 
   
    <div id="app">
   <div v-for="(item,index) in list">
       {{index}}.{{item}}
   </div>
 </div>
 
```
**提醒：v-for指令除了可以迭代数组，还可以迭代对象和整数。**

### 7. v-bind 指令 
在第六节我们也提过 v-bind 指令的作用和用法，它用于动态绑定DOM元素的属性，比较常见的比如：标签的href属性，标签的src属性。

 v-bind 指令可以简写成一个冒号“：”，也就是以下两种写法是等价的。
``` vbscript-html
 <a v-bind:href="link">hello官网</a>
 <!--等价于-->
 <a :href="link">hello官网</a>
```
它们的解析渲染效果是一样一样的。

### 8. v-on 指令

 - v-on 指令相当于绑定事件的监听器，绑定的事件触发了，可以指定事件的处理函数

``` stylus
 <div id="app">
    <button v-on:click="say">点击</button>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    methods:{
        say(){
            console.log('hello');
        }
    }
 });
 </script>
```

 - 通过 v-on 指令修饰click点击事件，指定事件响应后的处理函数为methods中的say( )方法
 - 此外，如果你想给处理程序say( )传参数，也是可以的，用法跟普通的方法一致。

``` stylus
<div id="app">
   <button v-on:click="say('Tom')">
        点击
  </button>
 </div>
 <script>
 let app = new Vue({
    el:"#app",
    methods:{
      say(name){
        console.log('hello,'+name);
      }
    }
 });
 </script>
```

### 9. v-model 指令

 - 这是一个最重要最常用的指令，一般用在表单输入，它帮助我们轻易地实现**表单控件和数据**的双向绑定:

``` stylus

```


 - 只要给input控件添加 v-model 指令，并指定关联的数据msg，我们就可以轻松把把用户输入的内容绑定在msg上

### 10. v-once 指令
最后，我们再来讲解一下v-once指令，它的特点是只渲染一次，后面元素中的数据再更新变化，都不会重新渲染。

## vue的另一个核心--组件

 - 组件是我们人为地把页面合理地拆分成一个个区块，让这些区块更方便我们重复使用，有了组件，我们可以更高效合理地开发和维护我们的项目。

**规划组件**


**实现组件**

``` stylus
 <div id="app"></div>
 <script>
    Vue.component('my-article',{
       template:`<div>
                <div>
                <h1>这里是文章的标题</h1>
                <div>
                <span>2017年4月10日</span>
                <span>原创</span>
                </div>
                </div>
                <img src="cover.jpg" alt="">
                </div>`
    });

    let vm = new Vue({
       el:"#app",
    });
 </script>
```
 

 - **Vue.component()** 注册了一个名为：“my-article”的组件，而组件的template正好是我们上面的html代码
 - 一定要确保实例vm在创建之前，  组件已经被成功注册，这也是为什么我们要把代码写在实例化之前。

``` stylus
<div id="app">
    <my-article></my-article>
 </div>
```
**传参props**

没错，不但函数可以接受参数，vue的组件也可以

 1. 首先，我们把数据存储在实例vm的data中

``` stylus
 let vm = new Vue({
   el:"#app",
   data:{
       article:{
           title:"第一节：Vue.js框架是什么，
为什么选择它？",
           date:" 2017年03月06日",
           is_original:true,
           cover_url:"cover.jpg"
       }
   }
 });
```

 2.文章的信息有了，我们怎么传到组件中去呢？
``` stylus
<div id="app">    
  <my-article :detail="article"></my-article>
 </div>
```

 - 就像一个函数传参一样，你可以把detail理解成一个形参，article相当于实参。
 - 我们给组件传了参，组件内部怎么接受并使用呢？我们接着看，十分简单！
 - 我们把注册组件的代码稍微修改一下： 

``` stylus
 Vue.component('my-article',{
   props:['detail'],
   template:`<div>
            <div>
            <h1>{{detail.title}}</h1>
            <div>
            <span>{{detail.date}}</span>
            <span v-show="detail.is_original">原创</span>
            </div>
            </div>
            <img :src="detail.cover_url" alt="">
            </div>`
 });
```

```
<div id="app">
    <my-article 
            v-for="item in articles" 
            :detail="item">
    </my-article>
 </div>
```

代码很简单，我们在组件上加上了 v-for 指令，并遍历了articles。

**本节小结**

掌握如何规划设计一个组件，注册以及其注意事项，运用组件与 v-for 指令实现列表渲染。
