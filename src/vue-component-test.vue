<template>
  <div class="vue-component-test">
    Vue Component Test - {{ param }}
  </div>
</template>

<script>
export default {
  props: {
    param: {
      type: String,
      default: '',
    },
  },
}
</script>
