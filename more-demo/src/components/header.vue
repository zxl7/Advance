<template>
  <div>
    <header class="navbar">
      <div class="sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
        <router-link class="item" v-for="item in routers" :key="item.id" :to="{ name: item.name }">
          {{ item.title }}
        </router-link>
      </div>
    </header>
  </div>
</template>
<script>
import routers from '@/router/routers'

export default {
  data() {
    return {
      routers: routers,
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.navbar {
  z-index: 2;
  height: 3.6rem;
  line-height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}
.sidebar-button {
  display: flex;
  align-items: center;
  & .icon {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
  }

  .item {
    margin: 0 1rem;
  }
}
</style>
