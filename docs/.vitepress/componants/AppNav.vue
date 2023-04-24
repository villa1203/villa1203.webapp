<template>
  <div
      class="v-app-nav"
  >
    <div>
      <a
          href="/"
      >villa1203</a>
      <div
          style="width: 0"
      >
        {{themeRoute.path}}
      </div>
    </div>
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
})</script>

<style lang="scss" scoped>
.v-app-nav {
  width: 100%;
  font-size: .5rem;
  line-height: .5rem;
  display: flex;
  align-items: flex-start;

  > * {
    display: block;
    padding: .5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
}
</style>
