<script>
    const message_jp =
        `MIHARA Keishi は日本のフリーランスWebエンジニア, バックエンドプログラマ, デスクトップアプリケーションエンジニア, 糖質制限者, 会社員, 団塊ジュニア, テックライター, スノーボーダー, 運転手, 元 Lotus Notes/Domino アプリケーションデータベースエンジニアでExcelマクロ書き。
  
  ３児の父でもあり, 家庭においては主に掃除, 残飯処理, 害虫駆除, 高所作業などを担当する。

  茨城県水戸市出身, 茨城県水戸市育ち, 埼玉県本庄市経験者。小学校時代の得意科目は理科、図工。`.replace(
            /\n/g,
            "<br />"
        );
</script>

<div class="about">
    <h2>About Me</h2>
    <h4 class="caption">( "Wikipedia" style. )</h4>
    <p>{@html message_jp}</p>
    <div>
        <ul>
            <li># GitHub <a href="https://github.com/daifukuninja">https://github.com/daifukuninja</a></li>
            <li># Zenn <a href="https://zenn.dev/daifukuninja">https://zenn.dev/daifukuninja</a></li>
        </ul>
    </div>
</div>

<style>
    .about {
        font-family: "Noto Sans JP";
        background-color: #110011;
        height: 100vh;
        padding-top: 1em;
        padding-left: 1em;
        opacity: 0.9;
    }
    .caption {
        font-size: large;
        margin-bottom: 2em;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: underline;
    }
    a:visited {
        color: inherit;
    }
</style>
