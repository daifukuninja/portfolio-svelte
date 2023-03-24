<script>
    import Introduction from "./Introduction.svelte";
    import BottomArrow from "./BottomArrow.svelte";
    const message_jp = `ここは日本在住のエンジニア、 \nMIHARA Keishi のポートフォリオサイトです。`.replace(/\n/g, "<br />");
    const message_en = `This is Keishi MIHARA's portfolio site.`;
    const caption = `( web + backend + desktop application engineer.  ...well....I'll do whatever I can. )`;
    const contents = ``;
</script>

<div class="beginning">
    <h4>{@html message_jp}</h4>
    <h4>{message_en}</h4>
    <h5>{caption}</h5>
    <div>{contents}</div>
    <Introduction />
    <BottomArrow />
</div>

<style>
    h4,
    h5 {
        font-family: "Noto Sans JP";
    }
    .beginning {
        background-color: #110011;
        height: 100vh;
        /* width: 100%; */
        padding-left: 1em;
    }
</style>
