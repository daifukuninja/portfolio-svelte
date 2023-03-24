<script>
    import Ninja from "./Ninja.svelte";
    let ninnin = false;
    const callNinja = () => {
        ninnin = true;
        setTimeout(() => {
            window.scroll({top: 0, behavior: 'auto'});
            ninnin = false;
        }, 1700);
    }
</script>

<div id="closing">
    最後までお付き合いいただき, ありがとうございました。<br>
    忍者をクリックすると忍法でトップに戻ります。<img on:mousedown={callNinja} src="./ninja_shinobiashi.png" alt="ninja" width="40">
</div>
{#if ninnin}
    <Ninja />    
{/if}
<style>
    #closing {
        background-color: #110011;
        opacity: .9;
        padding-left: 1em;
        padding-bottom: 5vh;
        font-size: 11pt;
        position: relative;
    }
    img {
        vertical-align: middle;
        cursor: pointer;
    }
</style>