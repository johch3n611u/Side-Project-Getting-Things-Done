# Vue3Example

## ⭐ 組件範例 ⭐

* <https://v3.cn.vuejs.org/>
* <https://book.vue.tw/>
* 要注意属性名不區分大小寫， 驼峰 轉 kebab-cased 原因是 瀏覽器會自動大寫轉小寫再進行辨讀

```html
<!--
<div id="app">
     <app-nav></app-nav>
     <app-view>
            <app-sidebar></app-sidebar>
            <app-content></app-content>
    </app-view>
</div>
-->

<div id="app">
        <h1>{{msg}}</h1>
        <button @click="addExclamationMark()">Add !</button>
</div>
```

```js
// cdn 引入
<script src="https://unpkg.com/vue@next"></script>
// 開發版本，如發布產品建議改為引入 prod 版本
<script>
        const {
            ref
        } = Vue;

        const App = {
            setup() {
                const msg = ref("Hello Vue 3");

                function addExclamationMark() {
                    msg.value += "!";
                }
                return {
                    msg,
                    addExclamationMark,
                };
            },
        };

        Vue.createApp(App).mount("#app");
</script>
```

## ⭐ 局部註冊 ⭐

* <https://v3.cn.vuejs.org/guide/component-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C>

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
```

## ⭐ Props in, Event out 单向数据流 / Vue3 v-model 雙向綁定 ⭐

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

## ⭐ is 動態元件 / slot 插槽 ⭐

* <https://book.vue.tw/CH2/2-3-async-dynamic-components.html>
* v-is 情境 table 內需要出現不是 th tr td 的 tag
* <https://book.vue.tw/CH2/2-4-slots.html>

## ⭐  Provide / Inject => 類似 Angular 的 Service 可能需要這種功能時就要考慮導入 AG ⭐

* 注入的資料不可變，但可以藉由，注入點用 Computed 包裝，成為連動資料

## ⭐ 声明响应式状态 => 類似 Rxjs 觀察者實例

* <https://v3.cn.vuejs.org/guide/reactivity.html>

## ⭐ Composition API ⭐

* [Vue Composition API EasonLin 上](https://uu9924079.medium.com/vue-composition-api-%E7%AD%86%E8%A8%98-%E4%B8%8A-d60eabe3f469)
* [Vue Composition API EasonLin 下](https://uu9924079.medium.com/vue-composition-api-%E7%AD%86%E8%A8%98-%E4%B8%8B-4f7e25cdd14)

* Composition API 只是 Vue3 中另一種編寫組件的方法，其好處如下：
  * 提供更好的 TypeScript 支持
  * 組件太大，需要依功能分類時可使用
  * 需要跨組件使用程式碼或狀態

### Vue3 Composition API Example

* <https://book.vue.tw/CH2/2-5-transitions.html>
* <https://jsfiddle.net/kurotanshi/sdmkh7qa/>

### Vue3 API Example

* <https://book.vue.tw/CH2/2-2-communications.html#vue-composition-api>
* <https://jsfiddle.net/kurotanshi/8hsc2yjg/>