# Portfolio : made by svelte.

```zsh
npm -v
9.5.0

yarn -v
1.22.19
```

> package managerはyarnを使うのでnpm installはしないこと

containerに入る

```zsh
npm create vite@latest weathre-forcast -- --template svelte-ts
```

.devcontainerとDockerfileをコピーしてcontainerを開き直す

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
git remote add origin https://github.com/daifukuninja/weathre-forcast-svelte.git
git push -u origin main

git checkout -b develop
git push origin develop
```

githubでdefaultブランチの切り替えする
以降はdevelopブランチで作業

tailwindの初期化

`yarn tailwindcss init -p`

config.cjsをsvlete向きに修正する

```js:tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
```

app.cssに追記

```css:app.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


