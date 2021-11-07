<template>
<div class="wrapper">
  <div class="consoles">
    <div class="console" v-for="console in consoles" :key="console.id">
      <div class="info">
        <h1>{{console.name}}</h1>
        <p>{{console.company}}</p>
      </div>
      <div class="image">
        <img :src="'/images/consoles/'+console.image">
      </div>
      <div class="add">
        <button id="addS" v-on:click="addToS(console)">S</button>
        <button id="addA" v-on:click="addToA(console)">A</button>
        <button id="addB" v-on:click="addToB(console)">B</button>
        <button id="addC" v-on:click="addToC(console)">C</button>
        <button id="addD" v-on:click="addToD(console)">D</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ConsoleList',
  props: {
    consoles: Array
  },
  methods: {
    addToS(console) {
      this.$root.$data.s.push(console);
    },
    addToA(console) {
      this.$root.$data.a.push(console);
    },
    addToB(console) {
      this.$root.$data.b.push(console);
    },
    addToC(console) {
      this.$root.$data.c.push(console);
    },
    addToD(console) {
      this.$root.$data.d.push(console);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.consoles {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.console {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.console img {
  height: 200px;
  width: 200px;
  object-fit: contain;
}

.info {
  color: #000;
  text-align: center;
  padding: 10px;
}

.info h1 {
  font-size: 16px;
  font-family: sans-serif;
}

.info p {
  margin: 0px;
  font-size: 10px;
  font-family: sans-serif;
}


.add {
  display: flex;
  justify-content: space-around;
}

#addS,
#addA,
#addB,
#addC,
#addD {
  height: 30px;
  width: 30px;
  color: black;
  border: none;
}

#addS:hover,
#addA:hover,
#addB:hover,
#addC:hover,
#addD:hover {
  border: 2px solid black;
}

#addS:visited {
  border: 4px solid black;
}

#addS {
 background: #ed6758;
}

#addA {
 background: #f08c4a;
}

#addB {
 background: #f0b94a;
}

#addC {
 background: #f0e54a;
}

#addD {
 background: #c6f04a;
}

.auto {
  margin-left: auto;
}
</style>
