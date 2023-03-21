<script lang="ts">
    import { getZennFeeds } from "../scripts/getZennFeeds";
    import type { Root } from "../scripts/getZennFeeds";

    let promise = getZennFeeds<Root>();
    const articleCount = 5;
</script>

<div id="zenn-container">
    <h2>Articles</h2>
    <div id="articles-caption">
        <a href="https://zenn.dev/">Zenn</a> で技術記事を書いています。(<a
            href="https://zenn.dev/daifukuninja">@daifukuninja</a
        >)<br>
        触ったことのなかった技術のインプレッション, 日々の仕事の中で得た小さな気付きなどを中心に、なるべくこまめにアウトプットできるよう心がけています。<br>
        ここでは最新の {articleCount} 件の記事を紹介します。
    </div>
    {#await promise}
        <p>loading...</p>
    {:then params}
        <div id="articles-container">
            {#each { length: articleCount } as _, i}
                <div class="article">
                    <img src={params.items[i].enclosure.link} alt="thumbnail" />
                    <p class="zenn-description">
                        {@html params.items[i].description.replace(
                            /\n/g,
                            "<br />"
                        )}
                    </p>
                    <p class="zenn-pubdate">created at {params.items[i].pubDate}</p>
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
</style>
