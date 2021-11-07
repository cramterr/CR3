<template>
<div class="tierwrapper">
  <div class="tier" v-for="console in consoles" :key="console.id">
    <div class="image">
      <img :src="'/images/consoles/'+console.image">
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Tier',
  props: {
    consoles: Array
  },
}
</script>

<style scoped>
.tierwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.tier {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tier img {
  margin: 10px;
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
