<script>
  export let name;
  import { navigate } from "svelte-routing";
  function onSubmit() {
    navigate("/result/" + name, { replace: true });
  }
</script>

<div class="relative mt-10">
  <form on:submit={onSubmit}>
    <input
      class="h-14 min-w-124 px-5 rounded-lg focus:shadow focus:outline-none"
      type="text"
      placeholder="Enter summoner name..."
      bind:value={name}
    />
    <div class="absolute top-2 right-2">
      <button
        class="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
        >Search</button
      >
    </div>
  </form>
</div>
