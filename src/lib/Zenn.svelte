<script lang="ts">
    import { getZennFeeds } from "../scripts/getZennFeeds";
    import type { Root } from "../scripts/getZennFeeds";

    let promise = getZennFeeds<Root>();
</script>

<div>
    {#await promise}
        <p>loading...</p>
    {:then params}
        <h4>{params.feed.title}</h4>
        <!-- {#each params. as article}
        <h4>{article.title}</h4>
        <img src={article.thumbnail} alt="thumbnail" />
        <p>{article.description}</p>
    {/each} -->
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
