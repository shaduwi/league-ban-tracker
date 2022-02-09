<script>
  import SummonerInput from "../components/summonerInput.svelte";
  import { onMount } from "svelte";
  import {
    getSummonerByName,
    getMatchesByPuuid,
    getMatchById,
  } from "../api/match";

  export let summonerName;
  let summonerPuuid;
  let lastMatchMessage;
  let bannedMessage = "banned";
  let bannedDescription = "";

  onMount(async () => {
    summonerPuuid = await getSummonerByName(summonerName);
    summonerPuuid = summonerPuuid.puuid;

    let match = await getMatchesByPuuid(summonerPuuid);

    let matchDate = await getMatchById(match);
    matchDate = matchDate.info.gameEndTimestamp;

    let currTime = new Date().getTime();

    let dateDiff = (currTime - matchDate) / 1000;

    let d = new Date(0);
    d.setSeconds(dateDiff);
    if (matchDate !== undefined) {
      lastMatchMessage =
        d.getDate() -
        1 +
        " days " +
        d.getHours() +
        " hours " +
        d.getMinutes() +
        " minutes ago";
    } else {
      lastMatchMessage = "not found";
    }

    if (d.getDate() < 30) {
      bannedMessage = "not banned";
    }
    if (d.getDate() > 30) {
      bannedMessage = "probably banned";
      bannedDescription = "has not played a game in the last 30 days";
    }
    if (d.getDate() > 365) {
      bannedMessage = "banned";
      bannedDescription = "has not played a game in a year";
    }
  });
</script>

<main class="bg-blue-gray-900 h-screen">
  <div class="flex flex-col items-center w-screen">
    {#if summonerPuuid}
      <h1 class="text-white text-7xl mt-20">
        {summonerName} is {bannedMessage}
      </h1>
      <h2 class="text-white text-3xl mt-5">
        Their last match was {lastMatchMessage}
      </h2>
      <h4 class="text-gray-500">{bannedDescription}</h4>
    {:else}
      <h1 class="text-white text-7xl mt-20">This user was not found</h1>
    {/if}
    <SummonerInput name="" />
  </div>
</main>
