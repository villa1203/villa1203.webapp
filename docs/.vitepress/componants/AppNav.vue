<template>
  <div
      class="v-app-nav"
  >
    <a
        href="/"
    >villa1203 {{themeRoute.path}}</a>
    <a
        v-for="item of themeData.theme.nav"
        :href="item.link"
    >{{ item.text }}</a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useData, useRoute, useRouter} from "vitepress"

export default defineComponent({
  data() {
    return {
      themeData: useData(),
      themeRoute: useRoute(),
    }
  },

  mounted() {
    console.log(this.themeData.theme)
  }

})</script>

<style lang="scss" scoped>
.v-app-nav {
  width: 100%;
  font-size: .5rem;
  line-height: .5rem;
  display: flex;

  > a {
    display: block;
    padding: .5rem;
  }
}
</style>
