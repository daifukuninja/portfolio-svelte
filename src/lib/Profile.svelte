<script lang="ts">
    import { profileJp } from "../scripts/messages";
  const message_jp = profileJp;

</script>

<div id="profile">
    <h2>Profile</h2>
    <p>{@html message_jp}</p>
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
