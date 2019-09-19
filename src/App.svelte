<script>
  import { onMount } from "svelte";
  export let name;
  export let date;

  onMount(async () => {
    const res = await fetch("/api/getApi");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <h2>The date according to Node.js is:</h2>
  <p>{date ? date : 'Loading date...'}</p>
</main>
