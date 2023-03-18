<script lang="ts">
  const message_jp = `工学系の大学を卒業するも就職活動に失敗し、家電量販店のパソコン売り場でコンピュータの知識を磨きながら接客スキルを習得。当時はパッケージソフトウェアやコンピュータ書籍売り場を担当。日常の接客のみならず、売れ残り品のたたき売りオークションなど、店内イベントでも活躍し、店舗の売上に貢献する。


  その後、パソコン好きが高じて製造業の社内システム部門に中途採用で潜り込み、そのまま系列のSI会社にシステムエンジニアとして勤務。少数精鋭の現場においては, 要件定義からテスト、エンドユーザサポートまでありとあらゆる工程の業務を担当し、システム開発の経験を積む。
  
  第２子の誕生を機に、10年以上勤めたSI会社を辞め、地元のソフトウェア会社に転職。
  
  さらに5年の紆余曲折を経て、現在はフリーランスとして独立。コーヒーをすすり, プロテインバーをかじり, 妻の用意する生野菜をモシャりながら VSCode で go get したり wrangler publish -e production したり docker の compose を up -d したりする毎日。



  座右の銘は「日々是実装」。

  株式会社 Contribe 所属。`.replace(/\n/g, "<br />");

</script>

<div id="profile">
    <h2>Profile</h2>
    <p>{@html message_jp}</p>
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    #profile {
        background-color: #110011;
        padding-left: 1em;
        opacity: 0.9;
    }
</style>
