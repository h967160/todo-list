# Todo List - React 練習

此專案是使用[Create React App](https://github.com/facebook/create-react-app)建立 React，用來實作 Todo List 的 CRUD 功能練習。

## Project Screenshots - 專案畫面
![todolist-cover](https://github.com/h967160/todo-list/assets/152831113/95512e1e-39e0-419b-9cf1-84c72fc58c11)

## Features - 功能

- 可以查看 Todo List 列表。
- 點選新增工作欄位可以新增一筆 todo。
- 點選每筆 todo 左邊圓圈可以確認是否已完成該筆 todo。
- 點選每筆 todo 右邊 X 可以刪除該筆 todo。
- 下方剩餘項目數則會隨著 todo 的增加減少而變化。
- 點選每筆 todo 的文字可以修改該筆 todo
  - 修改後按下 Enter 即修改完成。
  - 若要取消修改按下 Esc 即可取消修改。

## Environment SetUp - 環境建置

- Node.js v14.18.1
- React v18.2.0
- Sass v1.56.2
- clsx v1.2.1
- styled-components v5.3.5

## Installation and Execution - 安裝並執行專案

1.請先確認是否有安裝 Node.js 及 Npm。

2.開啟終端機（Terminal）， clone 此專案至本機電腦。

```
git clone https://github.com/h967160/todo-list.git
```

3.開啟終端機（Terminal），進入存放此專案的資料夾。

```
cd todolist-react-starter
```

4.安裝 npm 套件

```
npm install
```

5.啟動專案

```
npm start
```

6.當 Terminal 出現以下訊息，表示專案已啟動。

```
You can now view alpha-shop in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.12:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

```

7.請輸入以下網址進行測試：

```
http://localhost:3000/todo
```

8.如欲停止伺服器

```
ctrl + c
```
