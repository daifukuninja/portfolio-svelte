<script lang="ts">
  import Title from "./lib/Title.svelte";
  import Beginning from "./lib/Beginning.svelte";
  import Background from "./lib/Background.svelte";
  import AboutMe from "./lib/AboutMe.svelte";
  import Skills from "./lib/Skills.svelte";
  import Zenn from "./lib/Zenn.svelte";
  import Profile from "./lib/Profile.svelte";
  import Closing from "./lib/Closing.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Title />
  <Beginning />
  <Background />
  <AboutMe />
  <Skills />
  <Zenn />
  <Profile />
  <Closing />
  <Footer />
</main>

<style>
  main {
    color: #ffffff;
  }

  @keyframes -global-from-left {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
