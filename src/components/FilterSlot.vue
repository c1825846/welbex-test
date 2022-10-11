<template>
  <div class="filter">
    <div class="title">
      {{ title ? title : '&nbsp;' }}
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FilterSlot',
  props: ['title']
}
</script>

<style scoped>

</style>