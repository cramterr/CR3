<template>
<div class="page">
  <div class="consoles">
    <div class="selection" v-for="console in consoles" :key="console.id">
      <img :src="'/images/consoles/'+console.image" v-on:click="display(console)">
    </div>
  </div>
  <div id="selectedConsole">
    <h1>{{selection.name}}</h1>
    <div class="info">
      <img :src="'/images/consoles/'+selection.image">
      <p>{{selection.about}}</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ConsoleInfo',
  props: {
    consoles: Array
  },
  methods: {
    display(console) {
      this.num = console.id - 1
    }
  },
  data() {
    let num = 0;
    return {
      num: num
    }
  },
  computed: {
    selection() {
      return this.$root.$data.consoles[this.num];
    }
  },
}
</script>

<style scoped>
.page {

}

.consoles {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

#selectedConsole {
  display: flex;
  display-direction: column;
  flex-wrap: wrap;
}

.selection img {
  height: 80px;
  width: 80px;
  object-fit: scale-down;
}

.info img {
  height: 500px;
  width: 500px;
  object-fit: contain;
  margin: 5px;
}

.info {
  display: flex;
  background: #262626;
  border-radius: 25px;
}

.info p {
  margin: 10px;
  font-size: 1.3em;
  color: #b8b8b8;
}

.selection:hover {
  border-bottom: 3px solid red;
}
</style>
