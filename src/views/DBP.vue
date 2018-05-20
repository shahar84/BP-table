<template>
    <DataTable headline="DBP (mm Hg)" :tableData="dbpData"></DataTable>
</template>

<script>
import DataTable from '../components/DataTable';
import dbpData from '../data/dbp.json';

export default {
  name: 'DBP',
  components: {
    DataTable,
  },
  data() {
    return {
      dbpData,
    };
  },
};
</script>

<style scoped>

</style>