<script lang="ts">
    import { getZennFeeds } from "../scripts/getZennFeeds";
    import type { Root } from "../scripts/getZennFeeds";

    let promise = getZennFeeds<Root>();
</script>

<div id="zenn-container">
    <h4>Zenn への投稿</h4>
    {#await promise}
        <p>loading...</p>
    {:then params}
        <img src={params.feed.image} alt="" width="50" />
        <h5><a href={params.feed.link}>@{params.items[0].author}</a></h5>
        {#each {length: 5} as _, i}
            <img src={params.items[i].enclosure.link} alt="thumbnail" />
            <p class="zenn-description">{params.items[i].description}</p>
            <p class="zenn-pubdate">{params.items[i].pubDate}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <a data-theme="dark" data-layers="1,2,5" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/4df6e200b1e0eadf2139dca096d50b">StackShare</a>
</div>

<style>
    #zenn-container {
        height: 80vh;
        background-color: #110011;
        opacity: 0.9;
    }
    .zenn-description {
        font-size: small;
    }
    .zenn-pubdate {
        font-size: small;
    }
</style>
