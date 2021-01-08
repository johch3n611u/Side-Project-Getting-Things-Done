# GTD

## 引言

先前想依照 [OKR KPI 做的管理工具](https://github.com/johch3n611u/Side-Project-Firebase-to-WebDatabase)，目前看來是失敗了，

看起來還是要利用框架優先想好資料結構才便於存取與渲染，

當存取渲染後才去想功能，整個順序反了，

目前要優先評估 Firebase 還是 GoogleSheet 較適合開發此 GTD 工具，

並先想好架構在開發以免碰上相同問題，改由後來接觸到感覺更適合的管理方法 GTD。

---

在架構上一開始覺得可以使用 `vue + firebase + github page` 但受到後續 studio 影響，

原本在上面架構與 `angular + .net core + heroku` 抉擇，想說要不要統一就好省事，

後來接觸到以下心得 順道接續之前幫老弟製作的專案 [Try-Swagger-RESTfulAPI](https://github.com/johch3n611u/Side-Project-Try-Swagger-RESTfulAPI) 將一切都解釋清楚

---

以往沒有一堆前端框架時引入函式庫只要 script src 即可，

到後來一堆前端框架與函式庫也衍生了 NPM Webpack cli SASS hexo etc... 這些預先處理的工具，

> 可以參考這兩篇文章了解生態演變
>
> [hulis前端生態演變](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)
>
> [Github 從有 jq 到無 jq](https://www.infoq.cn/article/removing-jquery-from-github-frontend/)

詳細了解後才發現，其實以上就跟後端 bat 批次檔案，根本大同小異...

### 其實就是 cmd 利用命令讓程式把 某種語言編譯成 瀏覽器看得懂的 html5 (html / css /js /webassembly) 如此而已，

所以在後端 ( 或是 angular ) 其實架構較穩定下 ( 版本不會隨意改變且通常向低版本相容 )，

感覺前端就應該只採用`輕前端`就好，盡量不要耦合一堆其他技術避免技術棧拉得很高，難維護也增加開發難度，

---

那什麼是 [Kuro Hsu](https://book.vue.tw/CH1/1-1-introduction.html) 、 黑暗執行緒 所提及之 `輕前端` (其實就是單純用 script 引入之套件)

所以 vue 漸進式框架 其實就只要採用 `script 引入` 能用到的功能即可，

其餘就轉 angular 利用 ng 的一致性、向下兼容 這些就由 google 開發團隊煩惱，我們顧商業邏輯即可...

---

<https://forum.quasar-framework.org/topic/5878/need-advice-angular-or-vue-and-quasar/6>

![alt](/assets/img/1-1-progressive.4dd3f497.png)

根據以上我覺得可以很明顯的發現到，其實要做 站台 / 平台 基本上就要全包，很少不包的，那應該就依照以下方式起架構即可

* 小工具 -> script 引入的 vue ([現行版本 v3](https://v3.cn.vuejs.org/guide/installation.html))
* 站台 / 平台 -> angular + .net core + etc...


## 架構分析

首先要由資料結構先處理，架構反而其次需要先評估需求才能決定

...

## 資料結構

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
2. 需有行程檢視與自動排除功能 Calendar
3. GTD 功能 ( 收集箱 / ToDoList ) / Tag 分類
4. 架構需 MVP 且能夠漸進延展功能

## 架構研擬

<https://www.monterail.com/blog/vue-vs-react-2020#:~:text=One%20of%20the%20biggest%20differences,the%20view%20layer%20is%20built.&text=In%20React%2C%20on%20the%20other,how%20to%20create%20Web%20applications.>

參考上篇趨勢，最後選定 Vue3 加上 Firebase

## 框架研究

* Vue3 <https://book.vue.tw/>
* Firebase <https://github.com/johch3n611u/Side-Project-Firebase-to-WebDatabase/blob/main/README.md>

## 參考

<https://www.managertoday.com.tw/articles/view/55903>

<https://www.google.com/search?q=pdca&sxsrf=ALeKk03vWpjqSslXjisIUvHccV4F--_Yww:1607876224763&tbm=isch&source=iu&ictx=1&fir=DkLLHwao4bQjQM%252Ca7g5rw75AOFdDM%252C_&vet=1&usg=AI4_-kRl8T7ddsy63bo5ZxLwbcfG2gj2Qg&sa=X&ved=2ahUKEwjq0-DZrcvtAhWtxIsBHfAjAFAQ_h16BAgMEAE#imgrc=DkLLHwao4bQjQM>

...
