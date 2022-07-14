<template>
  <div class="v-layout">

    <main class="v-layout__nav">
      <app-nav></app-nav>
    </main>

    <main
        class="v-layout__main"
        :style="{
      textAlign: isHome ? 'center' : 'left'
        }"
    >
      {{themeRoute.path}}
      <Content
          class="v-content"
      />
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppNav from "../componants/AppNav.vue"
import {useRoute} from "vitepress"

export default defineComponent({
  components: {AppNav},

  data() {
    return {
      themeRoute: useRoute(),
    }
  },

  computed: {
    isHome():boolean {
      return this.themeRoute.path.length < 2
    }
  }

})</script>

<style lang="scss">
.v-layout {
  .v-layout__nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background: linear-gradient(white 40%, #ffffff00);
  }

  .v-layout__main {
    position: relative;
    width: 100%;
    max-height: 100vh;
    overflow: scroll;
    top: 50vh;
    transform: translateY(-50%);
    padding-top: 2rem;
    box-sizing: border-box;
  }

  .v-content {
    max-width: 25em;
    margin: auto;

    div {
      > *:first-child {
        margin-top: 0;
      }

      > *:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
