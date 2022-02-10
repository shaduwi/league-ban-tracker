<script>
  import SummonerInput from "../components/summonerInput.svelte";
  export let summonerName;
</script>

<main class="h-screen">
  <div class="flex flex-col items-center w-screen">
    <h1 class="text-white text-7xl my-20">Are they banned?</h1>
    <SummonerInput name={summonerName} />
  </div>
</main>
