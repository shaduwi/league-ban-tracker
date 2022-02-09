<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Result from "./routes/Result.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/" component={Home} />
    <Route path="result/:id" let:params>
      <Result summonerName={params.id} />
    </Route>
  </div>
</Router>
