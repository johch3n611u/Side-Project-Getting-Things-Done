# Vue3Example

> 2021-01-23 在 github 搜到一個整理得蠻好的 [Vue3 專案](https://github.com/su37josephxia/vue3-study) - [講義](https://github.com/su37josephxia/vue3-study/tree/master/vue-mastery/composition-api)

## Vue2 Options API

Options API

* components
* props
* data
* computed
* methods
* lifecycle methods

<details><summary><b>Vue2 Demo</b></summary>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../../source/vue-next/packages/vue/dist/vue.global.js"></script>
</head>

<body>
    <div id='app'></div>
    <script>
        const App = {
            template: `
                <button @click='click'>{{message}}</button>
            `,
            data() {
                return {
                    message: 'Hello Vue 3!!'
                }
            },
            methods: {
                click() {
                    console.log('click ....', this.message)
                    this.message = this.message.split('').reverse().join('')
                }
            }
        }
        let vm = Vue.createApp(App).mount( '#app')
        // console.log(vm)
    </script>
</body>

</html>
```

</details>

好處 => 功能依照上述六種類別展開，易懂

壞處 => 開發維護時通常以單一功能為主，會在代碼中反覆橫跳，需要收合成單一 fn => function 才好開發

解決方法 =>

1. ~~Mixin~~
2. ~~Mixin Factory~~
3. ~~ScopeSlots~~
4. ⭐Composition API⭐ ( Vue3核心功能 )

<br><br><br><br><br><br><br><br><br><br>

## 新東西

### ⭐ Composition API ⭐

* Vue Composition API EasonLin [上](https://uu9924079.medium.com/vue-composition-api-%E7%AD%86%E8%A8%98-%E4%B8%8A-d60eabe3f469) [下](https://uu9924079.medium.com/vue-composition-api-%E7%AD%86%E8%A8%98-%E4%B8%8B-4f7e25cdd14)
* Composition API 只是 Vue3 中另一種編寫組件的方法，其好處如下：
  * 提供更好的 TypeScript 支持
  * 組件太大，需要依功能分類時可使用
  * 更好的跨組件使用程式碼或狀態

* Top <a id="top"></a>
  1. [Setup](#Setup)
  1. [Reactive](#Reactive)
  1. [Modularizing](#Modularizing)
  1. [Methods / Computed](#Methods)
  1. [LifecycleHooks](#LifecycleHooks)
  1. [Watch](#Watch)
  1. [SharingState](#SharingState)
  1. [Suspense](#Suspense)
  1. [Teleport](#Teleport)
  1. [Props in, Event out / v-model](#Props)
  1. [is / slot](#is)
  1. [Provide / Inject](#Provide)

### Setup 類似 C# 建構子 <a id="Setup" href="#top">Top</a>

* 參數1 props - 属性 (响应式对象 且 可以监听(watch))

```JS
import {watch} from "vue"
export defalut {
  props: {
    name: String
  },
  setup(props) {
    watch(() => {
      console.log(props.name)
    })
  }
}

// 解構讀取會失去響應
//  setup({name}) {
//    watch(() => {
//      console.log(name) // undefined
//    })
//  }
```

* 參數2 context - 上下文对象 ( 用于代替以前的this方法可以访问的属性 )

```
setup (props,context) {
  const {attrs,slots,parent,root,emit} = context
}
```

* [Demo](#demo)

### ⭐ Reactive 声明响应式状态 => 類似 Rxjs 觀察者實例 <a id="Reactive" href="#top">Top</a>

* <https://v3.cn.vuejs.org/guide/reactivity.html>
* 原理 Demo <https://github.com/su37josephxia/vue3-study/tree/master/demo/reactivity-demo>

```html
const {
            reactive, // 创建响应式数据对象
            ref, // 创建一个响应式的数据对象
            toRefs, // 将响应式数据对象转换为单一响应式对象
            isRef, // 判断某值是否是引用类型
      } = Vue
    
<template>
  <div>
    <p>Space Left:{{ spaceLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
<script>
import { reactive, computed, toRefs } from "vue";
export default {
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ["Tim", "Bob", "Joe"],
      spaceLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
    });
    function increaseCapacity() {
      event.capacity++;
    }
    return { ...toRefs(event), increaseCapacity };
  },
};
</script>
</script>
```

### ⭐ Modularizing ⭐ <a id="Modularizing" href="#top">Top</a>

```html
<div id="app">
     <app-nav></app-nav>
     <app-view>
            <app-sidebar></app-sidebar>
            <app-content></app-content>
    </app-view>
</div>
```

* [局部註冊](https://v3.cn.vuejs.org/guide/component-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)

```js
const ComponentA = {
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }
}
const ComponentB = {
    components: {
        'component-a': ComponentA
    }
...
}
const app = Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```
 
* [引入外部資源](https://github.com/su37josephxia/vue3-study/tree/master/vue-mastery/composition-api#34-compositionapi---%E5%A4%8D%E5%90%88api)

```js
// file/other1.js
export default function other1(parameter){
   // ... Composition function
}
// file/other2.js
export default function other1({parameter1,parameter2}){
   // ... Composition function
}
// file/Main.js
import other1 form '@file/other1';
import other2 form '@file/other2';

export default {
     // 直接使用
     set(){
          const fnOther1 = other1(ABC);
          const fnOther2 = other2({ABC,CBA})
     
          return {fnOther1,fnOther2}
     }
     
     // 類似 AG 模塊化 Module
     // components: {
     //    other1,
     //    other2
     // }
}
```

### ⭐ Methods / Computed ⭐ <a id="Methods" href="#top">Top</a>

1. JS ： 需要通过 .value 访问包装对象
2. Template : 自动拆箱

> Methods

```html
<template>
    <div>
        <p>Capacity: {{capacity}}</p>
        <button @click="increaseCapacity()">Increase Capacity</button>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default 
    {
        setup(){
            const capacity = ref(3);
            
            function increaseCapacity {
                capacity.value++;
            }
            
            return { capacity , increaseCapacity }
        }
    };
</script>
```

> Computed

```html
<template>
  <div>
    <div>Capacity： {{ capacity }}</div>
    <p>Spases Left: {{ sapcesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>

import { ref, computed, watch } from "vue";
export default {
  setup(props, context) {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);
    function increaseCapacity() {
      capacity.value++;
    }
    const sapcesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    return { capacity, increaseCapacity, attending, sapcesLeft };
  },
};
</script>
```

### ⭐ LifecycleHooks ⭐ <a id="LifecycleHooks" href="#top">Top</a>

* [Demo](#demo)

|-|-|
|Vue2|Vue3|
|beforeCreate|❌setup(替代)|
|created|❌setup(替代)|
|beforeMount|onBeforeMount|
|mounted|onMounted|
|beforeUpdate|onBeforeUpdate|
|updated|onUpdated|
|beforeDestroy|onBeforeUnmount|
|destroyed|onUnmounted|
|errorCaptured|onErrorCaptured|
||🎉onRenderTracked|
||🎉onRenderTriggered|

### Watch <a id="Watch" href="#top">Top</a>

```html
// 所有依赖响应式对象监听
watchEffect(() => {
   results.value = getEventCount(searchInput.value);
 });

// 特定响应式对象监听
watch(
  searchInput,
  () => {
    console.log("watch searchInput:");
  }
);

// 特定响应式对象监听 可以获取新旧值
watch(
  searchInput,
 (newVal, oldVal) => {
    console.log("watch searchInput:", newVal, oldVal);
  },
);

// 多响应式对象监听
watch(
  [firstName,lastName],
 ([newFirst,newLast], [oldFirst,oldlast]) => {
   // .....
  },
  
);

// 非懒加载方式监听 可以设置初始值
watch(
  searchInput,
  (newVal, oldVal) => {
    console.log("watch searchInput:", newVal, oldVal);
  },
  {
    immediate: true, 
  }
);
```

### ⭐ SharingState ⭐ 其實就是 AG 的 Service Component ... <a id="SharingState" href="#top">Top</a>

差別在於這裡的例子多用 Promise 包了一層

* 编写一个公共函数usePromise函数需求如下：
  * results : 返回Promise执行结果
  * loading： 返回Promise运行状态
    PENDING :true
    REJECTED : false
    RESOLVED: false
  * error ： 返回执行错误
  
```html
import { ref } from "vue";

export default function usePromise(fn) {
  const results = ref(null);
  // is PENDING
  const loading = ref(false);
  const error = ref(null);

  const createPromise = async (...args) => {
    loading.value = true;
    error.value = null;
    results.value = null;
    try {
      results.value = await fn(...args);
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };
  return { results, loading, error, createPromise };
}

///////////////////////////////////////////////////////////

import { ref, watch } from "vue";
import usePromise from "./usePromise";
export default {
  setup() {
    const searchInput = ref("");
    function getEventCount() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000);
      });
    }

    const getEvents = usePromise((searchInput) => getEventCount());

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });

    return { searchInput, ...getEvents };
  },
};
```

### ⭐ Suspense ⭐ <a id="Suspense" href="#top">Top</a>

全域 loading 畫面

```html
<template>
  <div>
    <div v-if="error">Uh oh .. {{ error }}</div>
    <Suspense>
      <template #default>
        <div>
          <Event />
          <AsyncEvent />
        </div>
      </template>
      <template #fallback> Loading.... </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured, defineAsyncComponent } from "vue";

import Event from "./Event.vue";

const AsyncEvent = defineAsyncComponent(() => import("./Event.vue"));
export default {
  components: {
    Event,
    AsyncEvent,
  },

  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      // 阻止错误继续冒泡
      return true;
    });
    return { error };
  },
};
</script>
```

### ⭐ Teleport ⭐ <a id="Teleport" href="#top">Top</a>

類似 iframe

```html
<template>
  <div>
    <teleport to="#end-of-body" :disabled="!showText">
      <!-- 【Teleport : This should be at the end 】 -->
      <div>
        <video src="../assets/flower.webm" muted controls="controls" autoplay="autoplay" loop="loop">
          
        </video>
      </div>
    </teleport>
    <div>【Teleport : This should be at the top】</div>
    <button @click="showText = !showText">Toggle showText</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const showText = ref(false);
    setInterval(() => {
      showText.value = !showText.value;
    }, 1000);
    return { showText };
  },
};
</script>
```

<br><br><br><br><br><br><br><br><br><br>

## 舊東西 ( 延續 Vue2 )

* <https://v3.cn.vuejs.org/>
* <https://book.vue.tw/>
* 要注意属性名不區分大小寫， 驼峰 轉 kebab-cased 原因是 瀏覽器會自動大寫轉小寫再進行辨讀

### ⭐ Props in, Event out 单向数据流 / Vue3 v-model 雙向綁定 ⭐ <a id="Props" href="#top">Top</a>

* <https://book.vue.tw/CH2/2-2-communications.html>

```html
  <div id="app">

    <ul v-for="(book, idx) in books" class="book" :key="book.id">
      <li>{{ book.name }}</li>
      <li>{{ book.author }}</li>
      <li>{{ book.publishedAt }}</li>
    </ul>

    <hr>

    <!-- 直接將 v-for 的 book 物件作為 props 傳遞 -->
    <!-- 並監聽自訂的 update 事件 -->
    <my-component
      v-for="(book, idx) in books"
      :key="idx"
      v-bind="book"
      @update="updateInfo"
    ></my-component>

  </div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      books: [{
          id: '0001',
          name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
          author: 'Kuro Hsu',
          publishedAt: '2019/09'
        },
        {
          id: '0002',
          name: '重新認識 Vue.js',
          author: 'Kuro Hsu',
          publishedAt: '2021/02'
        },
      ]
    }
  },
  methods: {
    updateInfo(val) {
      // 註：如果是 Vue 2.x 要透過 this.$set 來更新
      // 如: this.$set(this.books, idx, val);

      // Vue 3.x 則無此限制
      const idx = this.books.findIndex(d => d.id === val.id);
      this.books[idx] = val;
    }
  }
});

app.component('my-component', {
  template: `
    <div class="child-app">
      <div>書名: <input type="text" v-model="bookInfo.name"></div>
      <div>作者: <input type="text" v-model="bookInfo.author"></div>
      <div>出版日: <input type="text" v-model="bookInfo.publishedAt"></div>
    </div>`,
  props: ['id', 'name', 'author', 'publishedAt'],
  data() {
    return {
      bookInfo: {
        id: this.id,
        name: this.name,
        author: this.author,
        publishedAt: this.publishedAt
      }
    };
  },
  watch: {
    bookInfo: {
      // 注意！ 由於 bookInfo 物件必須加上 deep: true
      // 才能做物件的深層更新偵測
      deep: true,
      handler(val) {
        this.$emit('update', val);
      },
    },
  }
});

app.mount('#app');
```

* v-model

```java
<input v-model="searchText" />
// 等於
<input :value="searchText" @input="searchText = $event.target.value" />
```

### ⭐ is 動態元件 / slot 插槽 ⭐ <a id="is" href="#top">Top</a>

* <https://book.vue.tw/CH2/2-3-async-dynamic-components.html>
* v-is 情境 table 內需要出現不是 th tr td 的 tag
* <https://book.vue.tw/CH2/2-4-slots.html>

### ⭐ Provide / Inject => 類似 Angular 的 Service 可能需要這種功能時就要考慮導入 AG ⭐ <a id="Provide" href="#top">Top</a>

* 注入的資料不可變，但可以藉由，注入點用 Computed 包裝，成為連動資料

### Demo <a id="demo" href="#top">Top</a>

* <https://github.com/su37josephxia/vue3-study>
* Vue3 Composition API Example
  * <https://book.vue.tw/CH2/2-5-transitions.html>
  * <https://jsfiddle.net/kurotanshi/sdmkh7qa/>
* Vue3 API Example
  * <https://book.vue.tw/CH2/2-2-communications.html#vue-composition-api>
  * <https://jsfiddle.net/kurotanshi/8hsc2yjg/>
* [baseAPI](https://github.com/su37josephxia/vue3-study/blob/master/demo/api/base-api.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../../source/vue-next/packages/vue/dist/vue.global.js"></script>
</head>

<body>
    <div id="app"></div>
    <script>
        console.log('Vue', Vue)
        const {
            createApp,
            reactive, // 创建响应式数据对象
            ref, // 创建一个响应式的数据对象
            toRefs, // 将响应式数据对象转换为单一响应式对象
            isRef, // 判断某值是否是引用类型
            computed, // 创建计算属性
            watch, // 创建watch监听
            watchEffect,
            // 生命周期钩子
            onBeforeMount,
            onMounted,
            onUpdated,
            onUnmounted,
        } = Vue
        const MyComponent = {
            template: `
            <div>
                <div>count is {{ state.count }} </div>
                <div>plusOne is {{ state.plusOne }}</div>
                <div>Date is {{ time }}</div>
                <div>count is {{ count }} </div>
                <button @click="increment">count++</button>
            </div>
            `,
            
            setup(props, context) {
                console.log('setup....',)
                console.log('props',props)
                console.log('context',context)


                // reactive state
                const state = reactive({
                    count: 0,
                    plusOne: computed(() => state.count + 1)
                })

                // 定义创建响应式数据
                const time = ref(new Date())
                // 设置定时器为了测试数据响应
                setInterval(() => time.value = new Date(), 1000)

                // 判断某值是否是响应式类型
                console.log('time is ref:', isRef(time))
                console.log('time', time)
                console.log('time.value', time.value)

                // method
                const increment = () => {
                    console.log('increment....')
                    state.count++
                }

                // 定义监听
                watch(() => state.count * 2, val => {
                    console.log(`count * 2 is ${val}`)
                })

                // 副作用函数
                watchEffect(() => {
                    console.log('数值被修改了..',state.count)
                })

                // lifecycle
                onBeforeMount(() => {
                    console.log('onBeforeMount....')
                })
                onMounted(() => {
                    console.log(`onMounted ...!`)
                })
                onUpdated(() => {
                    console.log(`onUpdated ...!`)
                })
                onUnmounted(() => {
                    console.log(`onUnmounted ...!`)
                })
                // expose bindings on render context
                return {
                    state,
                    ... toRefs(state),
                    time,
                    increment
                }
            }
        }
        createApp(MyComponent).mount('#app')
    </script>
</body>

</html>
```
