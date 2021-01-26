# Prototype、Wireframe

參考
* [UI設計師之工具學習指南](https://ithelp.ithome.com.tw/users/20112563/ironman/3828)
* [Figma 中文文档](https://figmachina.com/)
* [中文範例](https://www.figma.com/file/W0k3y7XqsNUboh1k39srLP/Figma-Basics-(%E4%B8%AD%E6%96%87)?node-id=0%3A286)

## PM/UIUX

* [PM/UIUX 要先知道的事](https://ithelp.ithome.com.tw/m/users/20112529/ironman/2059)

### 流程

* <https://ithelp.ithome.com.tw/m/articles/10203866?sc=iThelpR>
* <https://alphaorange.medium.com/ux-ui-%E5%B7%A5%E4%BD%9C%E8%81%B7%E8%B2%AC%E5%8D%80%E5%88%86-5594e6607851>

![alt](/assets/img/1_fKy0S_xqMWOrbvreWDNpAw.png)

* Functional Map => 功能規格 頁面內的 UI 流程圖
* Flow Chart => 互動設計 SiteMap 架構圖

## Design System 設計系統 => 方便 CIS 與 元件化

* [設計系統(Design System)分享](https://medium.com/uxeastmeetswest/%E8%A8%AD%E8%A8%88%E7%B3%BB%E7%B5%B1-design-system-%E5%88%86%E4%BA%AB-4e9052fa017)

定義 UI 用到的元件，方便模組化複用

* Color 顏色 ( 色票 / 色卡 )
* Typography 文字 h1~h5、p 大小 字形
* Button 按鈕 特徵
* ( primary / secondary ) color

## figma 功能

### 基礎

* Lock 鎖住圖層
  * 左邊鎖頭圖示
  * 可以將仿製圖複製近來鎖住後用鋼筆模仿
* Frame 圖紙 / 畫框
  * 左上角選項 `#` 字圖示

### 進階

* Components 複用元件
  * 群選物件，右鍵 Create Compoent
  * 模組化後對於開發與維護更改上更易讀，也更容易調整
* Constraints 約束
  * 點擊元件進入內層後，右邊 Constraints 即可調整
  * 約束設計元件內的元素於相對位置 e.g. butten 與 innerText
* Smart Selection 智能選擇、排列
  * 群選元件，群選元件中粉紅色符號與右下角九個點符號
* Auto Layout 自動佈局
  * 群選多元件時，右鍵 Add auto layout
  * 類似元件與元件之間的 Constraints 功能
* Scale
  * 左上角箭頭符號內
  * 等比例縮放元件
* Rules 參考線
  * Setting > View > ( Rules / Layout Grid ... )
  * :triangular_flag_on_post:除了整個 frame ，也可以在個別元件內新增
* Pen 鋼筆工具
  * 支援單/雙手把
* Pencil 鉛筆工具
  * 跟 AI 一樣畫完就真的是向量
* Mask 遮罩
  * 被遮 ( 上層 ) 遮罩 ( 下層 ) 群選，右鍵 Use as Mask
* Inspact CSS 屬性
* Export 輸出切版圖
  * :triangular_flag_on_post:感覺要小心如果真的跟客戶用這個討論時合約要先簽
* Collaboration 同步與協作
* Commenting 註解、評論
* Share Styles 共享樣式

> [範例 example](https://www.figma.com/file/9wkJBpQzAdw8ECQaKEsflM/12%E5%B1%86%E9%90%B5%E4%BA%BA%E8%B3%BD?node-id=2%3A58)

### 高階

* Prototype 動畫
  * 右邊切到 Prototype，即可設定過場或交換或疊加等動畫

<https://figmachina.com/guide/prototyping/creating-prototypes.html>

* 輪播
  * 當 img 超過 frame 後 Prototype 可設定 Overflow 所需的模式，即可達成溢出滑動功能。

<https://figmachina.com/guide/prototyping/advanced-prototyping-with-scrolling-overflow.html>

<details>
 <summary>付費 vs 免費</summary>

### 初级版（Starter）- 免费
这是你创建个人帐户时的默认版本，允许你与最多一个其他设计师合作完成项目。

* 无限的文件存储空间
* 30 天版本历史记录
* 3 个项目
* 2 个编辑者
* 团队样式库

### 教育版（Education）- 免费
如果你是被认可教育机构的成员，那么你可以免费使用 Figma 专业版的所有功能：

* 无限的文件存储空间
* 无限的版本历史记录
* 无限的项目
* 无限的编辑者
* 团队样式库
* 团队组件库
* Slack 集成（评论通知）
* 私人项目（团队内可以创建私人项目，只有通过邀请才能加入）

</details>
