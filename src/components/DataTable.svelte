<script>
  import { onMount } from "svelte";
  import generateDataTable from "../lib/generateDataTable";

  export let tableData;

  onMount(() => {
    jQuery(document).ready(() => {
      const table = generateDataTable(tableData);
    });
  });
</script>

<style>
  .table-wrapper {
    width: 100%;
  }

  .table {
    background-color: white;
    margin: 0 !important;
  }
</style>

<div class="table-wrapper">
  <table
    id="api-data-table"
    class="table table-bordered table-hover table-responsive" />
</div>
