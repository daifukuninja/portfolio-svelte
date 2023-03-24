<script>
    import { introduction } from "../scripts/messages";
    import { lang } from "../scripts/lang";

    let message = introduction.jp.replace(/\n/g, "<br />");

    lang.subscribe((value) => {
        let m;
        if (value == 'ja') {
            m = introduction.jp;
        } else {
            m = introduction.en;
        }
        message = m.replace(/\n/g, "<br />");
    });
</script>

<div class="intro">
    <p>{@html message}</p>
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    .intro {
        background-color: #110011;
        padding-top: 1em;
    }
</style>
