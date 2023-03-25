<script>
    import Introduction from "./Introduction.svelte";
    import BottomArrow from "./BottomArrow.svelte";
    import { lang } from "../scripts/lang";
    const message_jp = `ここは日本在住のエンジニア、 \nMIHARA Keishi のポートフォリオサイトです。`.replace(/\n/g, "<br />");
    const message_en = `This is Keishi MIHARA's portfolio site.
    ( web + backend + desktop application engineer.  ...well....I'll do whatever I can. )`.replace(/\n/g, "<br />");

    let langKey;

    lang.subscribe(value => {
        langKey = value;
    });

    const switchLanguage = () => {
        lang.update((v) => {
            return v == 'ja' ? 'en' : 'ja'
        })
    }
</script>

<div class="beginning">
    <h4>{@html message_jp}</h4>
    <h5>{@html message_en}</h5>
    {#if langKey == 'ja'}
        <a href={null} on:click={switchLanguage}>English here.</a>
    {:else}
        <a href={null} on:click={switchLanguage}>日本語はこちら</a>
    {/if}
    <Introduction />
    <BottomArrow />
</div>

<style>
    h4,
    h5 {
        font-family: "Noto Sans JP";
    }
    a {
        cursor: pointer;
        text-decoration: underline;
    }
    .beginning {
        background-color: #110011;
        height: 100vh;
        /* width: 100%; */
        padding-left: 1em;
    }
</style>
