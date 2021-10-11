# GTD

1. [Vue3](https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/Vue3Example.md)
2. [firebase](https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/FirebaseDemo.html)
3. [figma](https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/FigmaDesign.md)

## 引言

* 2021 年 02 月 09 日

  其實 SSR CSR MPA SPA PWA AMP 在最一開始學習時就接觸到了，但在最近研究工作室架構要怎開時，
  
  除了 [黑暗執行續 - 輕前端](https://blog.darkthread.net/blog/vue-3-release/) 這種架構可用外，
  
  才發現近年流行的 SPA 前端框架，其實也有 [SSR+SPA 混和](https://blog.fundebug.com/2019/05/23/next-nuxt-nest/)，針對 SEO / 首頁渲染 所做的 Solution => [雙端渲染](https://segmentfault.com/a/1190000020417285)
  
  除了這以外發現水真的蠻深的，像是 [AG UI 庫](https://ithelp.ithome.com.tw/articles/10192187) / [.NET 設計原理](https://www.youtube.com/watch?v=_ougvb8mT7k&t=367s&ab_channel=NickChapsas) 也都需花時間整理學習，
  
  最好的方式就是趕快把 GTD 基礎先出來，後續需補強的就藉由此基礎再往上架，反正後台架構基本上 SPA 就夠應付了...

<br><br><br><br>

* 2021 年 02 月 05 日

  [如何不編譯直接在前端瀏覽器使用Vue.js插件？以vue-slim-tabs為例](http://blog.pulipuli.info/2019/10/vuejsvue-slim-tabs-how-to-use-vuejs.html#postcatavuejsvue-slim-tabs-how-to-use-vuejs.html0_anchor12)
  
  終於了解其實前端大致上分為 cdn 與 node.js Command 兩種流派，
  
  通常各大框架都走 node.js Command `指令產生` 的方式來處理 `框架系統建立`，
  
  而 vue 主打漸進式，可以用 cdn import export 方式`人工引入`，
  
  但非主流且人工引入的狀態下，蠻多坑的，也不是每種 函式庫都支援，人工引入與安裝，
  
  如需使用 .vue 檔 module / component 化，還需額外載入 vue-loader cdn 套件，進行即時轉譯效能或有落差
  
  <br>
  
  再者目前前端開發似乎都是 使用 UI 庫 搭配少量客製化 Component ，
  
  似乎應該專注於商業邏輯，而不是在這邊搞腳手架，最近幫老弟看別人 Vue 光搞環境架設專案 Webpack,lib version etc... 就搞超久最後還沒架起來
  
  目前考慮完成此專案 [不使用Vue-cli的情況下，只使用Vue.js、Vue-router實現單頁應用](https://kknews.cc/zh-tw/code/pexegmz.html)，
  
  了解引入與不使用 .vue 模組化後，方便以後前台使用此架構建置，
  
  後台就用 angular2+ 寫，專注在研究各大好用的 [AG UI 庫](https://www.google.com/search?q=angular+ui&oq=angular+ui&aqs=chrome..69i57j69i59j69i65j69i61.4119j0j7&sourceid=chrome&ie=UTF-8)，與 Component 客製化，MVP 把時間花值得的地方。

<br><br><br><br>

* 2021 年 01 月 27 日

  在研究到 Vue3 ( 輕前端可能需要進階到 cdn vue router 與 vue vuex ) 且準備 figma 再繼續架構時發現 ...
  
  原來 Google Keep 非常符合 GTD 的使用方式 ... [GTD 參考](https://vocus.cc/@study_overflow/5dde03c1fd89780001fac9d3)
  
  目前就差在 G Keep 似乎在協作上比較不像一般的，看板模式協作，比較偏向個人 GTD，
  
  且對於後續其他功能連動的[擴充](https://medium.com/@gatorsquare/%E7%B5%A6%E7%99%BC%E6%A1%88%E6%96%B9%E7%9A%84%E8%BB%9F%E9%AB%94%E5%A4%96%E5%8C%85-abc-%E5%83%B9%E6%A0%BC%E7%AF%87-bb3275f6e739)會有很大的問題，也是等於要重新開發，
  
  所以 MVP 模式也必須考量擴充，應該是趕快快速開發符合最簡需求的工具，
  
  而[了解](https://blog.back4app.com/heroku-alternatives-in-2021/)了 [架站相關資訊](https://daotw.com/%E5%A6%82%E4%BD%95%E6%9E%B6%E8%A8%AD%E7%B6%B2%E7%AB%99/#top) 後，確定 .NET CORE API + heroku 要，
  
  但目前這個 vue + firebase 優先開發 mvp ，後續有機會在連動 angular 之類的。
  
  > studio 架構 => 能串 API 就串，能用函式庫就用，但必須一體且可以整合
  
  * GTD
  * CMS
  * Calendar
  * CRM

<br><br><br><br>

* 2020 年 12 月 14 日

  先前想依照 [OKR KPI 做的管理工具](https://github.com/johch3n611u/Side-Project-Firebase-to-WebDatabase)，目前看來是失敗了，

  看起來還是要利用框架優先想好資料結構才便於存取與渲染，

  當存取渲染後才去想功能，整個順序反了，

  目前要優先評估 Firebase 還是 GoogleSheet 較適合開發此 GTD 工具，

  並先想好架構在開發以免碰上相同問題，改由後來接觸到感覺更適合的管理方法 GTD。

<br><br><br><br>

## 架構分析

在架構上一開始覺得可以使用 `vue + firebase + github page` 但受到後續 studio 影響，

原本在上面架構與 `angular + .net core + heroku` 抉擇，想說要不要統一就好省事，

後來接觸到以下心得 順道接續之前幫老弟製作的專案 [Try-Swagger-RESTfulAPI](https://github.com/johch3n611u/Side-Project-Try-Swagger-RESTfulAPI) 將一切都解釋清楚

---

### :star::star::star: 老弟看這 :star::star::star:

以往沒有一堆前端框架時引入函式庫只要 script src 即可，

到後來一堆前端框架與函式庫，也衍生了 NPM Webpack cli SASS hexo etc... 這些預先處理的工具，

> 可以參考這兩篇文章了解生態演變
>
> [hulis前端生態演變](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)
>
> [Github 從有 jq 到無 jq](https://www.infoq.cn/article/removing-jquery-from-github-frontend/)

詳細了解後才發現，其實以上就跟[後端 bat 批次檔案](https://github.com/johch3n611u/Experience-of-Cinda-Company/tree/master/Batch.Demo)，根本大同小異...

### 其實就是 cmd 利用`命令`，讓程式把 某種`語言` e.g. razor typescript jsx etc... `編譯`成 瀏覽器看得懂的 html5 (html / css /js /webassembly) 如此而已，

所以在後端 ( 或是 angular ) 其實架構較穩定下 ( 版本不會隨意改變且通常向低版本相容 )，

感覺前端就應該只採用`輕前端`就好，盡量不要耦合一堆其他技術避免技術棧拉得很高，難維護也增加開發難度，

---

那什麼是 [Kuro Hsu](https://book.vue.tw/CH1/1-1-introduction.html) 、 黑暗執行緒 所提及之 `輕前端` ( 其實就是單純用 script 引入之套件 )

所以 vue 漸進式框架 其實就只要採用 `script 引入` 能用到的功能即可，

其餘就轉 angular 利用 ng 的一致性、向下兼容 這些就由 google 開發團隊煩惱，我們顧商業邏輯即可...

---

<https://forum.quasar-framework.org/topic/5878/need-advice-angular-or-vue-and-quasar/6>

![alt](/assets/img/1-1-progressive.4dd3f497.png)

根據以上我覺得可以很明顯的發現到，其實要做 站台 / 平台 基本上就要全包，很少不包的，那應該就依照以下方式起架構即可

* 小工具 -> script 引入的 vue ([現行版本 v3](https://v3.cn.vuejs.org/guide/installation.html))
* 站台 / 平台 -> angular + .net core + etc...

以上...

## 資料結構

![alt](/assets/img/newtaskid.png)

這次要使用的是 firebase NoSql ，所以就不使用以下工具了。

<https://dbdiagram.io/>

<https://www.itread01.com/hklxhkihk.html>

## OKR KPI GTD 詳解

再直接構想資料結構時，必須真的了解 Domain Knowhow 與 Use case 才有利設計出真正符合需求的架構

<https://www.managertoday.com.tw/articles/view/55903>

<https://www.managertoday.com.tw/articles/view/55927>

## Use case

![alt](/assets/img/未命名_LI.jpg)

與愷蒂討論過後發現，以 Cinda 目前工程師的協作方式來看，就很符合 kiss 與 `gtd` ，

但因為愷蒂目前是 辣咖 的實習生，有接觸到他們的管理方式，主要是自己的後台串接各大教學平台 api ( 也可能是利用爬蟲 )，

收集留言回復，在利用他們自己的後台回復(`tag`)，配合 googlesheet / Slack，同時擴大社群與管理的影響力，這點也是蠻棒的，

愷蒂評估自身後發現，並不是他不認真，而是我在`安排工作給他的狀況下無法得知他當禮拜的行程` ( 是否有課或考試或... )，

而約束力也不像 Cinda / 辣咖 這麼夠，在這種狀況下，管理工具要是不能達到 `kiss` 肯定會更降低使用率，

且也要符合後續`延展功能`與目前強烈需要快速開發出 `MVP` 的架構。

---

### 總結以下幾點

1. KISS ( Keep It Simple, Stupid )
2. GTD 功能 ( 收集箱 / ToDoList ) / Tag 分類
3. 需有行程檢視與自動排除功能 Calendar
4. 架構需 MVP 且能夠漸進延展功能

![alt](/assets/img/img-1525241366-42254@900.jpg)

### Prototype、Wireframe

去完 wanhon 結案報告完後，發現相較於 API 圖 (也是需要但可能可以藉由 swagger、gRPC、GraphQL)

或是一些 架構流程圖 甚至是開程式講解，都不會比 Prototype、Wireframe 來的直觀，

所以優先看完下篇完成 figma 後，在接續實作。

( 到時出去接也是需要有 figma 與客戶談完後才發包給專業設計師，看起來比較可行 figma 就像設計圖 )

* Figma <https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/FigmaDesign.md>

## 架構研擬

<https://www.monterail.com/blog/vue-vs-react-2020#:~:text=One%20of%20the%20biggest%20differences,the%20view%20layer%20is%20built.&text=In%20React%2C%20on%20the%20other,how%20to%20create%20Web%20applications.>

參考上篇趨勢，最後選定 Vue3 加上 Firebase

## 框架研究

* Vue3 <https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/Vue3Example.md>
* Firebase <https://github.com/johch3n611u/Side-Project-Firebase-to-WebDatabase/blob/main/README.md>

## 步驟

1. ES6: import module from URL => download & import ...
2. <https://stackoverflow.com/questions/44877904/how-do-you-import-a-javascript-package-from-a-cdn-script-tag-in-react>
3. bundle js <https://github.com/johch3n611u/Side-Project-Getting-Things-Done/blob/main/assets/config/firebasebundle.js>
4. Login Component
5. x-template <https://book.vue.tw/CH2/2-1-components.html#%E9%80%8F%E9%81%8E-x-template-%E5%B0%81%E8%A3%9D%E6%A8%A1%E6%9D%BF>

## 參考

<https://www.managertoday.com.tw/articles/view/55903>

<https://www.google.com/search?q=pdca&sxsrf=ALeKk03vWpjqSslXjisIUvHccV4F--_Yww:1607876224763&tbm=isch&source=iu&ictx=1&fir=DkLLHwao4bQjQM%252Ca7g5rw75AOFdDM%252C_&vet=1&usg=AI4_-kRl8T7ddsy63bo5ZxLwbcfG2gj2Qg&sa=X&ved=2ahUKEwjq0-DZrcvtAhWtxIsBHfAjAFAQ_h16BAgMEAE#imgrc=DkLLHwao4bQjQM>

...
