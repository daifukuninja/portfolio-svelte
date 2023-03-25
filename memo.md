# Portfolio : made by svelte.

## `.devcontainer`の構成

この構成では手元のマシンにnodeをインストールせずに開発を進めることを目指す。

- トップレベルに`.devcontainer`ディレクトリを作成する
- `devcontainer.json`を作成して`.devcontainer`ディレクトリに格納する

```json:devcontainer.json
{
	"name": "Existing Dockerfile",
	"build": {
		"context": "..",
		"dockerfile": "../Dockerfile"
	},
	"extensions": [
		"svelte.svelte-vscode",
		"ritwickdey.liveserver",
		"gruntfuggly.todo-tree",
		"eamodio.gitlens",
		"ms-vscode.vscode-typescript-next",
		"pmneo.tsimporter",
		"kakumei.ts-debug",
		"ryokat3.vscode-qiita-markdown-preview"
	]
}
```

- `Dockerfile`を作成してトップレベルに配置する

```Dockerfile:Dockerfile
FROM node:lts-bullseye-slim AS dev
RUN apt update && apt install git vim -y && apt clean
RUN echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc
```

- VSCodeで`DevContainers: Rebuild and Reopen in Container`する　※要Dev Containersプラグイン

## 時点の環境情報

```zsh
npm -v
9.5.0

yarn -v
1.22.19
```

## 構築手順

> package managerはyarnを使うこととした。

Dev Containerでトップレベルディレクトリを開く

```zsh
npm create vite@latest weathre-forcast -- --template svelte-ts
```

プロジェクトのディレクトリが作成されるので、`.devcontainer`以下と`Dockerfile`をコピーする  
いったんVSCode(トップレベルディレクトリ)を閉じ、プロジェクトのディレクトリを開いて`DevContainers: Rebuild and Reopen in Container`する

packageインストール  

```zsh
yarn install
```

起動確認  

```zsh
yarn dev --open
```

milligramの追加

```zsh
yarn add -D milligram
```

ここでリポジトリ連携

```zsh
git init
git add .
git commit -m "first commit."
git branch -M main
git remote add origin https://github.com/daifukuninja/portfolio-svelte.git
git push -u origin main

git checkout -b develop
git push origin develop
```

以下の２ファイルを`src`直下にコピー

- `node_modules/milligram/dist/milligram.css`
- `node_modules/normalize.css/normalize.css`

`index.html`を編集して`milligram`と`normalize`の参照を追加する

```html:index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="./src/milligram.css" type="text/css" media="screen">    
    <link rel="stylesheet" href="./src/normalize.css" type="text/css" media="screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Svelte + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

`app.css`を編集してとりあえず不要そうなプロパティを削除する。背景はやや黒にする

```css:app.css
:root {
  color: rgba(255, 255, 255, 0.87);
  background-color: #110011;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  display: flex;
  width: 100vw;
  min-width: 320px;
  min-height: 100vh;
}
```

> :root は CSS の擬似クラスで、文書を表すツリーのルート要素を選択します。 HTML では :root は <html> 要素を表し、詳細度が高いことを除けば html セレクターと同等です。

## 素材などメモ

オープニングのスクロールアイコン
---

https://boxicons.com/

背景などの写真
---

https://pixabay.com/ja/

https://burst.shopify.com/background

背景のパララックス効果
---

https://kasumiblog.org/css-parallax/

グラフ描画
---

https://unovis.dev/gallery/view?collection=Lines%20and%20Areas&title=Basic%20Timeline

https://www.chartjs.org/docs/latest/samples/other-charts/polar-area.html
