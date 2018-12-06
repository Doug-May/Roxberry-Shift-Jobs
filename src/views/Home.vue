<template>
  <v-bottom-nav id="nav" :active.sync="selectedComponent" :value="true" color="secondary">
    <v-btn color="accent" flat value="opening">
      <span>Opening</span>
      <v-icon>alarm</v-icon>
    </v-btn>
    <v-btn color="accent" flat value="midshift">
      <span>Midshift</span>
      <v-icon>wb_sunny</v-icon>
    </v-btn>
    <v-btn color="accent" flat value="closing">
      <span>Closing</span>
      <v-icon>brightness_2</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    data() {
      return {
        selectedComponent: ''
      }
    },
    created() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 12) {
        this.selectedComponent = "opening";
      } else if (hours >= 12 && hours <= 17) {
        this.selectedComponent = "midshift";
      } else {
        this.selectedComponent = "closing";
      }
    }
  }
</script>

<style scoped>
#nav {
    border-radius: 10px;
    width: 95%;
    max-width: 800px;
    margin: auto;
    margin-bottom: 10px;
  }
</style>
