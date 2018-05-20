<template>
    <DataTable headline="SBP (mm Hg)" :tableData="sbpData"></DataTable>
</template>

<script>
import DataTable from '../components/DataTable';
import sbpData from '../data/sbp.json';

export default {
  name: 'SBP',
  components: {
    DataTable,
  },
  data() {
    return {
      sbpData,
    };
  },
};
</script>

<style scoped>

</style>