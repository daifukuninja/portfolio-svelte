<script>
    import { lang } from "../scripts/lang";
    import { closing } from "../scripts/messages";
    import Ninja from "./Ninja.svelte";

    let message = closing.jp.replace(/\n/g, "<br />");

    lang.subscribe((value) => {
        let m;
        if (value == 'ja') {
            m = closing.jp;
        } else {
            m = closing.en;
        }
        message = m.replace(/\n/g, "<br />");
    });
    
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
    {@html message}<img on:mousedown={callNinja} src="./ninja_shinobiashi.png" alt="ninja" width="40">
</div>
{#if ninnin}
    <Ninja />    
{/if}
<style>
    #closing {
        font-family: "Noto Sans JP";
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