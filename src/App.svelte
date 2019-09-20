<script>
  import axios from "axios";
  import Navbar from "./components/Navbar.svelte";
  import Loader from "./components/Loader.svelte";
  import DataTable from "./components/DataTable.svelte";
  import DataTableKeys from "./components/DataTableKeys.svelte";
</script>

<style>

</style>

<Navbar />
<main class="container d-flex">

  {#await axios.get('/api/getApi')}
    <Loader />
  {:then res}
    <DataTable tableData={res.data['24hour_api']} />
    <DataTableKeys />
  {:catch error}
    <div class="alert alert-danger" role="alert">{error.message}</div>
  {/await}

</main>
