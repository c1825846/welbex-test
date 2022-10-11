<template>
  <div class="table">
    <div class="row row--title">
      <div class="cell" v-for="name in names">
        {{ name }}
      </div>
    </div>
    <div class="row" v-for="row in tableData">
      <div class="cell" v-for="cell in row">
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    names: Array,
    tableData: Array
  }
}
</script>

<style lang="scss" scoped>
.table {

}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3px 0;
  &:nth-child(2n) {
    background: #e0e0e0;
  }
  &--title {
    font-weight: 700;
  }
}

.cell {

}
</style>