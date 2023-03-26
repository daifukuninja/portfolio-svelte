<script>
    import { aboutMe } from "../scripts/messages";
    import { lang } from "../scripts/lang";
    let message;
    lang.subscribe((value) => {
        let m;
        if (value == 'ja') {
            m = aboutMe.jp;
        } else {
            m = aboutMe.en;
        }
        message = m.replace(/\n/g, "<br />");
    });
    message = aboutMe.jp.replace(/\n/g, "<br />");
</script>

<div id="about">
    <h2>About Me</h2>
    <h4 class="caption">( "Wikipedia" style. )</h4>
    <p>{@html message}</p>
    <div>
        <ul>
            <li># GitHub <a href="https://github.com/daifukuninja" target="_blank">https://github.com/daifukuninja</a></li>
            <li># Zenn <a href="https://zenn.dev/daifukuninja" target="_blank">https://zenn.dev/daifukuninja</a></li>
        </ul>
    </div>
</div>

<style>
    #about {
        font-family: "Noto Sans JP";
        background-color: #110011;
        height: 100vh;
        padding-top: 1em;
        padding-left: 1em;
        opacity: 0.9;
    }
    .caption {
        font-size: large;
        margin-bottom: 2em;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: underline;
    }
    a:visited {
        color: inherit;
    }
    @media (min-width: 768px) {
        p {
            width: 50vw;
        }
    }
</style>
