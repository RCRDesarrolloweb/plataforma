<template>
  <div class="bg-blue-2">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mail: null,
      pass: null
    }
  }
}
</script>
