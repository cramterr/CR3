<template>
<div>
  <ConsoleList :consoles="consoles" />
</div>
</template>

<script>
import ConsoleList from "../components/ConsoleList.vue"
export default {
  name: 'Add',
  components: {
    ConsoleList
  },
  computed: {
    consoles() {
      return this.$root.$data.consoles;
    },
  }
}
</script>
