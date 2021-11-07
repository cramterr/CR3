<template>
<div class="tierList">
  <div class="wrapper">
    <div id="letterS">S</div>
    <Tier :consoles="Sconsoles" />
  </div>
  <div class="wrapper">
    <div id="letterA">A</div>
    <Tier :consoles="Aconsoles" />
  </div>
  <div class="wrapper">
    <div id="letterB">B</div>
    <Tier :consoles="Bconsoles" />
  </div>
  <div class="wrapper">
    <div id="letterC">C</div>
    <Tier :consoles="Cconsoles" />
  </div>
  <div class="wrapper">
    <div id="letterD">D</div>
    <Tier :consoles="Dconsoles" />
  </div>
</div>
</template>

<script>
import Tier from "../components/Tier.vue"
export default {
  name: 'Home',
  components: {
    Tier
  },
  computed: {
    Sconsoles() {
      return this.$root.$data.s;
    },
    Aconsoles() {
      return this.$root.$data.a;
    },
    Bconsoles() {
      return this.$root.$data.b;
    },
    Cconsoles() {
      return this.$root.$data.c;
    },
    Dconsoles() {
      return this.$root.$data.d;
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  border: 2px solid black;
  justify-content: flex-start;
  flex-wrap: wrap;
}

#letterS {
  background: #ed6758;
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 150px;
}

#letterA {
  background: #f08c4a;
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 150px;
}

#letterB {
  background: #f0b94a;
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 150px;
}

#letterC {
  background: #f0e54a;
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 150px;
}

#letterD {
  background: #c6f04a;
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  line-height: 150px;
}

</style>
