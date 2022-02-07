<script>
  import { onMount } from "svelte";
  import {
    getSummonerByName,
    getMatchesByPuuid,
    getMatchById,
  } from "../api/match";
  const summonerName = "shaduwi";
  let summonerPuuid;

  onMount(async () => {
    const summoner = await getSummonerByName(summonerName);
    summonerPuuid = summoner.puuid;
    const match = await getMatchesByPuuid(summonerPuuid);
    console.log(summonerPuuid);
    console.log(match);
  });
</script>

<main class="bg-blue-gray-900 h-screen">
  <div class="flex flex-col items-center w-screen">
    <h1 class="text-white text-7xl mt-20">yes he is banned :)</h1>
    <h2 class="text-white text-3xl mt-5">the users name is: {summonerName}</h2>
    <h2 class="text-white text-3xl mt-5">
      the users puuid is: {summonerPuuid}
    </h2>

    <div class="relative mt-10">
      <input
        class="h-14 min-w-124 px-5 rounded-lg focus:shadow focus:outline-none"
        type="text"
        placeholder="Enter summoner name..."
      />
      <div class="absolute top-2 right-2">
        <button
          class="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
          >Search</button
        >
      </div>
    </div>
  </div>
</main>
