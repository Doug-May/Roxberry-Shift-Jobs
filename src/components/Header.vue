<template>
<div id="header">
<v-toolbar app color="secondary">
        <v-toolbar-items>
          <img id="logo" src="../assets/Logo.png">
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn flat color="primary">
          <span class="mr-2">Admin</span>
        </v-btn>
      </v-toolbar>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#header {
  margin-bottom: 70px;
}
#logo {
 height: 75px;
 margin-top: -5px;
 cursor: pointer;
}
</style>
