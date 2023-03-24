<div id="ninja-wrap">
    <div id="ninja" class="animate"><img src="/ninja_kumogakure.png" alt="ninja"></div>
</div>

<style>
    #ninja-wrap {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0%;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    #ninja {
        position: relative;
        top: -100%;
        width: 100vw;
        height: 100%;
        z-index: 2147483647;
        overflow: hidden;
        text-align: center;
    }
    @keyframes ninja-sanjou {
        0% {
            transform: scale(0.5);
        }
        20% {
            transform: translateY(100%) scale(0.5);
        }
        30% {
            transform: translateY(100%) scale(0.5);
        }
        50% {
            transform: translateY(150%) scale(2.0);
        }
        80% {
            transform: translateY(180%) scale(2.0);
        }
        100% {
            transform: translateY(-150%) scale(3.0);
        }
    }
    .animate {
        animation-name: ninja-sanjou;
        animation-direction: normal;
        animation-duration: 2s;
        animation-iteration-count: 1;
    }
</style>