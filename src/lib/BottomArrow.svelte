<script lang="ts">
    import Saos from "saos";
</script>

<div class="wrapper">
    <Saos animation={"from-left 0.5s 5 cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(256, 256, 256, 1);"><path d="M16.939 10.939 12 15.879l-4.939-4.94-2.122 2.122L12 20.121l7.061-7.06z"></path><path d="M16.939 3.939 12 8.879l-4.939-4.94-2.122 2.122L12 13.121l7.061-7.06z"></path></svg>
    </Saos>
</div>

<style>

    .wrapper {
        position: relative;
        top: 10%;
        left: 0.5em;
        width: 90vw;
    }
    @media (min-width: 768px) {
        .wrapper {
            top: 40%;
        }
    }
</style>
