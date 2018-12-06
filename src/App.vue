<template>
  <div id="app" class="fadeIn">
  <v-app>
    <Header/>
    <v-container>
      <transition name="router-anim" mode="out-in">
        <router-view/>
      </transition>
    </v-container>
  </v-app>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
#app {
  background-color: #fff;
}

.router-anim-enter-active {
  animation: coming 550ms;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 550ms;
}

.fadeIn {
  opacity: 0;
  animation: fadeIn 1000ms forwards 1;
  animation-delay: 500ms;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(7px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-7px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fadeIn {
    from {
      /* transform: translate(0px, 30px); */
      opacity: 0;
    }

    to {
      /* transform: translate(0px, 0px); */
      opacity: 1;
    }
  }
</style>
