<script lang="ts">
    import { lang } from "../scripts/lang";
    import { profile } from "../scripts/messages";

    let message = profile.jp.replace(/\n/g, "<br />");

    lang.subscribe((value) => {
        let m;
        if (value == 'ja') {
            m = profile.jp;
        } else {
            m = profile.en;
        }
        message = m.replace(/\n/g, "<br />");
    });
</script>

<div id="profile">
    <h2>Profile</h2>
    <p>{@html message}</p>
    <div class="blankbox" />
</div>

<style>
    p {
        font-family: "Noto Sans JP";
    }
    #profile {
        background-color: #110011;
        padding-left: 1em;
        opacity: 0.9;
    }
    .blankbox {
        height: 50vh;
    }
    @media (min-width: 768px) {
        p {
            width: 50vw;
        }
    }
</style>
