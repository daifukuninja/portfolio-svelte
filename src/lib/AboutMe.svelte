<script>
  const message_jp = `MIHARA Keishi は日本のフリーランスWebエンジニア, バックエンドプログラマ, デスクトップアプリケーションエンジニア, 糖質制限者, 会社員, Zenn 執筆者, スノーボーダー, 運転手, 元 Lotus Notes/Domino アプリケーションデータベースエンジニアでExcelマクロ書き。
  ３児の父でもあり, 家庭においては掃除夫, ならびに高所作業を担当する。

  茨城県水戸市出身, 茨城県水戸市育ち, 埼玉県経験者。株式会社 Contribe 所属。`.replace(/\n/g, "<br />");
</script>

<div class="about">
    <h2>About Me</h2>
    <h4 class="caption">( "Wikipedia" style. )</h4>
    <p>{@html message_jp}
</div>

<style>
    p {
        font-family: "Noto Sans JP";

    }
    .about {
        background-color: #110011;
        height: 80vh;
        padding-top: 1em;
        padding-left: 1em;
        opacity: 0.9;
    }
    .caption {
        font-size: large;
        margin-bottom: 2em;
    }
</style>
