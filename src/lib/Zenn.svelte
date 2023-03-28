<script lang="ts">
    import { lang } from "../scripts/lang";
    import { getZennFeeds } from "../scripts/getZennFeeds";
    import type { Root } from "../scripts/getZennFeeds";

    let promise = getZennFeeds<Root>("daifukuninja");
    const articleCount = 5;

    let isJa = true;
    lang.subscribe((value) => {
        if (value == 'ja') {
            isJa = true;
        } else {
            isJa = false;
        }
    });
</script>

<div id="zenn-container">
    <h2>Articles</h2>
    {#if isJa}
    <div id="articles-caption">
        <a href="https://zenn.dev/" target="_blank">Zenn</a> で技術記事を書いています。(<a
            href="https://zenn.dev/daifukuninja" target="_blank">@daifukuninja</a
        >)<br>
        初めて触った技術のインプレッション, 日々の仕事の中で得た小さな気付きなどを中心に、なるべくこまめにアウトプットできるよう心がけています。<br>
        ここでは最新の {articleCount} 件の記事を紹介します。
    </div>
    {:else}
    <div id="articles-caption">
        I write technical articles on <a href="https://zenn.dev/" target="_blank">Zenn</a>.(<a
            href="https://zenn.dev/daifukuninja" target="_blank">@daifukuninja</a
        >)<br>
        I try to output as often as possible, focusing on impressions of technologies I have touched for the first time, and small insights I have gained in my daily work.<br>
        Here are the {articleCount} most recent articles.<br>
        (very truely sorry, Japanese only.)
    </div>
    {/if}
    {#await promise}
        <p>loading...</p>
    {:then params}
        <div id="articles-container">
            {#each { length: articleCount } as _, i}
                <div class="article">
                    <a href={params.items[i].link} target="_blank">
                        <img src={params.items[i].enclosure.link} alt="thumbnail" />
                    </a>
                    <p class="zenn-description">
                        {@html params.items[i].description.replace(
                            /\n/g,
                            "<br />"
                        )}
                    </p>
                    <p class="zenn-pubdate">posted at {params.items[i].pubDate}</p>
                </div>
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <h5>powered by Zenn</h5>
</div>
<div class="blankbox" />

<style>
    #zenn-container {
        background-color: #110011;
        opacity: 0.9;
        padding-left: 1em;
    }
    .zenn-description {
        font-size: small;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
    .zenn-pubdate {
        font-size: small;
    }
    #articles-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
    #articles-caption {
        font-family: "Noto Sans JP";
        padding-bottom: 1em;
    }
    .article {
        width: 360px;
    }
    .blankbox {
        height: 50vh;
        background-color: #110011;
        opacity: 0.9;
    }
    h5 {
        margin-bottom: 0;
    }
    p {
        font-family: 'M PLUS Rounded 1c';
    }
    a {
        text-decoration: underline;
    }
    a:visited {
        color: inherit;
    }
</style>
