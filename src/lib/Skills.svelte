<script>
    import { onMount } from "svelte";
    import SkillsMap from "./charts/skillsmaps/SkillsMap.svelte";
    import Timeline from "./charts/timeline/Timeline.svelte";
    import {
        data_frontend,
        data_backend,
        data_utilties,
    } from "./charts/skillsmaps/data";

    const message_jp =
        `Python, C#を開発言語としたデスクトップアプリケーション, エンドユーザ業務効率化の支援, ツール類の設計ならびに開発経験を豊富に持つ。近年はWebシステムの分野において, フロントエンドおよびサーバーサイド(REST API)の開発でPHP(Laravel), Goの実装経験を積む。
        
        過去にも .NET(旧 ASP.NET MVC)フレームワークを用いたフロントエンド(HTML, CSS3, JavaScript)からバックエンド(C#, Oracle Database)まで, Webアプリケーション開発をフルスタックで経験。
        
        幅広い技術分野の実装経験, さらに要件定義から実装・テストまで, 15年以上にわたる end to end の業務経験を兼ね備え, ユーザー目線の提案力, 実装力を強みとする。`.replace(
            /\n/g,
            "<br />"
        );

    // スクロールによるグラフ表示の発火フラグ
    let fireFrontend = false;
    let fireBackend = false;
    let fireUtilities = false;

    onMount(() => {
        const chartFrontend = document.querySelector("#cf");
        const chartBackend = document.querySelector("#cb");
        const chartUtilities = document.querySelector("#cu");

        // スクロール処理
        const observeFire = function () {
            let wy = window.pageYOffset;
            let wb = wy + window.innerHeight - 150; // ブラウザの最下部位置を取得
            // チャートの位置を取得
            let chartFrontendPos =
                wy + chartFrontend.getBoundingClientRect().top;
            let chartBackendPos = wy + chartBackend.getBoundingClientRect().top;
            let chartUtilitiesPos =
                wy + chartUtilities.getBoundingClientRect().top;

            // チャートの位置がウィンドウの最下部位置を超えたら起動
            if (wb > chartFrontendPos && fireFrontend == false) {
                fireFrontend = true;
            }

            if (wb > chartBackendPos && fireBackend == false) {
                fireBackend = true;
            }

            if (wb > chartUtilitiesPos && fireUtilities == false) {
                fireUtilities = true;
            }
        };

        window.addEventListener("load", observeFire); // 読み込み時の処理
        window.addEventListener("scroll", observeFire); // スクロール時の処理
    });
</script>

<div class="skillmaps-container">
    <h2>Skills</h2>
    <h4>by Rader Chart</h4>
    <div id="skillmaps">
        <div id="cf" class="skillsmap">
            {#if fireFrontend}
                <SkillsMap data={data_frontend} title={"Web Frontend"} />
            {:else}
                <div class="blankbox"></div>
            {/if}
        </div>
        <div id="cb" class="skillsmap">
            {#if fireBackend}
                <SkillsMap data={data_backend} title={"Backend/Serverside"} />
            {:else}
                <div class="blankbox"></div>
            {/if}
        </div>
        <div id="cu" class="skillsmap">
            {#if fireUtilities}
                <SkillsMap
                    data={data_utilties}
                    title={"Utilities/Infrastructure"}
                />
            {:else}
                <div class="blankbox"></div>
            {/if}
        </div>
    </div>
    <h4>by Timeline</h4>
    <div id="timeline-container">
        <div id="timeline">
            <Timeline />
        </div>
    </div>    
    <p>{@html message_jp}</p>
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    .skillmaps-container {
        background-color: #110011;
        padding-top: 1em;
        padding-left: 1em;
        padding-bottom: 1em;
        opacity: 0.9;
        padding-bottom: 10vh;
    }
    .blankbox {
        height: 50vh;
    }
    #skillmaps {
        margin-bottom: 1em;
    }

    .skillsmap {
        background-color: #000000;
        margin-bottom: 5em;
        margin-right: 1em;
    }

    @media (min-width: 768px) {
        .skillsmap {
            width: 30vw;
        }
        #skillmaps {
            display: flex;
            justify-content: space-around;
        }
    }

    #timeline-container {
        background-color: #110011;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.9;
    }
    #timeline {
        width: 95vw;
        padding-bottom: 2em;
    }
    @media (min-width: 768px) {
        #timeline {
            width: 80vw;
        }
    }
    </style>
